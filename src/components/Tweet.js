import React from 'react';
import '../styles/App.css';

const Tweet = (props) => {
  let tweet = props.tweet;
  return (
    <div className='tweet media my-3'>
      <img className='avatar-tweet mr-3' src="https://pbs.twimg.com/profile_images/553467511211970560/nBE77dF0_400x400.jpeg" alt='avatar-tweet' width='200px'/>
      <div className='media-body'>
        <h5 className='mt-0'>Khoa Bui <span className='sub-text'>@buihdk {tweet.date}</span></h5>
        <p>{tweet.text}</p>
        <i className='fas fa-retweet' onClick={() => props.handleRetweet(tweet)}></i>&nbsp;&nbsp;&nbsp;&nbsp;
        <i className={tweet.liked ? 'fas fa-heart liked' : 'fas fa-heart'} onClick={() => props.handleLike(tweet)}/>&nbsp;&nbsp;&nbsp;&nbsp;
        <i className='far fa-trash-alt' onClick={() => props.handleDelete(tweet)}/>
      </div>
    </div>
  );
};

export default Tweet;