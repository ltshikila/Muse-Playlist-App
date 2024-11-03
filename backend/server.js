const express = require("express");
const path = require("path");
const { MongoClient, ObjectId } = require("mongodb");
require("regenerator-runtime/runtime");

const app = express();
app.use(express.json()); // Parse JSON bodies

const cors = require('cors');
app.use(cors());

// MongoDB connection URI
const uri = "mongodb+srv://ltshikila17:Uy94UZuXiw1lrIKU@cluster0.nmrzm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const client = new MongoClient(uri);

// MONGO DB CONNECTION FUNCTION
async function connectDB() {
  try {
    await client.connect();
    const db = client.db("muse");
    return {
      users: db.collection("users"),
      songs: db.collection("songs"),
      playlists: db.collection("playlists"),
    };
  } catch (e) {
    console.error(e);
    return null;
  }
}

// Middleware to connect to the database
app.use(async (req, res, next) => {
  const collections = await connectDB();
  if (!collections) {
    return res.status(500).json({ error: "Failed to connect to the database" });
  }
  req.db = collections;
  next();
});

// Helper function for fuzzy search
function buildFuzzyQuery(field, query) {
  return { [field]: { $regex: query, $options: "i" } };
}

// Authentication Routes (Signup, Login, Logout)

// Sign up %
app.post("/api/auth/signup", async (req, res) => {
  const { username, password, email } = req.body;
  if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
    return res.status(400).json({ error: "Invalid email format" });
  }
  try {
    const existingUser = await req.db.users.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ error: "Username already exists" });
    }
    const newUser = {
      name: "", surname: "", username, password, email, pfp_image: "", bio: "", socialmedia: [],
      friends: [], owned_playlists: [], saved_playlists: [], logged_in: true
    };
    await req.db.users.insertOne(newUser);
    res.json({ message: "User created successfully" });
  } catch (error) {
    res.status(500).json({ error: "Error signing up" });
  }
});

// Log in %
app.post("/api/auth/login", async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await req.db.users.findOne({ username, password });
    if (!user) {
      return res.status(401).json({ error: "Invalid credentials" });
    }
    await req.db.users.updateOne({ username }, { $set: { logged_in: true } });

    // Store the username in localStorage
    res.json({ message: "Login successful", user });
  } catch (error) {
    res.status(500).json({ error: "Error logging in" });
  }
});


// Log out %
app.post("/api/auth/logout", async (req, res) => {
  const { username } = req.body;
  try {
    await req.db.users.updateOne({ username }, { $set: { logged_in: false } });
    res.json({ message: "Logout successful" });
  } catch (error) {
    res.status(500).json({ error: "Error logging out" });
  }
});

// Profile Management Routes

// View your profile %
app.get("/api/users/profile", async (req, res) => {
  const { username } = req.query;
  try {
    const user = await req.db.users.findOne({ username });
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: "Error fetching profile" });
  }
});



// Edit your profile 
app.put("/api/users/profile", async (req, res) => {
  const { username, name, surname, email, bio, pfp_image } = req.body;
  try {
    const updatedData = { name, surname, email, bio, pfp_image };
    await req.db.users.updateOne({ username }, { $set: updatedData });
    res.json({ message: "Profile updated successfully" });
  } catch (error) {
    res.status(500).json({ error: "Error updating profile" });
  }
});

//Delete Your Profile
app.delete("/api/users/:username", async (req, res) => {
  const { username } = req.params;
  try {
      await req.db.users.deleteOne({ username });
      res.json({ message: "Profile deleted successfully" });
  } catch (error) {
      res.status(500).json({ error: "Error deleting profile" });
  }
});


// View other users' profiles %
app.get("/api/users/:username", async (req, res) => {
  const { username } = req.params;
  try {
    const user = await req.db.users.findOne({ username });
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: "Error fetching user profile" });
  }
});

// Friend / Unfriend other users %
app.post("/api/users/friend", async (req, res) => {
  const { username, friendUsername } = req.body;
  try {
    await req.db.users.updateOne({ username }, { $push: { friends: { user: friendUsername, accepted: true } } });
    res.json({ message: "Friend added" });
  } catch (error) {
    res.status(500).json({ error: "Error adding friend" });
  }
});

app.delete("/api/users/unfriend", async (req, res) => {
  const { username, friendUsername } = req.body;
  try {
    await req.db.users.updateOne({ username }, { $pull: { friends: { user: friendUsername } } });
    res.json({ message: "Friend removed" });
  } catch (error) {
    res.status(500).json({ error: "Error removing friend" });
  }
});

// Playlist and Song Management

// View songs feed %
app.get("/api/songs", async (req, res) => {
  try {
    const songs = await req.db.songs.find({}).toArray();
    res.json(songs);
  } catch (error) {
    res.status(500).json({ error: "Error fetching songs" });
  }
});

// View playlists feed %
app.get("/api/playlists", async (req, res) => {
  try {
    const playlists = await req.db.playlists.find({}).toArray();
    res.json(playlists);
  } catch (error) {
    res.status(500).json({ error: "Error fetching playlists" });
  }
});

// Add song to the Songs collection %
app.post("/api/songs", async (req, res) => {
  const { name, artist, album, year, length, uploaded_by, coverart } = req.body;
  try {
    const result = await req.db.songs.insertOne({
      name, artist, album, year, length, uploaded_by, coverart, upload_date: new Date()
    });

    res.json({ _id: result.insertedId, message: "Song added successfully" });
  } catch (error) {
    res.status(500).json({ error: "Error adding song" });
  }
});




// Create a playlist %
app.post("/api/playlists", async (req, res) => {
  const { name, created_by, bio, tags, coverart } = req.body;
  try {
    // Insert the new playlist
    const result = await req.db.playlists.insertOne({
      name,
      created_by,
      bio,
      tags,
      coverart,
      songs: [],
      comments: []
    });
    const newPlaylistId = result.insertedId; // Retrieve the new playlist's ID

    // Update the user's owned_playlists and saved_playlists
    await req.db.users.updateOne(
      { username: created_by }, // Find the user by username
      {
        $push: {
          owned_playlists: newPlaylistId, // Add the playlist ID to owned_playlists
          saved_playlists: newPlaylistId   // Add the playlist ID to saved_playlists as well
        }
      }
    );

    res.json({ message: "Playlist created successfully", id: newPlaylistId });
  } catch (error) {
    res.status(500).json({ error: "(API) Error creating playlist" });
  }
});



//View a Playlist
app.get("/api/playlists/:id", async (req, res) => {
  const { id } = req.params;
  try {
      const playlist = await req.db.playlists.findOne({ _id: new ObjectId(id) });
      if (!playlist) {
          return res.status(404).json({ error: "Playlist not found" });
      }
      res.json(playlist);
  } catch (error) {
      res.status(500).json({ error: "Error fetching playlist" });
  }
});


// Add a song and also add it to the specified playlist
app.post("/api/playlists/:playlistId/songs", async (req, res) => {
  const { playlistId } = req.params;
  const { name, artist, album, year, length, uploaded_by, coverart } = req.body;

  try {
    // First, add the song to the songs collection
    const songResult = await req.db.songs.insertOne({
      name, artist, album, year, length, uploaded_by, coverart, upload_date: new Date()
    });
    const songId = songResult.insertedId; // Get the new song ID

    // Now, add the song ID to the playlist's songs array
    await req.db.playlists.updateOne(
      { _id: new ObjectId(playlistId) },
      { $push: { songs: songId } }
    );

    res.json({ message: "Song added successfully to both songs collection and playlist", songId });
  } catch (error) {
    res.status(500).json({ error: "Error adding song to playlist" });
  }
});

// get song details by song object ID
// get song details by song object ID
app.get('/api/songs/:id', async (req, res) => {
  const { id } = req.params; // Get the song ID from the request parameters

  try {
    // Validate the ObjectId
    if (!ObjectId.isValid(id)) {
      return res.status(400).json({ error: 'Invalid song ID' });
    }

    // Fetch the song from the database
    const song = await req.db.songs.findOne({ _id: new ObjectId(id) }); // Use 'new ObjectId(id)'

    // Check if the song exists
    if (!song) {
      return res.status(404).json({ error: 'Song not found' });
    }

    // Return the song data
    res.json(song);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error fetching song data' });
  }
});




// Delete a song
app.delete("/api/songs/:songId", async (req, res) => {
  const { songId } = req.params;
  try {
    await req.db.songs.deleteOne({ _id: ObjectId(songId) });
    res.json({ message: "Song deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Error deleting song" });
  }
});

// Delete a playlist
app.delete("/api/playlists/:playlistId", async (req, res) => {
  const { playlistId } = req.params;
  try {
    await req.db.playlists.deleteOne({ _id: ObjectId(playlistId) });
    res.json({ message: "Playlist deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Error deleting playlist" });
  }
});

// Search Routes

// Search for playlists (by name or tags)
app.get("/api/playlists/search", async (req, res) => {
  const { query } = req.query;
  try {
    const playlists = await req.db.playlists.find({
      $or: [buildFuzzyQuery("name", query), buildFuzzyQuery("tags", query)]
    }).toArray();
    res.json(playlists);
  } catch (error) {
    res.status(500).json({ error: "Error searching playlists" });
  }
});

// Search for songs (by name)
app.get("/api/songs/search", async (req, res) => {
  const { query } = req.query;
  try {
    const songs = await req.db.songs.find(buildFuzzyQuery("name", query)).toArray();
    res.json(songs);
  } catch (error) {
    res.status(500).json({ error: "Error searching songs" });
  }
});

// Search for users (by username)
app.get("/api/users/search", async (req, res) => {
  const { query } = req.query;
  try {
    const users = await req.db.users.find(buildFuzzyQuery("username", query)).toArray();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: "Error searching users" });
  }
});

// SERVE STATIC FILES
app.use(express.static(path.join(__dirname, "../../frontend/public")));

// CATCH-ALL ROUTE FOR CLIENT-SIDE ROUTING
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, "../../frontend/public/index.html"));
});


// Server Setup
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
