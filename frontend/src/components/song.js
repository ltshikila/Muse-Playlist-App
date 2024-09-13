import React, { Component } from 'react';
import './Song.css';
import saveicon from '../../public/assets/images/bookmark.png'
class Song extends Component {
  render() {
    const {
      coverImage,
      songName,
      artist,
      album,
      year,
      addedBy,
      length,
      dateAdded,
      save = saveicon,
    } = this.props;

    return (
      <div className="song">
        <div className="song-cover">
          <img src={coverImage} alt={`${songName} cover`} />
        </div>
        <div className="song-info">
          <div className="song-name">{songName}</div>
          <div className="song-artist">{artist}</div>
        </div>
        <div className="song-album">{album}</div>
        <div className="song-year">{year}</div>
        <div className="song-added-by">{addedBy}</div>
        <div className="song-length">{length}</div>
        <div className="song-date-added">{dateAdded}</div>
        <div className="song-save">
          <img src={save} alt="Save icon" />
        </div>
      </div>
    );
  }
}

export default Song;
