import React, { Component } from 'react';
import './PlaylistActivity.css';
import defaultimg from '../../public/assets/images/avatar.png'
import saveicon from '../../public/assets/images/bookmark.png'

class PlaylistActivity extends Component {
    render() {
        const { 
            profileImage,
            username,
            playlistName,
            numSongs,
            date } = this.props;

            const profileimg = profileImage ? profileImage : defaultimg;

        return (
            <div className="playlist">
                <div className="playlist-profile">
                    <img src={profileimg} alt={`${username} profile`} onError={(e) => (e.target.src = defaultimg)} />
                </div>
                <div className="playlist-info">
                    <div className="playlist-details">
                        <span className="username">{username}</span>
                        {` created new playlist `}
                        <span className="playlist-name">{playlistName}</span>
                    </div>
                    <div className="playlist-stats">
                        {numSongs} Songs • {date}
                    </div>
                </div>
                <div className="playlist-save-icon">
                    <img src={saveicon} alt="Save icon" />
                </div>
            </div>
        );
    }
}

export default PlaylistActivity;
