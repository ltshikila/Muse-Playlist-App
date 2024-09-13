// Comment.jsx
import React, { Component } from 'react';
import './comment.css'
class Comment extends Component {
  render() {
    const { profileImage, username, comment } = this.props;

    return (
      <div className="comment">
        <img src={profileImage} alt={username} className="comment-avatar" />
        <div className="comment-details">
          <span className="username">{username}</span>
          <span className="comment-text">{comment}</span>
        </div>
      </div>
    );
  }
}

export default Comment;
