import React from 'react';
import PropTypes from 'prop-types';

import './Toggle.scss';

const Toggle = ({ leftLabel, rightLabel, checked, setState }) => {
  const handleClick = () =>
    setState(prevState => ({ ...prevState, checked: !checked }));
  return (
    <div className="toggleContainer">
      <span className="label">{leftLabel}</span>
      <label className="switch" htmlFor="toggle">
        <input type="checkbox" id="toggle" onClick={handleClick} />
        <span className="slider round" />
      </label>
      <span className="label">{rightLabel}</span>
    </div>
  );
};

export default Toggle;

Toggle.propTypes = {
  leftLabel: PropTypes.string,
  rightLabel: PropTypes.string,
  checked: PropTypes.bool,
  setState: PropTypes.func,
};

Toggle.defaultProps = {
  leftLabel: '',
  rightLabel: '',
  checked: false,
  setState: () => {},
};
