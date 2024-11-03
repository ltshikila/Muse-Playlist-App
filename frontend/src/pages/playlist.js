// Playlist.jsx
import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom'; 
import { useParams } from 'react-router-dom';
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
    const { playlistId } = this.props; // Get the playlistId from props

    try {
      const response = await fetch(`/api/playlists/${playlistId}`);
      if (!response.ok) {
        throw new Error('Error fetching playlist');
      }

      const playlist = await response.json();
      this.setState({
        coverart: playlist.coverart, 
        name: playlist.name, 
        username: playlist.created_by, // Assuming you have created_by as user object
        bio: playlist.bio, 
        tags: playlist.tags, 
        songs: playlist.songs, 
        comments: playlist.comments,
        loading: false
      });
    } catch (error) {
      this.setState({ error: error.message, loading: false });
    }
  }

  render() {
    const { coverart, name, username, bio, tags, songs, comments, loading, error } = this.state;

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

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
              {songs.map((song, index) => (
                <Song key={index} {...song} />
              ))}
            </div>
            <Link to="/add-song">
              <img src={add} className='addicon' alt="Add Song" />
            </Link>
          </main>
          <aside className='comment-section'>
            <h3 className='comment-heading'>Comments</h3>
            {comments.map((comment, index) => (
              <Comment key={index} {...comment} />
            ))}
            
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
