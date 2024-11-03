import React, { Component } from 'react';
import { withRouter } from '../utils/withRouter';
import './PlaylistCard.css';

class PlaylistCard extends Component {
  handleClick = () => {
    const { playlistId, navigate } = this.props;
    navigate(`/playlist/${playlistId}`);
  };

  render() {
    const { playlistCover, playlistName, numSongs } = this.props;

    return (
      <div className="playlist-item" onClick={this.handleClick}>
        <img 
          src={playlistCover} 
          alt={playlistName} 
          className="playlistcard-cover" 
        />
        <div className="playlistcard-info">
          <h4 className="playlistcard-name">{playlistName}</h4>
          <p className="playlistcard-numsongs">{numSongs} songs</p>
        </div>
      </div>
    );
  }
}

export default withRouter(PlaylistCard); // Wrap PlaylistCard with withRouter
