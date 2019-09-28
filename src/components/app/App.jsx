import React, { useState } from 'react';

import TweetBox from '../tweet/TweetBox';
import Snow from '../snow/Snow';
import Rain from '../rain/Rain';
import './App.less';

const App = () => {
  const [state, setState] = useState({
    weatherSnowOrRain: false,
    tweetAlert: false,
    deleteAlert: false,
    retweetAlert: false,
  });

  const handleTweetAlert = () => {
    setState({ tweetAlert: true });
    setTimeout(() => {
      setState({ tweetAlert: false });
    }, 2000);
  };

  const handleDeleteAlert = () => {
    setState({ deleteAlert: true });
    setTimeout(() => {
      setState({ deleteAlert: false });
    }, 2000);
  };

  const handleRetweetAlert = () => {
    setState({ retweetAlert: true });
    setTimeout(() => {
      setState({ retweetAlert: false });
    }, 2000);
  };

  const { tweetAlert, deleteAlert, retweetAlert, weatherSnowOrRain } = state;
  return (
    <div className="App">
      <div className={`alert alert-success ${tweetAlert ? 'shown' : 'hidden'}`}>
        Your Tweet was sent!
      </div>
      <div className={`alert alert-danger ${deleteAlert ? 'shown' : 'hidden'}`}>
        Your Tweet has been deleted!
      </div>
      <div className={`alert alert-info ${retweetAlert ? 'shown' : 'hidden'}`}>
        Your Tweet has been retweeted!
      </div>
      {weatherSnowOrRain ? <Snow /> : <Rain />}
      <header />
      <TweetBox
        placeholder="What's your status?"
        handleTweetAlert={handleTweetAlert}
        handleDeleteAlert={handleDeleteAlert}
        handleRetweetAlert={handleRetweetAlert}
      />
    </div>
  );
};

export default App;
