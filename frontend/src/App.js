// App.jsx
import React, { Component } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
// Main pages
import SplashPage from './pages/splashpage';
import HomeSongs from './pages/home_songs';
import HomePlaylists from './pages/home_playlists';
import ProfilePageFP from './pages/profile_fp';
import ProfilePageTP from './pages/profile_tp'; // Assuming ProfilePageTP is the other profile page
import Playlist from './pages/playlist';
// Forms
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignUpPage';
import AddSong from './pages/AddSong';
import AddPlaylist from './pages/AddPlaylist';
//images
import pfp from '../public/assets/images/pfptwo.jpg'
import playlistcoverone from '../public/assets/images/coverarts/playlistone.jpg'
import playlistcovertwo from '../public/assets/images/coverarts/playlisttwo.jpg'
class App extends Component {
  render() {
    // Creating a router with dynamic routing
    const router = createBrowserRouter([
      { path: '/', element: <SplashPage /> },
      { path: '/home/songs', element: <HomeSongs /> },
      { path: '/home/playlists', element: <HomePlaylists /> },
      { path: '/profile/my', element: <ProfilePageFP
        profileImage={pfp}
        caption="I like extra cheesy nachos with chicken and bacon dipped in ice cream"
        friends={345}
        playlists={4}
        saves={4}
        name="User's Name"
        surname="User's Surname"
        instagramLink="https://instagram.com/user"
        twitterLink="https://twitter.com/user"
        spotifyLink="https://spotify.com/user"
        createdPlaylists={
          [
            { playlistCover:  playlistcoverone , playlistName: 'Pop Percs', numSongs: 31 },
            { playlistCover:  playlistcovertwo , playlistName: 'I HATE YOUU', numSongs: 31 },
          ]
        }
      /> },
      { path: '/profile/:username', element: <ProfilePageTP /> }, // Dynamic routing for other users' profiles
      { path: '/playlist/:playlistId', element: <Playlist /> }, // Dynamic routing for playlists
      { path: '/login', element: <LoginPage /> },
      { path: '/signup', element: <SignupPage /> },
      { path: '/add-song', element: <AddSong /> },
      { path: '/add-playlist', element: <AddPlaylist /> },
    ]);

    return (
      <div className="App">
        <RouterProvider router={router} />
      </div>
    );
  }
}

export default App;



{/* <ProfilePageFP
        profileImage={pfp}
        caption="I like extra cheesy nachos with chicken and bacon dipped in ice cream"
        friends={345}
        playlists={4}
        saves={4}
        name="User's Name"
        surname="User's Surname"
        instagramLink="https://instagram.com/user"
        twitterLink="https://twitter.com/user"
        spotifyLink="https://spotify.com/user"
        createdPlaylists={
          [
            { playlistCover:  playlistcoverone , playlistName: 'Pop Percs', numSongs: 31 },
            { playlistCover:  playlistcovertwo , playlistName: 'I HATE YOUU', numSongs: 31 },
          ]
        }
      /> */}