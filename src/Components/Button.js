import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ onClick, buttonText }) => (
  <div className="buttonComponent">
    <button variant="primary" type="button" onClick={onClick}>
      {buttonText}
    </button>
  </div>
);

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  buttonText: PropTypes.string.isRequired,
};

export default Button;
