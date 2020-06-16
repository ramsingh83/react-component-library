import React, { useState, useLayoutEffect } from 'react';
import PropTypes from 'prop-types';

const Input = (props) => {
  const {
    config,
    inputValue,
    inputId,
    children,
    inputRef,
    setInputValue,
    validateInput
  } = props;

  const [value, setValue] = useState(inputValue || '');
  const [firstRender, setFirstRender] = useState(true);
  const [error, setError] = useState('');

  useLayoutEffect(() => {
    setInputValue(value, error);
  }, [value, error]);

  const validate = () => {
    const inputPattern = new RegExp(config.pattern);
    let newError = '';
    if (value && inputPattern && !inputPattern.test(value)) {
      newError = config.invalidError;
    } else if (!value && config.required) {
      newError = config.emptyError;
    } else {
      newError = '';
    }
    setError(newError);
  };

  useLayoutEffect(() => {
    setFirstRender(false);
    if (!firstRender) {
      validate();
    }
  }, [validateInput]);

  const handleOnInputChanged = (e) => {
    e.preventDefault();
    let newError = '';
    if (!e.target.value) {
      newError = config.emptyError;
    } else {
      newError = '';
    }
    setValue(e.target.value);
    setError(newError);
  };

  const handleFocusOut = (e) => {
    e.preventDefault();
    const inputPattern = new RegExp(config.pattern);
    let newError = '';
    if (value && inputPattern && !inputPattern.test(value)) {
      newError = config.invalidError;
    } else if (!value && config.required) {
      newError = config.emptyError;
    } else {
      newError = '';
    }
    setError(newError);
  };

  return (
    <div className="form-item">
      <label className="input-label" htmlFor={inputId}>
        {config.label}
        {config.required ? <span className="mandatory">*</span> : ''}
        {children}
        <input
          id={inputId}
          type="text"
          tabIndex="0"
          className={error ? 'invalid' : ''}
          autoComplete={config.autoComplete || 'off'}
          aria-describedby={`${config.label}-error`}
          aria-label={config.label}
          placeholder={config.placeholder}
          onChange={handleOnInputChanged}
          onBlur={handleFocusOut}
          value={value}
          ref={inputRef}
          maxLength={config.maxLength}
          minLength={config.minLength}
          aria-required="true"
          aria-invalid={!!error} />
      </label>
      <div id={`${config.label}-error`} className="error-info">{error}</div>
    </div>
  );
};

Input.propTypes = {
  config: PropTypes.shape({}),
  inputValue: PropTypes.string,
  inputId: PropTypes.string.isRequired,
  setInputValue: PropTypes.func,
  inputRef: PropTypes.shape({}),
  validateInput: PropTypes.bool
};
export default Input;
