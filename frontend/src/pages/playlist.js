// Playlist.jsx
import React, { Component } from 'react';
import { Link } from 'react-router-dom'; 
import { useParams } from 'react-router-dom';
import Header from '../components/header';
import Song from '../components/song';
import Comment from '../components/comment';
import './playlist.css';
import playlistCover from '../../public/assets/images/coverarts/playlistone.jpg';
import pfpone from '../../public/assets/images/pfpone.jpg';
import pfptwo from '../../public/assets/images/pfptwo.jpg';
import starboy from '../../public/assets/images/coverarts/starboy.png';
import bornsinner from '../../public/assets/images/coverarts/bornsinner.jpg';
import add from '../../public/assets/images/add.png';

class Playlist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playlistCover: playlistCover,
      playlistName: "Playlist Name",
      creatorName: "Username",
      genre: "Pop",
      description: "Yo this is my first playlist guys I hope u enjoy it!!!!!",
      hashtags: "#POP, #NEW, #RIHANNA, #ANTI, #BEYONCE",
      songs: [
        { coverImage: starboy, songName: 'Starboy', artist: 'The Weeknd', album: 'Starboy', year: '2016', addedBy: 'Goku', length: '3:50', dateAdded: '50min ago' },
        { coverImage: bornsinner, songName: 'Trouble', artist: 'J.Cole', album: 'Born Sinner(Deluxe)', year: '2013', addedBy: 'Goku', length: '4:18', dateAdded: '1hr ago' },
      ],
      comments: [
        { profileImage: pfpone, username: 'KimK', comment: 'YO BRO I DONT LIKE THIS PLAYLIST!!' },
        { profileImage: pfptwo, username: 'Mona Lisa', comment: 'Nice collection, keep it up!' },
      ]
    };
  }

  render() {
    const { playlistCover, playlistName, creatorName, genre, description, hashtags, songs, comments } = this.state;
    return (
      <div className='playlist-page'>
        <Header />
        <div className='playlist-body'>
          <main className='playlist-section'>
            <div className="playlist-details">
              <img src={playlistCover} alt={playlistName} className="playlist-cover" />
              <div className="playlist-info">
                <h1>{playlistName}</h1>
                <p>By {creatorName}</p>
                <p>{genre}</p>
                <p>{description}</p>
                <p>{hashtags}</p>
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
            <h3>Comments</h3>
            {comments.map((comment, index) => (
              <Comment key={index} {...comment} />
            ))}
            <div className="add-comment">
              <input type="text" placeholder="Add comment" />
            </div>
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
