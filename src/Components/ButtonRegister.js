import React from 'react';
import PropTypes from 'prop-types';

const ButtonR = ({ onClick, buttonText }) => (
  <div>
    <buttonr type="button" onClick={onClick}>
      {buttonText}
    </buttonr>
  </div>
);

ButtonR.propTypes = {
  onClick: PropTypes.func.isRequired,
  buttonText: PropTypes.string.isRequired,
};

export default ButtonR;
