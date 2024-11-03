import React, { Component } from 'react';
import { withRouter } from '../utils/withRouter'; // Import withRouter
import './AddSong.css';

class AddSong extends Component {
  constructor(props) {
    super(props);
    this.state = {
      songName: '',
      artist: '',
      album: '',
      year: '',
      length: '',
      coverImage: '' // Ensure coverImage is initialized in state
    };
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    const { songName, artist, album, year, length, coverImage } = this.state;
  
    const createdBy = localStorage.getItem('username');
  
    const songData = {
      name: songName,
      artist,
      album,
      year,
      length,
      uploaded_by: createdBy,
      coverart: coverImage
    };
  
    try {
      // Now, add the song and associate it with the playlist in one call
      const playlistId = this.props.params.playlistId;
  
      const response = await fetch(`/api/playlists/${playlistId}/songs`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(songData)
      });
  
      if (response.ok) {
        // Redirect to the playlist page if the operation was successful
        this.props.navigate(`/playlist/${playlistId}`);
      } else {
        console.error('Error adding song to the songs collection and playlist.');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  render() {
    const { songName, artist, album, year, length, coverImage } = this.state;

    return (
      <div className="add-song-page">
        <h2>Add Song</h2>
        <form onSubmit={this.handleSubmit}>
          <label className='label'>Song Name</label>
          <input
            className="input"
            type="text"
            name="songName"
            value={songName}
            onChange={this.handleInputChange}
            required
          />
          <label className='label'>Artist</label>
          <input
            className="input"
            type="text"
            name="artist"
            value={artist}
            onChange={this.handleInputChange}
            required
          />
          <label className='label'>Album</label>
          <input
            className="input"
            type="text"
            name="album"
            value={album}
            onChange={this.handleInputChange}
            required
          />
          <label className='label'>Year</label>
          <input
            className="input"
            type="number"
            name="year"
            value={year}
            onChange={this.handleInputChange}
            required
          />
          <label className='label'>Length</label>
          <input
            className="input"
            type="text"
            name="length"
            value={length}
            onChange={this.handleInputChange}
            required
          />
          <label className='label'>Cover art</label>
          <input
            className="input"
            type="text"
            name="coverImage"
            value={coverImage}
            onChange={this.handleInputChange}
            required
          />
          <button type="submit" className="songsubmitbtn">Add Song</button>
        </form>
      </div>
    );
  }
}

export default withRouter(AddSong);
