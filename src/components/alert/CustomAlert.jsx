import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import Alert from 'react-bootstrap/Alert';

import './CustomAlert.scss';

const CustomAlert = ({ isShown, variant, message }) => (
  <Alert
    className={clsx('customAlert', isShown ? 'shown' : 'hidden')}
    variant={variant}
  >
    {message}
  </Alert>
);

CustomAlert.propTypes = {
  isShown: PropTypes.string,
  variant: PropTypes.string,
  message: PropTypes.string,
};

CustomAlert.defaultProps = {
  isShown: '',
  variant: '',
  message: '',
};

export default CustomAlert;
