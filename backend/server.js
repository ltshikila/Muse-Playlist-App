const express = require("express");
const path = require("path");

// CREATE APP
const app = express();

// SERVE A STATIC PAGE FROM THE PUBLIC DIRECTORY
app.use(express.static(path.join(__dirname, "../../frontend/public")));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../../frontend/public/index.html"));
  });
  
// PORT TO LISTEN TO
const PORT = process.env.PORT || 3210;
app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`);
});
