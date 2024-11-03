// SongsPage.jsx
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; 
import './home_songs.css';
import Song from '../components/song';
import Header from '../components/header';

const SongsPage = () => {
    const [songs, setSongs] = useState([]);

    // Fetch songs data from the API
    const fetchSongs = async () => {
        try {
            const response = await fetch('/api/songs'); // Update this API path accordingly
            const data = await response.json();
            setSongs(data);
        } catch (error) {
            console.error('Error fetching songs:', error);
        }
    };

    useEffect(() => {
        fetchSongs();
    }, []);

    // Function to delete a song
    const deleteSong = async (songId) => {
        try {
            const response = await fetch(`/api/songs/${songId}`, {
                method: 'DELETE',
            });
            if (!response.ok) {
                throw new Error('Failed to delete song');
            }
            // Remove the deleted song from the state
            setSongs(songs.filter(song => song._id !== songId));
        } catch (error) {
            console.error('Error deleting song:', error);
        }
    };

    return (
        <div className="songs-page">
            <Header />
            <div className="songs-container">
                <div className="songs-tabs">
                    <Link to=""><button className="tab active">Songs</button></Link>
                    <Link to="/home/playlists"><button className="tab">Playlists</button></Link>
                </div>
                <div className="songs-list">
                    {songs.map((song) => (
                        <Song key={song._id} {...song} onDelete={deleteSong} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SongsPage;
