import React from 'react';
import PropTypes from 'prop-types';

const RadioButton = (props) => {
  const {
    id,
    value,
    checked,
    handleOptionChange,
    name,
    invalid,
    children,
    disabled
  } = props;
  return (
    <div className="form-item js-form-type-radio form-type-radio">
      <input
        type="radio"
        id={id}
        className="form-checkbox"
        value={value}
        checked={checked}
        disabled={disabled || undefined}
        name={name}
        onChange={handleOptionChange}
        aria-invalid={!!invalid} />
      <label className={`option ${invalid ? 'invalid' : ''}`} htmlFor={id}>
        {children}
      </label>
    </div>
  );
};

RadioButton.propTypes = {
  id: PropTypes.string.isRequired,
  value: PropTypes.string,
  checked: PropTypes.bool,
  name: PropTypes.string,
  handleOptionChange: PropTypes.func,
  invalid: PropTypes.string,
  disabled: PropTypes.bool
};

export default RadioButton;
