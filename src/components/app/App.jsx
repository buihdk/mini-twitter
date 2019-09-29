import React, { useState, memo } from 'react';
import Alert from 'react-bootstrap/Alert';

import TweetBox from '../tweet/TweetBox';
import Snow from '../snow/Snow';
import Rain from '../rain/Rain';
import './App.scss';

const App = () => {
  const [state, setState] = useState({
    weatherSnowOrRain: true,
    alert: {
      isTweet: false,
      isRetweet: false,
      isDelete: false,
    },
  });

  const handleAlert = type => {
    setState(prevState => {
      return { ...prevState, alert: { ...prevState.alert, [type]: true } };
    });
    setTimeout(() => {
      setState(prevState => {
        return { ...prevState, alert: { ...prevState.alert, [type]: false } };
      });
    }, 2000);
  };

  const {
    alert: { isTweet, isDelete, isReTweet },
    weatherSnowOrRain,
  } = state;
  return (
    <div className="App">
      <Alert className={isTweet ? 'shown' : 'hidden'} variant="success">
        Your tweet was sent.
      </Alert>
      <Alert className={isDelete ? 'shown' : 'hidden'} variant="danger">
        Your tweet has been deleted.
      </Alert>
      <Alert className={isReTweet ? 'shown' : 'hidden'} variant="info">
        Your tweet has been retweeted.
      </Alert>
      {weatherSnowOrRain ? <Snow /> : <Rain />}
      <header />
      <TweetBox placeholder="What's your status?" handleAlert={handleAlert} />
    </div>
  );
};

export default memo(App);
