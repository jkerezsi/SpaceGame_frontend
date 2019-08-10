import React from 'react';
import PropTypes from 'prop-types';


const ButtonL = ({ onClick }) => (
  <div>
    <button className="buttonl" type="submit" onClick={onClick}>Login</button>
  </div>
);

ButtonL.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default ButtonL;
