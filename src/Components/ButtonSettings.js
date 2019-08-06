import React from 'react';
import PropTypes from 'prop-types';

const ButtonS = ({ onClick, buttonText }) => (
  <div>
    <buttons type="button" onClick={onClick}>
      {buttonText}
    </buttons>
  </div>
);

ButtonS.propTypes = {
  onClick: PropTypes.func.isRequired,
  buttonText: PropTypes.string.isRequired,
};

export default ButtonS;
