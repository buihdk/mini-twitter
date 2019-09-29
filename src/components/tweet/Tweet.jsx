import React, { memo } from 'react';
import PropTypes from 'prop-types';

import './Tweet.scss';

const Tweet = ({ tweet, handleRetweet, handleLike, handleDelete }) => (
  <div className="tweet media my-3">
    <img
      className="avatar-tweet mr-3"
      src="https://pbs.twimg.com/profile_images/553467511211970560/nBE77dF0_400x400.jpeg"
      alt="avatar-tweet"
      width="200px"
    />
    <div className="media-body">
      <h5 className="mt-0">
        {'Khoa Bui '}
        <span className="sub-text">{`@buihdk ${tweet.date}`}</span>
      </h5>
      <p>{tweet.text}</p>
      <i
        role="presentation"
        className="fas fa-retweet"
        onClick={() => handleRetweet(tweet)}
      />
      &nbsp;&nbsp;&nbsp;&nbsp;
      <i
        role="presentation"
        className={tweet.liked ? 'fas fa-heart liked' : 'fas fa-heart'}
        onClick={() => handleLike(tweet)}
      />
      &nbsp;&nbsp;&nbsp;&nbsp;
      <i
        role="presentation"
        className="far fa-trash-alt"
        onClick={() => handleDelete(tweet)}
      />
    </div>
  </div>
);

Tweet.propTypes = {
  tweet: PropTypes.shape({
    text: PropTypes.string,
    liked: PropTypes.bool,
    date: PropTypes.string,
  }),
  handleRetweet: PropTypes.func,
  handleLike: PropTypes.func,
  handleDelete: PropTypes.func,
};

Tweet.defaultProps = {
  tweet: {
    text: '',
    liked: false,
    date: '',
  },
  handleRetweet: () => {},
  handleLike: () => {},
  handleDelete: () => {},
};

export default memo(Tweet);
