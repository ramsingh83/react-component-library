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
  const currencyOptions = {
    maximumFractionDigits: 2,
    currency: 'GBP',
    style: 'currency'
  };

  useLayoutEffect(() => {
    setInputValue(value, error);
  }, [value, error]);

  /**
   * Convert string type value to number.
   * Especially for currency input type.
   * @param {string} amount - amount with string type
   * @returns {number} amount in number type.
   */
  const localStringToNumber = (amount) => {
    const regExp = new RegExp(config.currencyPattern, 'g');
    return Number(String(amount).replace(regExp, ''));
  };

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

  /**
   * remove any special characters except (,) and (.)
   * @param {string} val - user input value.
   * @returns {string} - value with no special characters.
   */
  const formatCurrencyValue = val => val
    .replace(/[^0-9.,]/g, '').trim();

  /**
   * validate currency based on min and max config values.
   * @param {string} targetValue - user entered amount.
   * @param {*} currencyConfig - config related to currency.
   * @param {*} options - currency options.
   */
  const validateCurrencyValue = (targetValue, currencyConfig, options) => {
    // Remove all special characters except decimal for money comparisons
    const amount = String(targetValue).replace(/[^\d.]/g, '');
    const validationResult = {
      result: formatCurrencyValue(localStringToNumber(amount)
        .toLocaleString(undefined, options)),
      errorMessage: ''
    };

    switch (true) {
    case (amount < currencyConfig.minAmount):
      validationResult.errorMessage = currencyConfig.minAmountError;
      break;
    case (amount > currencyConfig.maxAmount):
      validationResult.errorMessage = currencyConfig.maxAmountError;
      break;
    default:
      break;
    }

    return validationResult;
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
    const targetValue = e.target.value;
    const inputPattern = new RegExp(config.pattern);
    let newError = '';

    if (value && inputPattern && !inputPattern.test(value)) {
      newError = config.invalidError;
    } else if (!value && config.required) {
      newError = config.emptyError;
    } else {
      newError = '';
    }

    // If input type is currency perform extra validation to get currency value.
    if (inputPattern.test(targetValue) && targetValue && config.inputType === 'currency') {
      const { result, errorMessage } = validateCurrencyValue(targetValue, config, currencyOptions);
      setValue(result);
      newError = errorMessage;
    }

    setError(newError);
  };

  return (
    <div className="form-item">
      <label htmlFor={inputId}>
        <span className="input-label card-name-label">
          {config.label}
          {config.required ? <span className="mandatory">*</span> : ''}
        </span>
        {children}
        <input
          id={inputId}
          type="text"
          tabIndex="0"
          className={error ? 'invalid' : ''}
          aria-describedby={`${inputId}-error`}
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
      <div id={`${inputId}-error`} className="error-info">{error}</div>
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
