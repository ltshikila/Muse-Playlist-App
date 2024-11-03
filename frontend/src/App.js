// App.jsx
import React, { Component } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
// Main pages
import SplashPage from './pages/splashpage';
import HomeSongs from './pages/home_songs';
import HomePlaylists from './pages/home_playlists';
import ProfilePageFP from './pages/profile_fp';
import ProfilePageTP from './pages/profile_tp';
import Playlist from './pages/playlist';
import SearchResults from './pages/SearchResults';
// Forms
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import AddSong from './pages/AddSong';
import AddPlaylist from './pages/AddPlaylist';
import EditProfile from './pages/EditProfile';

class App extends Component {
  render() {
    // Creating a router with dynamic routing
    const router = createBrowserRouter([
      { path: '/', element: <SplashPage /> },
      { path: '/home/songs', element: <HomeSongs /> },
      { path: '/home/playlists', element: <HomePlaylists /> },
      { path: '/editprofile', element: <EditProfile /> },
      { path: '/profile/my', element: <ProfilePageFP /> }, 
      { path: '/profile/:username', element: <ProfilePageTP /> }, // Dynamic routing for other users' profiles
      { path: '/playlist/:playlistId', element: <Playlist /> }, // Dynamic routing for playlists
      { path: '/login', element: <LoginPage /> },
      { path: '/signup', element: <SignupPage /> },
      { path: '/add-song/:playlistId', element: <AddSong /> }, // Dynamic routing for adding songs to a specific playlist
      { path: '/add-playlist', element: <AddPlaylist /> },
      { path: '/search', element: <SearchResults /> },
    ]);

    return (
      <div className="App">
        <RouterProvider router={router} />
      </div>
    );
  }
}

export default App;
