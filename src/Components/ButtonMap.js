import React from 'react';
import PropTypes from 'prop-types';


const ButtonM = ({ onClick }) => (
  <div>
    <button className="buttonm" type="submit" onClick={onClick}>Select</button>
  </div>
);

ButtonM.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default ButtonM;
