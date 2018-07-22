import React from 'react';
import './App.css';
import Tweet from './Tweet';

let idCounter = 0;

export default class TweetBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tweets: [],
      text: "",
      charsRemaining: 140,
    };
  }
  handleTextChange(inputText) {
    this.setState({
      text: inputText,
      charsRemaining: 140 - inputText.length,
    });
  }
  clearInput() {
    let input = document.getElementById("tweetInput");
    input.value = "";
    this.setState({ 
      text: "", 
      charsRemaining: 140, 
    });
  }
  handleTweet(stateText) {
    let tweetObj = {
      id: idCounter++,
      text: stateText,
      liked: false
    }
    this.setState({
      tweets: this.state.tweets.concat(tweetObj),
    });
    this.props.handleTweetAlert();
  }
  handleLike(tweet) {
    let tweets = this.state.tweets.map((t) => {
      if (t.id === tweet.id) {
        return { id: t.id, text: t.text, liked: !t.liked }
      }
      return t;
    })
    this.setState({ tweets });
  }
  handleDelete(tweet) {
    let tweets = this.state.tweets.filter(function(t) {
      return t.id !== tweet.id;
    })
    this.setState({ tweets });
    this.props.handleDeleteAlert();
  }
  handleRetweet(tweet) {
    let tweetObj = {
      id: idCounter++,
      text: tweet.text,
      liked: tweet.liked
    }
    this.setState({
      tweets: this.state.tweets.concat(tweetObj),
    });
    this.props.handleRetweetAlert();
  }
  render() {
    return (
      <section className="tweetbox border-bottom">
        <div className="container">
          <div className="row">
            <div className="d-none d-md-block col-md-3">
              <img className="avatar" src="https://pbs.twimg.com/profile_images/553467511211970560/nBE77dF0_400x400.jpeg" alt="avatar"/>
            </div>
            <div className="col-sm-12 col-md-9">
              <div className="input-group px-4">
                <input id="tweetInput" type="text" className="form-control" 
                  placeholder={this.props.placeholder}
                  onChange={e => this.handleTextChange(e.target.value)}/>
                <div className="input-group-append">
                  <button className="btn btn-primary"
                    onClick={() => this.handleTweet(this.state.text)} 
                    onBlur={() => this.clearInput()}
                    disabled={this.state.charsRemaining < 0}>
                    Tweet &ensp; <i className="fab fa-twitter"></i>
                  </button> 
                  <p className="my-auto" style={{opacity: 0.5}}>&nbsp;{this.state.charsRemaining} chars left</p>
                </div>
              </div>
              <div className="container mt-5">
                {this.state.tweets.map(((tweet, index) => 
                  <Tweet tweet={tweet} key={index}
                    handleLike={this.handleLike.bind(this)}
                    handleDelete={this.handleDelete.bind(this)}
                    handleRetweet={this.handleRetweet.bind(this)}
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