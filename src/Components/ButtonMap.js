import React from 'react';
import PropTypes from 'prop-types';

const ButtonM = ({ onClick, buttonText }) => (
  <div>
    <buttonm type="button" onClick={onClick}>
      {buttonText}
    </buttonm>
  </div>
);

ButtonM.propTypes = {
  onClick: PropTypes.func.isRequired,
  buttonText: PropTypes.string.isRequired,
};

export default ButtonM;