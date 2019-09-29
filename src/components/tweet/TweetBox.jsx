import React, { useState, memo } from 'react';
import PropTypes from 'prop-types';

import Tweet from './Tweet';
import './TweetBox.scss';

const TweetBox = ({ placeholder, handleAlert }) => {
  const [tweets, setTweets] = useState([]);
  const [state, setState] = useState({ text: '', charsRemain: 140 });

  const handleInputChange = inputText => {
    setState({
      text: inputText,
      charsRemain: 140 - inputText.length,
    });
  };

  const handleTweet = stateText => {
    const tweetObj = {
      text: stateText,
      liked: false,
      date: new Date().toLocaleString(),
    };
    setTweets(prevTweets => [...prevTweets, tweetObj]);
    setState({ text: '', charsRemain: 140 });
    handleAlert('isTweet');
  };

  const handleLike = tweet => {
    setTweets(prevTweets =>
      prevTweets.map(t => {
        if (t.date === tweet.date)
          return { text: t.text, liked: !t.liked, date: t.date };
        return t;
      }),
    );
    setState({ text: '', charsRemain: 140 });
  };

  const handleDelete = tweet => {
    setTweets(prevTweets => prevTweets.filter(t => t.id !== tweet.id));
    setState({ text: '', charsRemain: 140 });
    handleAlert('isDelete');
  };

  const handleRetweet = tweet => {
    const tweetObj = {
      text: tweet.text,
      liked: tweet.liked,
      date: new Date().toLocaleString(),
    };
    setTweets(prevTweets => [...prevTweets, tweetObj]);
    setState({ text: '', charsRemain: 140 });
    handleAlert('isRetweet');
  };

  const { text, charsRemain } = state;

  return (
    <section className="tweetbox border-bottom">
      <div className="container">
        <div className="row">
          <div className="d-none d-md-block col-md-3">
            <img
              className="avatar"
              src="https://pbs.twimg.com/profile_images/553467511211970560/nBE77dF0_400x400.jpeg"
              alt="avatar"
            />
          </div>
          <div className="col-sm-12 col-md-9">
            <div className="input-group px-4">
              <input
                type="text"
                className="form-control"
                placeholder={placeholder}
                value={text}
                onChange={e => handleInputChange(e.target.value)}
              />
              <div className="input-group-append">
                <button
                  className="btn btn-primary"
                  type="submit"
                  value="submit"
                  onClick={() => handleTweet(text)}
                  disabled={charsRemain < 0}
                >
                  <span className="mobile-hidden">Tweet&ensp;</span>
                  <i className="fab fa-twitter" />
                </button>
                <p className="my-auto mobile-hidden" style={{ opacity: 0.5 }}>
                  {`${charsRemain} chars left`}
                </p>
              </div>
            </div>
            <div className="container mt-4">
              {tweets &&
                tweets.map(tweet => (
                  <Tweet
                    tweet={tweet}
                    key={tweet.date}
                    handleLike={handleLike}
                    handleDelete={handleDelete}
                    handleRetweet={handleRetweet}
                  />
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

TweetBox.propTypes = {
  placeholder: PropTypes.string,
  handleAlert: PropTypes.func,
};

TweetBox.defaultProps = {
  placeholder: '',
  handleAlert: () => {},
};

export default memo(TweetBox);
