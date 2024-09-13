import React from 'react';
import { Link } from 'react-router-dom'; 
import './home_songs.css';
import Song from '../components/song';
import starboy from '../../public/assets/images/coverarts/starboy.png'
import Header from '../components/header';
// Sample data for demonstration
const songs = [
    {
        coverImage: starboy,
        songName: 'Starboy',
        artist: 'The Weeknd',
        album: 'Starboy',
        year: '2016',
        addedBy: 'Goku',
        length: '3:50',
        dateAdded: '50min ago',
        //saveIcon: 'path/to/save-icon.png'
    },
    // Add more song objects here...
];

const SongsPage = () => {
    return (
        <div className="songs-page">
            <Header />
            <div className="songs-container">
                <div className="songs-tabs">
                    <Link to=""><button className="tab active">Songs</button></Link>
                    <Link to="/home/playlists"><button className="tab">Playlists</button></Link>

                </div>
                <div className="songs-list">
                    {songs.map((song, index) => (
                        <Song key={index} {...song} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SongsPage;
