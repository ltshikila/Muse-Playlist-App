import React, { Component } from 'react';
import { Link } from 'react-router-dom'; 
import PlaylistCard from '../components/PlaylistCard';
import defaultProfileImage from '../../public/assets/images/avatar.png';
import Header from '../components/header';
import './profile.css'
import instagram from '../../public/assets/images/Instagramicon.png'
import spotify from '../../public/assets/images/Spotifyicon.png'
import twitter from '../../public/assets/images/TwitterXicon.png'
import add from '../../public/assets/images/add.png'

class ProfilePageFP extends Component {
  render() {
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
      createdPlaylists
    } = this.props;

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
            <h2>{name}</h2>
            <p>{caption}</p>
            <div className="profile-stats">
              <span>{friends} Friends</span>
              <span>{playlists} Playlists</span>
              <span>{saves} Saves</span>
            </div>
            <button className="edit-profile-btn">Edit profile</button>
            
            <div className="profile-details">
              <p><strong>Name:</strong> {name}</p>
              <p><strong>Surname:</strong> {surname}</p>
            </div>
            <div className="social-links">
              <a href={instagramLink} target="_blank" rel="noopener noreferrer">
                <img
                  src={instagram}
                  className="socialmedia"

                />
              </a>
              <a href={twitterLink} target="_blank" rel="noopener noreferrer">
                <img
                  src={twitter}
                  className="socialmedia"

                />
              </a>
              <a href={spotifyLink} target="_blank" rel="noopener noreferrer">
                <img
                  src={spotify}
                  className="socialmedia"

                />
              </a>
            </div>
          </div>

          <div className="created-playlists">
            <div className='list-heading'>
              <h3>Created Playlists</h3>
              <Link to="/add-playlist">
                <img
                  src={add}
                  className='addicon'
                  alt="add playlist"
                />
              </Link>
            </div>

            <div className="playlists-list">
              {createdPlaylists.map((playlist, index) => (
                <Link to={`/playlist/${index}`} key={index}>
                <PlaylistCard
                  playlistCover={playlist.playlistCover}
                  playlistName={playlist.playlistName}
                  numSongs={playlist.numSongs}
                />
              </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProfilePageFP;
