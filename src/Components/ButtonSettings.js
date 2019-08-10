import React from 'react';
import PropTypes from 'prop-types';


const ButtonS = ({ onClick }) => (
  <div>
    <button className="buttons" type="submit" onClick={onClick}>Change kingdom name</button>
  </div>
);

ButtonS.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default ButtonS;
