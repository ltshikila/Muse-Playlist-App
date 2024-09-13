// AddPlaylist.jsx
import React, { Component } from 'react';
import { Link } from 'react-router-dom'; 
import './AddPlaylist.css'; // Add appropriate path to your CSS file

class AddPlaylist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playlistName: '',
      description: '',
      genre: '',
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
    // Handle add playlist logic here
  };

  render() {
    const { playlistName, description, genre } = this.state;

    return (
      <div className="add-playlist-page">
        <h2>Add Playlist</h2>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="playlistName"
            value={playlistName}
            placeholder="Playlist Name"
            onChange={this.handleInputChange}
            required
          />
          <textarea
            name="description"
            value={description}
            placeholder="Description"
            onChange={this.handleInputChange}
            required
          />
          <input
            type="text"
            name="genre"
            value={genre}
            placeholder="Genre"
            onChange={this.handleInputChange}
            required
          />
          <input
            type="text"
            name="tags"
            value={genre}
            placeholder="Tag(s)"
            onChange={this.handleInputChange}
            required
          />
          <label>Cover art</label>
          <input
            type="file"
            name="coverImage"
            onChange={this.handleFileChange}
            required
          />
          <Link to="/profile/my">
          <button type="submit">Add Playlist</button>
          </Link>
          
        </form>
      </div>
    );
  }
}

export default AddPlaylist;
