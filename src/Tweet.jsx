import React from 'react';
import './App.css';

export default class Tweet extends React.Component {
  render() {
    let tweet = this.props.tweet;
    const date = new Date().toLocaleString();
    return (
      <div className="tweet media my-3">
        <img className="avatar-tweet mr-3" src="https://pbs.twimg.com/profile_images/553467511211970560/nBE77dF0_400x400.jpeg" alt="avatar-tweet" width="200px"/>
        <div className="media-body">
          <h5 className="mt-0">Khoa Bui <span class="sub-text">@buihdk {date}</span></h5>
          <p>{tweet.text}</p>
          <i class="fas fa-retweet" onClick={() => this.props.handleRetweet(tweet)}></i>&nbsp;&nbsp;&nbsp;&nbsp;
          <i className={tweet.liked ? "fas fa-heart liked" : "fas fa-heart"} onClick={() => this.props.handleLike(tweet)}/>&nbsp;&nbsp;&nbsp;&nbsp;
          <i className="far fa-trash-alt" onClick={() => this.props.handleDelete(tweet)}/>
        </div>
      </div>
    )
  }
}