// ProfilePageTP.jsx
import React, { Component } from 'react';
import { withRouter } from '../utils/withRouter';
import PlaylistCard from '../components/PlaylistCard';
import defaultProfileImage from '../../public/assets/images/avatar.png';
import Header from '../components/header';
import './profile.css';
import instagram from '../../public/assets/images/Instagramicon.png';
import spotify from '../../public/assets/images/Spotifyicon.png';
import twitter from '../../public/assets/images/TwitterXicon.png';
import pfp from '../../public/assets/images/pfptwo.jpg'
class ProfilePageTP extends Component {
  render() {
    const { username } = this.props.params; // Access dynamic parameter
    const {
      profileImage,
      caption,
      friends,
      playlists,
      saves,
      name,
      surname,
      instagramLink,
      twitterLink,
      spotifyLink,
      createdPlaylists,
    } = this.props;

    return (
      <div className='profile-page'>
        <Header />
        <div className='profile-main'>
          <div className='profile-info'>
            <img src={profileImage || defaultProfileImage} alt={name} className='profile-image' />
            <h2>{`${name} (${username})`}</h2> {/* Display Username */}
            <p>{caption}</p>
            <div className='profile-stats'>
              <span>{friends} Friends</span>
              <span>{playlists} Playlists</span>
              <span>{saves} Saves</span>
            </div>
            <button className='friend-request-btn'>Friend Request</button>
            <div className='profile-details'>
              <p><strong>Name:</strong> {name}</p>
              <p><strong>Surname:</strong> {surname}</p>
            </div>
            <div className='social-links'>
              <a href={instagramLink} target='_blank' rel='noopener noreferrer'>
                <img src={instagram} className='socialmedia' alt="instagram" />
              </a>
              <a href={twitterLink} target='_blank' rel='noopener noreferrer'>
                <img src={twitter} className='socialmedia' alt="twitter" />
              </a>
              <a href={spotifyLink} target='_blank' rel='noopener noreferrer'>
                <img src={spotify} className='socialmedia' alt="spotify" />
              </a>
            </div>
          </div>

          <div className='created-playlists'>
            <div className='list-heading'>
              <h3>Created Playlists</h3>
            </div>
            <div className='playlists-list'>
              {createdPlaylists.map((playlist, index) => (
                <PlaylistCard
                  key={index}
                  playlistCover={playlist.playlistCover}
                  playlistName={playlist.playlistName}
                  numSongs={playlist.numSongs}
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
