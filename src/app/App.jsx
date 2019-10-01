import React, { useState, memo } from 'react';

import TweetBox from '../components/tweet/TweetBox';
import CustomAlert from '../components/alert/CustomAlert';
import Toggle from '../components/toggle/Toggle';
import Snow from '../components/snow/Snow';
import Rain from '../components/rain/Rain';
import * as alertProps from '../constants';
import './App.scss';

const App = () => {
  const [state, setState] = useState({ checked: false, activeAlert: '' });

  const handleAlert = type => {
    setState(prevState => ({ ...prevState, activeAlert: type }));
    setTimeout(() => {
      setState(prevState => ({ ...prevState, activeAlert: '' }));
    }, 2000);
  };

  const { checked, activeAlert } = state;

  return (
    <div className="App">
      {checked ? <Rain /> : <Snow />}
      <header />
      <TweetBox placeholder="What's happening?" handleAlert={handleAlert} />
      <CustomAlert isShown={activeAlert} {...alertProps[activeAlert]} />
      <Toggle
        leftLabel="Snow"
        rightLabel="Rain"
        checked={checked}
        setState={setState}
      />
    </div>
  );
};

export default memo(App);
