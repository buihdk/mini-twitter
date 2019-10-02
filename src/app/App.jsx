import React, { useState, memo } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import TweetBox from 'components/tweet-box/TweetBox';
import CustomAlert from 'components/alert/CustomAlert';
import Toggle from 'components/toggle/Toggle';
import Snow from 'components/snow/Snow';
import Rain from 'components/rain/Rain';
import { alertProps } from 'utils';

import handleAlert from './handleAlert';
import './App.scss';

const App = () => {
  const [isRain, toggle] = useState(false);
  const [alert, setAlert] = useState('');

  return (
    <div className="App">
      <Toggle lLabel="Snow" rLabel="Rain" isRain={isRain} toggle={toggle} />
      {isRain ? <Rain /> : <Snow />}
      <header />
      <TweetBox
        placeholder="What's happening?"
        setAlert={setAlert}
        handleAlert={handleAlert}
      />
      <CustomAlert isShown={alert} {...alertProps[alert]} />
    </div>
  );
};

export default memo(App);
