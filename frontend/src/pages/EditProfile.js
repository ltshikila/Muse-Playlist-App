import React, { Component } from 'react';
import { useNavigate } from 'react-router-dom';
import './EditProfile.css';

class EditProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: localStorage.getItem('username') || '',
      name: '',
      surname: '',
      email: '',
      bio: '',
      profileImage: ''
    };
  }

  async componentDidMount() {
    const { username } = this.state;

    try {
      const response = await fetch(`/api/users/profile?username=${username}`);
      const data = await response.json();

      if (response.ok) {
        this.setState({
          name: data.name,
          surname: data.surname,
          email: data.email,
          bio: data.bio,
          profileImage: data.pfp_image
        });
      } else {
        alert('Failed to load profile data');
      }
    } catch (error) {
      alert("An error occurred while loading profile data.");
    }
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    const { username, name, surname, email, bio, profileImage } = this.state;

    const updatedProfile = {
      username,
      name,
      surname,
      email,
      bio,
      pfp_image: profileImage
    };

    try {
      const response = await fetch('/api/users/profile', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json' // Set content type to application/json
        },
        body: JSON.stringify(updatedProfile) // Convert the object to JSON
      });
      const data = await response.json();

      if (response.ok) {
        alert(data.message);
        this.props.navigate('/profile/my');
      } else {
        alert(data.error);
      }
    } catch (error) {
      alert("An error occurred while updating your profile.");
    }
  };

  render() {
    const { name, surname, email, bio, profileImage } = this.state;

    return (
      <div className="edit-profile-page">
        <h2>Edit Profile</h2>
        <form onSubmit={this.handleSubmit}>
          <input
            className="input"
            type="text"
            name="name"
            value={name}
            placeholder="First Name"
            onChange={this.handleInputChange}
          />
          <input
            className="input"
            type="text"
            name="surname"
            value={surname}
            placeholder="Surname"
            onChange={this.handleInputChange}
          />
          <input
            className="input"
            type="email"
            name="email"
            value={email}
            placeholder="Email"
            onChange={this.handleInputChange}
          />
          <textarea
            name="bio"
            value={bio}
            placeholder="Bio"
            onChange={this.handleInputChange}
          />
          <label>Profile Picture</label>
          <input
            className="input"
            type="text"
            name="profileImage"
            value={profileImage}
            onChange={this.handleInputChange}
          />
          <button type="submit" className="button">Update Profile</button>
        </form>
      </div>
    );
  }
}

// Functional component to pass `navigate` to EditProfile
function EditProfileWithNavigate(props) {
  const navigate = useNavigate();
  return <EditProfile {...props} navigate={navigate} />;
}

export default EditProfileWithNavigate;
