import React, { useState, useEffect, useRef, memo } from 'react';
import PropTypes from 'prop-types';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

import {
  Container,
  Row,
  Col,
  Image,
  InputGroup,
  FormControl,
  Button,
} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Tweet from 'components/tweet/Tweet';
import { noop } from 'utils';
import './TweetBox.scss';

const TweetBox = ({ placeholder, handleAlert, setAlert }) => {
  const [state, setState] = useState({
    tweets: [],
    text: '',
    charsRemain: 140,
  });

  const inputRef = useRef();

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
      date: new Date().toISOString(),
    };
    setState(prevState => ({
      tweets: [...prevState.tweets, tweetObj],
      text: '',
      charsRemain: 140,
    }));
    handleAlert({ type: 'isTweet', setAlert });
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
    handleAlert({ type: 'isDelete', setAlert });
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
    handleAlert({ type: 'isRetweet', setAlert });
  };

  const handleEnterKeyPress = e => {
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
            <Image
              roundedCircle
              className="avatar"
              src="https://pbs.twimg.com/profile_images/553467511211970560/nBE77dF0_400x400.jpeg"
            />
          </Col>
          <Col sm={12} md={9}>
            <InputGroup className="px-4">
              <FormControl
                ref={inputRef}
                placeholder={placeholder}
                value={state.text}
                onChange={handleInputChange}
              />
              <InputGroup.Append>
                <Button
                  type="submit"
                  value="submit"
                  onClick={handleTweet}
                  disabled={state.charsRemain < 0}
                >
                  <span className="mobile-hidden">Tweet </span>
                  <FontAwesomeIcon icon={faTwitter} />
                </Button>
                <p className="chars my-auto mobile-hidden">
                  {`${state.charsRemain} chars left`}
                </p>
              </InputGroup.Append>
            </InputGroup>
            <Container className="tweets mt-4">
              {state.tweets &&
                state.tweets.map(tweet => (
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
  setAlert: PropTypes.func,
};

TweetBox.defaultProps = {
  placeholder: '',
  handleAlert: noop,
  setAlert: noop,
};

export default memo(TweetBox);
