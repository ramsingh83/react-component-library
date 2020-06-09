import React, { useState, useLayoutEffect } from 'react';
import PropTypes from 'prop-types';

const Input = (props) => {
  const {
    label,
    inputValue,
    inputId,
    children,
    maxLength,
    minLength,
    pattern,
    placeholder,
    autoComplete,
    inputRef,
    setInputValue,
    required
  } = props;

  const [value, setValue] = useState(inputValue || '');
  const [error, setError] = useState('');

  useLayoutEffect(() => {
    setInputValue(value);
  }, [value]);
  
  const handleOnInputChanged = (e) => {
    e.preventDefault();
    let newError = '';
    if (!e.target.value) {
      newError = 'This field is required';
    } else {
      newError = '';
    }
    setValue(e.target.value);
    setError(newError);
  };

  const handleFocusOut = (e) => {
    e.preventDefault();
    const inputPattern = new RegExp(pattern);
    let newError = ''
    if (value && inputPattern && !inputPattern.test(value)) {
      newError = 'Please provide valid data';
    } else if (!value && required) {
      newError = 'This field is required';
    } else {
      newError = '';
    }
    setError(newError);
  }

  return (
    <div className="form-item">
      <label className="input-label" htmlFor={inputId}>
        {label}
        {required ? <span className="mandatory">*</span> : ''}
        {children}
        <input
          id={inputId}
          type="text"
          tabIndex="0"
          className={error ? 'invalid' : ''}
          autoComplete={autoComplete || 'off'}
          aria-describedby={`${label}-error`}
          aria-label={label}
          placeholder={placeholder}
          onChange={handleOnInputChanged}
          onBlur={handleFocusOut}
          value={value}
          ref={inputRef}
          maxLength={maxLength}
          minLength={minLength}
          aria-required="true"
          aria-invalid={!!error} />
      </label>
      <div id={`${label}-error`} className="error-ifo">{error}</div>
    </div>
  );
};

Input.propTypes = {
  label: PropTypes.string.isRequired,
  inputValue: PropTypes.string,
  inputId: PropTypes.string.isRequired,
  maxLength: PropTypes.number,
  minLength: PropTypes.number,
  pattern: PropTypes.string,
  invalid: PropTypes.bool,
  autoComplete: PropTypes.string,
  placeholder: PropTypes.string,
  inputRef: PropTypes.shape({}),
  required: PropTypes.bool
};
export default Input;
