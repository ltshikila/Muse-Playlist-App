import React, { Component } from 'react';
import { withRouter } from '../utils/withRouter';
import './AddPlaylist.css'; // Add appropriate path to your CSS file

class AddPlaylist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      bio: '',
      tags: '', // e.g. "#hiphop, #rap, #pop, #rock"
      coverart: ''
    };
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    const { name, bio, tags, coverart } = this.state;
    const { navigate } = this.props;
  
    const createdBy = localStorage.getItem('username'); // Retrieve username from local storage
  
    try {
      const response = await fetch('/api/playlists', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, bio, tags, coverart, created_by: createdBy }), 
      });
  
      if (response.ok) {
        const result = await response.json();
        alert('Playlist created successfully');
        navigate('/profile/my'); // Redirect to profile page
      } else {
        const errorResult = await response.json();
        alert(errorResult.error || 'Unsuccessful creating playlist');
      }
    } catch (error) {
      console.error('Network or other error:', error);
      alert('Error creating playlist');
    }
  };
  

  render() {
    const { name, bio, tags, coverart } = this.state;

    return (
      <div className="add-playlist-page">
        <h2>Add Playlist</h2>
        <form onSubmit={this.handleSubmit}>
          <input
            className="input"
            type="text"
            name="name"
            value={name}
            placeholder="Playlist Name"
            onChange={this.handleInputChange}
            required
          />
          <textarea
            name="bio"
            value={bio}
            placeholder="bio"
            onChange={this.handleInputChange}
            required
          />
          
          <input
            className="input"
            type="text"
            name="tags"
            value={tags}
            placeholder="Tag(s)"
            onChange={this.handleInputChange}
            required
          />
          <label>Cover art</label>
          <input
            className="input"
            type="text"
            name="coverart"
            value={coverart}
            placeholder="Cover Art URL"
            onChange={this.handleInputChange}
            required
          />
          <button type="submit" className="button">Add Playlist</button>
        </form>
      </div>
    );
  }
}

export default withRouter(AddPlaylist);
