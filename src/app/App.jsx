import React, { useState, memo } from 'react';

import TweetBox from '../components/tweet/TweetBox';
import CustomAlert from '../components/alert/CustomAlert';
import Snow from '../components/snow/Snow';
import Rain from '../components/rain/Rain';
import * as alertProps from '../constants';
import './App.scss';

const App = () => {
  const [state, setState] = useState({ isSnow: true, activeAlert: '' });

  const handleAlert = type => {
    setState(prevState => ({ ...prevState, activeAlert: type }));
    setTimeout(() => {
      setState(prevState => ({ ...prevState, activeAlert: '' }));
    }, 2000);
  };

  const { isSnow, activeAlert } = state;

  return (
    <div className="App">
      {isSnow ? <Snow /> : <Rain />}
      <header />
      <TweetBox placeholder="What's your status?" handleAlert={handleAlert} />
      <CustomAlert isShown={activeAlert} {...alertProps[activeAlert]} />
    </div>
  );
};

export default memo(App);
