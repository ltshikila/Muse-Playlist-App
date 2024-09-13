// AddSong.jsx
import React, { Component } from 'react';
import { Link } from 'react-router-dom'; 
import './AddSong.css'; 

class AddSong extends Component {
  constructor(props) {
    super(props);
    this.state = {
      songName: '',
      artist: '',
      album: '',
      year: '',
      coverImage: null
    };
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleFileChange = (event) => {
    this.setState({ coverImage: event.target.files[0] });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    // Handle add song logic here
  };

  render() {
    const { songName, artist, album, year } = this.state;

    return (
      <div className="add-song-page">
        <h2>Add Song</h2>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="songName"
            value={songName}
            placeholder="Song Name"
            onChange={this.handleInputChange}
            required
          />
          <input
            type="text"
            name="artist"
            value={artist}
            placeholder="Artist"
            onChange={this.handleInputChange}
            required
          />
          <input
            type="text"
            name="album"
            value={album}
            placeholder="Album"
            onChange={this.handleInputChange}
            required
          />
          <input
            type="number"
            name="year"
            value={year}
            placeholder="Year"
            onChange={this.handleInputChange}
            required
          />
          <label>Cover art</label>
          <input
            type="file"
            name="coverImage"
            placeholder="Cover Art"
            onChange={this.handleFileChange}
            required
          />
          <Link to="/playlist/:playlistId">
          <button type="submit">Add Song</button>
          </Link>
        </form>
      </div>
    );
  }
}

export default AddSong;
