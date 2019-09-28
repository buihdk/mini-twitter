import React from 'react';
import PropTypes from 'prop-types';

import Tweet from './Tweet';
import '../app/App.less';

const idCounter = 0;

export default class TweetBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tweets: [],
      text: '',
      charsRemaining: 140,
    };
  }

  handleInputChange(inputText) {
    this.setState({
      text: inputText,
      charsRemaining: 140 - inputText.length,
    });
  }

  handleTweet(stateText) {
    const { handleTweetAlert } = this.props;
    const tweetObj = {
      id: idCounter + 1,
      text: stateText,
      liked: false,
      date: new Date().toLocaleString(),
    };
    this.setState(prevState => ({
      text: '',
      charsRemaining: 140,
      tweets: [...prevState.tweets, tweetObj],
    }));
    handleTweetAlert();
  }

  handleLike(tweet) {
    let { tweets } = this.state;
    tweets = tweets.map(t => {
      if (t.id === tweet.id) {
        return {
          id: t.id,
          text: t.text,
          liked: !t.liked,
          date: t.date,
        };
      }
      return t;
    });
    this.setState({ tweets });
  }

  handleDelete(tweet) {
    const { handleDeleteAlert } = this.props;
    let { tweets } = this.state;
    tweets = tweets.filter(t => t.id !== tweet.id);
    this.setState({ tweets });
    handleDeleteAlert();
  }

  handleRetweet(tweet) {
    const { handleRetweetAlert } = this.props;
    const tweetObj = {
      id: idCounter + 1,
      text: tweet.text,
      liked: tweet.liked,
      date: new Date().toLocaleString(),
    };
    this.setState(prevState => ({
      tweets: [...prevState.tweets, tweetObj],
    }));
    handleRetweetAlert();
  }

  render() {
    const { placeholder } = this.props;
    const { tweets, text, charsRemaining } = this.state;
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
                  onChange={e => this.handleInputChange(e.target.value)}
                />
                <div className="input-group-append">
                  <button
                    className="btn btn-primary"
                    type="submit"
                    value="submit"
                    onClick={() => this.handleTweet(text)}
                    disabled={charsRemaining < 0}
                  >
                    <span className="mobile-hidden">Tweet&ensp;</span>
                    <i className="fab fa-twitter" />
                  </button>
                  <p className="my-auto mobile-hidden" style={{ opacity: 0.5 }}>
                    {`${charsRemaining} chars left`}
                  </p>
                </div>
              </div>
              <div className="container mt-4">
                {tweets.map(tweet => (
                  <Tweet
                    tweet={tweet}
                    key={tweet}
                    handleLike={this.handleLike}
                    handleDelete={this.handleDelete}
                    handleRetweet={this.handleRetweet}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

TweetBox.propTypes = {
  handleTweetAlert: PropTypes.func,
  handleDeleteAlert: PropTypes.func,
  handleRetweetAlert: PropTypes.func,
  placeholder: PropTypes.string,
};

TweetBox.defaultProps = {
  handleTweetAlert: () => {},
  handleDeleteAlert: () => {},
  handleRetweetAlert: () => {},
  placeholder: '',
};
