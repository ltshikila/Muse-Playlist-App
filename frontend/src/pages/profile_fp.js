// ProfilePageFP.jsx
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PlaylistCard from '../components/PlaylistCard';
import defaultProfileImage from '../../public/assets/images/avatar.png';
import Header from '../components/header';
import './profile.css';
import instagram from '../../public/assets/images/Instagramicon.png';
import spotify from '../../public/assets/images/Spotifyicon.png';
import twitter from '../../public/assets/images/TwitterXicon.png';
import add from '../../public/assets/images/add.png';

class ProfilePageFP extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profileImage: '',
      bio: '',
      friends: 0,
      playlists: 0,
      saved_playlists: 0,
      username: '',
      name: '',
      surname: '',
      socialmedia: {
        instagramLink: '',
        twitterLink: '',
        spotifyLink: ''
      },
      owned_playlists: []
    };
  }

  componentDidMount() {
    this.fetchProfile();
  }

  componentDidUpdate(prevState) {
    if (prevState.username !== this.state.username) {
      this.fetchProfile();
    }
  }

  fetchProfile = async () => {
    try {
      const username = localStorage.getItem('username');
      const response = await fetch(`/api/users/profile?username=${username}`);
      const data = await response.json();

      if (response.ok) {
        // Fetch the details of each playlist by ID
        const playlistPromises = data.owned_playlists.map(async (playlistId) => {
          const playlistResponse = await fetch(`/api/playlists/${playlistId}`);
          return playlistResponse.ok ? playlistResponse.json() : null;
        });

        const detailedPlaylists = await Promise.all(playlistPromises);

        this.setState({
          profileImage: data.pfp_image,
          bio: data.bio,
          friends: data.friends.length || 0,
          playlists: data.owned_playlists.length || 0,
          saved_playlists: data.saved_playlists.length || 0,
          username: data.username,
          name: data.name,
          surname: data.surname,
          socialmedia: {
            instagramLink: data.socialmedia?.instagramLink || '',
            twitterLink: data.socialmedia?.twitterLink || '',
            spotifyLink: data.socialmedia?.spotifyLink || '',
          },
          owned_playlists: detailedPlaylists.filter((playlist) => playlist), // Exclude any null responses
        });
      } else {
        alert(data.error);
      }
    } catch (error) {
      alert('Error fetching profile data.');
    }
  };



  render() {
    const {
      profileImage,
      bio,
      friends,
      playlists,
      saved_playlists,
      username,
      name,
      surname,
      socialmedia,
      owned_playlists
    } = this.state;

    return (
      <div className="profile-page">
        <Header />
        <div className='profile-main'>
          <div className="profile-info">
            <img
              src={profileImage || defaultProfileImage}
              alt={name}
              className="profile-image"
            />
            <h2 className='profile-username'>{username}</h2>
            <p>{bio}</p>
            <div className="profile-stats">
              <span>{friends} Friends</span>
              <span>{playlists} Playlists</span>
              <span>{saved_playlists} Saves</span>
            </div>
            <Link to={'/editprofile'}>
              <button className="edit-profile-btn">Edit profile</button>
            </Link>


            <div className="profile-details">
              <p><strong>Name:</strong> {name}</p>
              <p><strong>Surname:</strong> {surname}</p>
            </div>
            <div className="social-links">
              <a href={socialmedia.instagramLink} target="_blank" rel="noopener noreferrer">
                <img src={instagram} className="socialmedia" alt="Instagram" />
              </a>
              <a href={socialmedia.twitterLink} target="_blank" rel="noopener noreferrer">
                <img src={twitter} className="socialmedia" alt="Twitter" />
              </a>
              <a href={socialmedia.spotifyLink} target="_blank" rel="noopener noreferrer">
                <img src={spotify} className="socialmedia" alt="Spotify" />
              </a>
            </div>
          </div>

          <div className="created-playlists">
            <div className='list-heading'>
              <h3>Created Playlists</h3>
              <Link to="/add-playlist">
                <img src={add} className='addicon' alt="Add playlist" />
              </Link>
            </div>

            <div className="playlists-list">
              {owned_playlists.length > 0 ? (
                owned_playlists.map((playlist) => (
                  <PlaylistCard
                    key={playlist._id}
                    playlistId={playlist._id}
                    playlistCover={playlist.coverart}
                    playlistName={playlist.name}
                    numSongs={playlist.songs ? playlist.songs.length : 0}
                  />
                ))
              ) : (
                <p>No playlists found.</p>
              )}
            </div>

          </div>
        </div>
      </div>
    );
  }
}

export default ProfilePageFP;
