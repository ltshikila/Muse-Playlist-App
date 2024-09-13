import React, { Component } from 'react';
//import defaultCover from '../../public/assets/images/defaultCover.png';
import './PlaylistCard.css'

class PlaylistCard extends Component {
  render() {
    const { playlistCover, playlistName, numSongs } = this.props;

    return (
      <div className="playlist-item">
        <img 
          src={playlistCover} 
          alt={playlistName} 
          className="playlist-cover" 
        />
        <div className="playlist-info">
          <h4>{playlistName}</h4>
          <p>{numSongs} songs</p>
        </div>
      </div>
    );
  }
}

export default PlaylistCard;
