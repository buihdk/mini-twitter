import React, { Component } from 'react';
import './App.css';
import TweetBox from './TweetBox';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tweetAlert: false,
      deleteAlert: false,
      retweetAlert: false
    };
  }
  handleTweetAlert() {
    this.setState({ tweetAlert: true });
    setTimeout(() => { this.setState({ tweetAlert: false }); }, 2000);
  }
  handleDeleteAlert() {
    this.setState({ deleteAlert: true });
    setTimeout(() => { this.setState({ deleteAlert: false }); }, 2000);
  }
  handleRetweetAlert() {
    this.setState({ retweetAlert: true });
    setTimeout(() => { this.setState({ retweetAlert: false }); }, 2000);
  }

  render() {
    return (
      <div className="App">
        <div className={`alert alert-success ${this.state.tweetAlert ? 'shown' : 'hidden'}`}>
          Your Tweet was sent!
        </div>
        <div className={`alert alert-danger ${this.state.deleteAlert ? 'shown' : 'hidden'}`}>
          Your Tweet has been deleted!
        </div>
        <div className={`alert alert-info ${this.state.retweetAlert ? 'shown' : 'hidden'}`}>
          Your Tweet has been retweeted!
        </div>
        <header/>
        <TweetBox
          placeholder="What's your status?" 
          handleTweetAlert={this.handleTweetAlert.bind(this)}
          handleDeleteAlert={this.handleDeleteAlert.bind(this)}
          handleRetweetAlert={this.handleRetweetAlert.bind(this)}
        />
      </div>
    );
  }
}

export default App;
