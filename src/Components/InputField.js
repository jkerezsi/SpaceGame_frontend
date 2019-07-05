/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ id, label, onChange }) => (
  <div>
    <label htmlFor={label}>{label}</label>
    <input type="text" id={id} onChange={onChange} placeholder={label} />
  </div>
);

Input.propTypes = {
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
};

export default Input;
