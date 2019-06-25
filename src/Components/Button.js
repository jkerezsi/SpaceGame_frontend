import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ onClick, buttonText }) => (
  <button type="button" onClick={onClick}>
    {buttonText}
  </button>
);

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};

export default Button;
