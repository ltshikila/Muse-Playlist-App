import React, { Component } from 'react';
import Playlist from '../components/PlaylistActivity';
import './home_playlists.css';
import Header from '../components/header';
import { Link } from 'react-router-dom'; 

class PlaylistFeed extends Component {
    state = {
        playlists: [],
    };

    async componentDidMount() {
        try {
            const response = await fetch('/api/playlists');
            const playlists = await response.json();
            this.setState({ playlists });
        } catch (error) {
            console.error('Error fetching playlists:', error);
        }
    }

    render() {
        const { playlists } = this.state;

        return (
            <div className="songs-page">
                <Header />
                <div className="songs-container">
                    <div className="songs-tabs">
                        <Link to="/home/songs"><button className="tab">Songs</button></Link>
                        <Link to="/home/playlists"><button className="tab active">Playlists</button></Link>
                    </div>
                    <div className="feed-section">
                        <h3>Playlists</h3>
                        {playlists.map((playlist, index) => (
                            <Playlist key={index} {...playlist} />
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}

export default PlaylistFeed;
