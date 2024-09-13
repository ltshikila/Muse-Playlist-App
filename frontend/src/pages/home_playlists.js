import React, { Component } from 'react';
import Playlist from '../components/PlaylistActivity';
import './home_playlists.css';
import './home_songs.css'
import Header from '../components/header';
import { Link } from 'react-router-dom'; 
class PlaylistFeed extends Component {
    render() {
        // Example data - replace with props or state in a real application
        const playlistActivities = [
            {
                profileImage: 'path/to/profile/image1.png',
                username: 'Username1',
                playlistName: 'Playlist Name 1',
                numSongs: 34,
                date: '15 min ago',
            },
            {
                profileImage: 'path/to/profile/image2.png',
                username: 'Username2',
                playlistName: 'Playlist Name 2',
                numSongs: 22,
                date: '15 min ago',
            },
            {
                profileImage: 'path/to/profile/image3.png',
                username: 'Username3',
                playlistName: 'Playlist Name 3',
                numSongs: 34,
                date: '15 min ago',
            },
        ];

        return (
            <div className="songs-page">
                <Header />
                <div className="songs-container">
                    <div className="songs-tabs">
                        
                        <Link to="/home/songs"><button className="tab">Songs</button></Link>
                        <Link to="/home/playlists"><button className="tab active">Playlists</button></Link>
                    </div>
                    <div className="feed-section">
                        <h3>Today</h3>
                        {playlistActivities.map((activity, index) => (
                            <Playlist key={index} {...activity} />
                        ))}
                    </div>
                    <div className="feed-section">
                        <h3>This Week</h3>
                        {playlistActivities.map((activity, index) => (
                            <Playlist key={index} {...activity} />
                        ))}
                    </div>
                </div>
            </div>

        );
    }
}

export default PlaylistFeed;
