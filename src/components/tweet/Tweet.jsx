import React, { memo } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { Media, Image } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faRetweet,
  faHeart,
  faTrashAlt,
} from '@fortawesome/free-solid-svg-icons';

import './Tweet.scss';

const Tweet = ({ tweet, handleRetweet, handleLike, handleDelete }) => (
  <Media className="tweet my-3">
    <Image
      roundedCircle
      width="64px"
      className="mr-3"
      src="https://pbs.twimg.com/profile_images/553467511211970560/nBE77dF0_400x400.jpeg"
    />
    <Media.Body>
      <h5 className="mt-0">
        {`Khoa Bui `}
        <span className="sub-text">
          {`@buihdk ${moment(tweet.date).fromNow()}`}
        </span>
      </h5>
      <p>{tweet.text}</p>
      <FontAwesomeIcon icon={faRetweet} onClick={() => handleRetweet(tweet)} />
      <FontAwesomeIcon
        icon={faHeart}
        onClick={() => handleLike(tweet)}
        className={tweet.liked ? 'liked' : ''}
      />
      <FontAwesomeIcon icon={faTrashAlt} onClick={() => handleDelete(tweet)} />
    </Media.Body>
  </Media>
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
