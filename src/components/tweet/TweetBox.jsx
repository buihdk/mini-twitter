import React, { useState, useEffect, useRef, memo } from 'react';
import PropTypes from 'prop-types';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

import {
  Container,
  Row,
  Col,
  InputGroup,
  FormControl,
  Button,
} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Tweet from './Tweet';
import './TweetBox.scss';

const TweetBox = ({ placeholder, handleAlert }) => {
  const [state, setState] = useState({
    tweets: [],
    text: '',
    charsRemain: 140,
  });

  const inputRef = useRef(state.text);

  const handleInputChange = e => {
    const inputText = e.target.value;
    setState(prevState => ({
      ...prevState,
      text: inputText,
      charsRemain: 140 - inputText.length,
    }));
  };

  const handleTweet = () => {
    const tweetText = inputRef.current.value;
    if (!tweetText) return;
    const tweetObj = {
      text: tweetText,
      liked: false,
      date: new Date().toLocaleString(),
    };
    setState(prevState => ({
      tweets: [...prevState.tweets, tweetObj],
      text: '',
      charsRemain: 140,
    }));
    handleAlert('isTweet');
  };

  const handleLike = tweet => {
    setState(prevState => ({
      tweets: prevState.tweets.map(t => {
        if (t.date === tweet.date)
          return { text: t.text, liked: !t.liked, date: t.date };
        return t;
      }),
      text: '',
      charsRemain: 140,
    }));
  };

  const handleDelete = tweet => {
    setState(prevState => ({
      tweets: prevState.tweets.filter(t => t.date !== tweet.date),
      text: '',
      charsRemain: 140,
    }));
    handleAlert('isDelete');
  };

  const handleRetweet = tweet => {
    const tweetObj = {
      text: tweet.text,
      liked: tweet.liked,
      date: new Date().toLocaleString(),
    };
    setState(prevState => ({
      tweets: [...prevState.tweets, tweetObj],
      text: '',
      charsRemain: 140,
    }));
    handleAlert('isRetweet');
  };

  const { tweets, text, charsRemain } = state;

  const handleEnterKeyPress = e => {
    e.preventDefault();
    if (e.keyCode === 13) handleTweet();
  };

  useEffect(() => {
    window.addEventListener('keydown', handleEnterKeyPress);
    return () => {
      window.removeEventListener('keydown', handleEnterKeyPress);
    };
  }, []);

  return (
    <section className="tweetbox border-bottom">
      <Container>
        <Row>
          <Col md={3} className="d-none d-md-block">
            <img
              alt="avatar"
              className="avatar"
              src="https://pbs.twimg.com/profile_images/553467511211970560/nBE77dF0_400x400.jpeg"
            />
          </Col>
          <Col sm={12} md={9}>
            <InputGroup className="px-4">
              <FormControl
                ref={inputRef}
                placeholder={placeholder}
                value={text}
                onChange={handleInputChange}
              />
              <InputGroup.Append>
                <Button
                  type="submit"
                  value="submit"
                  onClick={handleTweet}
                  disabled={charsRemain < 0}
                >
                  <span className="mobile-hidden">Tweet </span>
                  <FontAwesomeIcon icon={faTwitter} />
                </Button>
                <p
                  className="my-auto mobile-hidden"
                  style={{ opacity: 0.5, marginLeft: '8px' }}
                >
                  {`${charsRemain} chars left`}
                </p>
              </InputGroup.Append>
            </InputGroup>
            <Container className="container mt-4">
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
            </Container>
          </Col>
        </Row>
      </Container>
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
