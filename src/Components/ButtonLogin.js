import React from 'react';
import PropTypes from 'prop-types';

const ButtonL = ({ onClick, buttonText }) => (
  <div>
    <buttonl type="button" onClick={onClick}>
      {buttonText}
    </buttonl>
  </div>
);

ButtonL.propTypes = {
  onClick: PropTypes.func.isRequired,
  buttonText: PropTypes.string.isRequired,
};

export default ButtonL;
