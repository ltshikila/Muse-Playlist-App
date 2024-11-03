// SearchResults.jsx
import React, { Component } from 'react';
import { withRouter } from '../utils/withRouter';
import PlaylistCard from '../components/PlaylistCard';
import Song from '../components/song';
import './SearchResults.css';

class SearchResults extends Component {
    constructor(props) {
        super(props);
        this.state = {
            playlists: [],
            songs: [],
            users: [],
            query: new URLSearchParams(this.props.location.search).get('query') || '',
            loading: true,
        };
    }

    componentDidMount() {
        this.searchAll();
    }

    async searchAll() {
        const { query } = this.state;

        try {
            // Fetch playlists
            const playlistsResponse = await fetch(`/api/playlists/search?query=${query}`);
            const playlists = await playlistsResponse.json();

            // Fetch songs
            const songsResponse = await fetch(`/api/songs/search?query=${query}`);
            const songs = await songsResponse.json();

            // Fetch users
            const usersResponse = await fetch(`/api/users/search?query=${query}`);
            const users = await usersResponse.json();

            this.setState({ playlists, songs, users, loading: false });
        } catch (error) {
            console.error("Error fetching search results:", error);
        }
    }

    render() {
        const { playlists, songs, users, loading } = this.state;

        if (loading) {
            return <div>Loading...</div>;
        }

        return (
            <div className="search-results">
                <h1>Search Results</h1>

                <section className="users-section">
                    <h2>Users</h2>
                    {users.length > 0 ? (
                        users.map((user) => (
                            <div className="user-item" key={user._id}>
                                <img src={user.pfp_image} alt={`${user.username} profile`} />
                                <p>{user.username}</p>
                            </div>
                        ))
                    ) : (
                        <p>No users found.</p>
                    )}
                </section>

                <section className="songs-section">
                    <h2>Songs</h2>
                    {songs.length > 0 ? (
                        songs.map((song) => <Song key={song._id} {...song} />)
                    ) : (
                        <p>No songs found.</p>
                    )}
                </section>

                <section className="playlists-section">
                    <h2>Playlists</h2>
                    {playlists.length > 0 ? (
                        playlists.map((playlist) => (
                            <PlaylistCard
                                key={playlist._id}
                                playlistCover={playlist.coverart}
                                playlistName={playlist.name}
                                numSongs={playlist.songs.length}
                            />
                        ))
                    ) : (
                        <p>No playlists found.</p>
                    )}
                </section>
            </div>
        );
    }
}

export default withRouter(SearchResults);
