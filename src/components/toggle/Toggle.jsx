import React, { memo } from 'react';
import PropTypes from 'prop-types';

import { noop } from '../../utils';
import './Toggle.scss';

const Toggle = ({ lLabel, rLabel, isRain, toggle }) => (
  <div className="toggleContainer">
    <span className="label">{lLabel}</span>
    <label className="switch" htmlFor="toggle">
      <input type="checkbox" id="toggle" onClick={() => toggle(!isRain)} />
      <span className="slider round" />
    </label>
    <span className="label">{rLabel}</span>
  </div>
);

Toggle.propTypes = {
  lLabel: PropTypes.string,
  rLabel: PropTypes.string,
  isRain: PropTypes.bool,
  toggle: PropTypes.func,
};

Toggle.defaultProps = {
  lLabel: '',
  rLabel: '',
  isRain: false,
  toggle: noop,
};

export default memo(Toggle);
