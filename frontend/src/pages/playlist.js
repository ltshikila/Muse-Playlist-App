import React, { Component } from 'react';
import { Link, useParams } from 'react-router-dom';
import Header from '../components/header';
import Song from '../components/song';
import Comment from '../components/comment';
import './playlist.css';
import add from '../../public/assets/images/add.png';

class Playlist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      coverart: '',
      name: '',
      username: '',
      bio: '',
      tags: '',
      songs: [],
      comments: [],
      loading: true,
      error: null
    };
  }

  async componentDidMount() {
    const { playlistId } = this.props;
  
    try {
      const response = await fetch(`/api/playlists/${playlistId}`);
      if (!response.ok) {
        throw new Error('Error fetching playlist');
      }
  
      const playlist = await response.json();
      const songPromises = playlist.songs.map(async (songIdObj) => {
        try {
          // Check if songIdObj is a string directly
          const songId = typeof songIdObj === 'string' ? songIdObj : songIdObj.$oid; 
          console.log(`Fetching song data for ID: ${songId}`); // Log the song ID
          const songResponse = await fetch(`/api/songs/${songId}`);
          if (!songResponse.ok) {
            throw new Error('Error fetching song data');
          }
          return await songResponse.json();
        } catch (error) {
          console.error(`Failed to fetch song data for ID: ${songIdObj}`, error);
          return null; // Return null or handle the error accordingly
        }
      });
  
      const songs = await Promise.all(songPromises);
      const filteredSongs = songs.filter(song => song !== null); // Filter out null values
  
      this.setState({
        coverart: playlist.coverart,
        name: playlist.name,
        username: playlist.created_by,
        bio: playlist.bio,
        tags: playlist.tags,
        songs: filteredSongs, // Use filtered songs
        comments: playlist.comments,
        loading: false
      });
    } catch (error) {
      console.error(error); // Log the error for debugging
      this.setState({ error: error.message, loading: false });
    }
  }
  




  render() {
    const { coverart, name, username, bio, tags, songs, comments, loading, error } = this.state;

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    const { playlistId } = this.props; // Get the playlistId from props

    return (
      <div className='playlistpage-page'>
        <Header />
        <div className='playlistpage-body'>
          <main className='playlistpage-section'>
            <div className="playlistpage-details">
              <img src={coverart} alt={name} className="playlistpage-cover" />
              <div className="playlistpage-info">
                <h1>{name}</h1>
                <p>By {username}</p>
                <p>{bio}</p>
                <p>{tags}</p>
              </div>
            </div>
            <div className="song-list">
              {songs.length > 0 ? (
                songs.map((song, index) => (
                  <Song key={song._id.$oid} {...song} /> // Use song ID as the key
                ))
              ) : (
                <p className='empty-message'>No songs yet.</p>
              )}
            </div>
            <Link to={`/add-song/${playlistId}`}>
              <img src={add} className='addicon' alt="Add Song" />
            </Link>
          </main>
          <aside className='comment-section'>
            <h3 className='comment-heading'>Comments</h3>
            {comments.length > 0 ? (
              comments.map((comment, index) => (
                <Comment key={index} {...comment} />
              ))
            ) : (
              <p className='empty-message'>No comments yet.</p>
            )}

            <input type="text" placeholder="Add comment" className="comment-input" />
          </aside>
        </div>
      </div>
    );
  }
}

export default function PlaylistWrapper() {
  const { playlistId } = useParams();
  return <Playlist playlistId={playlistId} />;
}
