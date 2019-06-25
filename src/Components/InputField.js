import React from 'react';
import PropTypes from 'prop-types';


const InputField = ({ placeholder }) => (
  <input type="text" className="input" placeholder={placeholder} />
);

InputField.propTypes = {
  placeholder: PropTypes.string.isRequired,
};

export default InputField;
