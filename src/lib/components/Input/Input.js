import React from 'react';
import PropTypes from 'prop-types';

const Input = (props) => {
  const {
    label,
    value,
    inputId,
    handleOnInputChanged,
    children,
    maxLength,
    minLength,
    invalid,
    placeholder,
    autoComplete,
    inputRef,
    describedBy,
    required
  } = props;

  return (
    <div className="form-item">
      <label htmlFor={inputId}>
        <span className="input-label">{label}</span>
        {required ? <span style={{ color: 'red' }}>*</span> : ''}
        {children}
        <input
          id={inputId}
          type="text"
          tabIndex="0"
          className={invalid ? 'invalid' : ''}
          autoComplete={autoComplete || 'off'}
          aria-describedby={describedBy}
          aria-label={label}
          placeholder={placeholder}
          onChange={handleOnInputChanged}
          value={value}
          ref={inputRef}
          maxLength={maxLength}
          minLength={minLength}
          aria-required="true"
          aria-invalid={!!invalid} />
      </label>
    </div>
  );
};

Input.propTypes = {
  label: PropTypes.string.isRequired,
  handleOnInputChanged: PropTypes.func,
  value: PropTypes.string,
  inputId: PropTypes.string.isRequired,
  maxLength: PropTypes.number,
  minLength: PropTypes.number,
  invalid: PropTypes.bool,
  autoComplete: PropTypes.string,
  placeholder: PropTypes.string,
  inputRef: PropTypes.shape({}),
  describedBy: PropTypes.string,
  required: PropTypes.bool
};
export default Input;
