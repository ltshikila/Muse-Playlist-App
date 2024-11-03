import React, { Component } from 'react';
import { withRouter } from '../utils/withRouter';
import PlaylistCard from '../components/PlaylistCard';
import defaultProfileImage from '../../public/assets/images/avatar.png';
import Header from '../components/header';
import './profile.css';
import instagram from '../../public/assets/images/Instagramicon.png';
import spotify from '../../public/assets/images/Spotifyicon.png';
import twitter from '../../public/assets/images/TwitterXicon.png';

class ProfilePageTP extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFriend: false,  // Initialize the state to track friendship status
    };
  }

  componentDidMount() {
    const { friends } = this.props;
    const { username } = this.props.params;

    // Check if the user is already a friend
    const isFriend = friends.some(friend => friend.user === username && friend.accepted);
    this.setState({ isFriend });
  }

  handleFriendRequest = async () => {
    const { username } = this.props.params;
    const currentUser = this.props.loggedInUser;

    try {
      if (this.state.isFriend) {
        // Unfriend logic
        await fetch("/api/users/unfriend", {
          method: "DELETE",
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ username: currentUser, friendUsername: username }),
        });
        this.setState({ isFriend: false });
      } else {
        // Add friend logic
        await fetch("/api/users/friend", {
          method: "POST",
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ username: currentUser, friendUsername: username }),
        });
        this.setState({ isFriend: true });
      }
    } catch (error) {
      console.error("Error handling friend request:", error);
    }
  };

  render() {
    const { username } = this.props.params; 
    const {
      profileImage,
      bio,
      friends,
      playlists,
      saved_playlists,
      name,
      surname,
      socialmedia,
      owned_playlists,
    } = this.props;
    const { isFriend } = this.state;

    return (
      <div className='profile-page'>
        <Header />
        <div className='profile-main'>
          <div className='profile-info'>
            <img src={profileImage || defaultProfileImage} alt={name} className='profile-image' />
            <h2>{`${username}`}</h2>
            <p>{bio}</p>
            <div className='profile-stats'>
              <span>{friends.length} Friends</span>
              <span>{playlists} Playlists</span>
              <span>{saved_playlists} Saves</span>
            </div>
            <button className='friend-request-btn' onClick={this.handleFriendRequest}>
              {isFriend ? "Unfriend" : "Add Friend"}
            </button>
            <div className='profile-details'>
              <p><strong>Name:</strong> {name}</p>
              <p><strong>Surname:</strong> {surname}</p>
            </div>
            <div className='social-links'>
              <a href={socialmedia.instagramLink} target='_blank' rel='noopener noreferrer'>
                <img src={instagram} className='socialmedia' alt="instagram" />
              </a>
              <a href={socialmedia.twitterLink} target='_blank' rel='noopener noreferrer'>
                <img src={twitter} className='socialmedia' alt="twitter" />
              </a>
              <a href={socialmedia.spotifyLink} target='_blank' rel='noopener noreferrer'>
                <img src={spotify} className='socialmedia' alt="spotify" />
              </a>
            </div>
          </div>

          <div className='created-playlists'>
            <div className='list-heading'>
              <h3>Created Playlists</h3>
            </div>
            <div className='playlists-list'>
              {owned_playlists.map((playlist, index) => (
                <PlaylistCard
                  key={index}
                  playlistCover={playlist.coverart}
                  playlistName={playlist.name}
                  numSongs={playlist.songs.length}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(ProfilePageTP);
