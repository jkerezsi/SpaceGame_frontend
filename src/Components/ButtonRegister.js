import React from 'react';
import PropTypes from 'prop-types';


const ButtonR = ({ onClick }) => (
  <div>
    <button className="buttonr" type="submit" onClick={onClick}>Register</button>
  </div>
);

ButtonR.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default ButtonR;
