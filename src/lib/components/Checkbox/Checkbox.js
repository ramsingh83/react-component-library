import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const Checkbox = ({
  label,
  id,
  checked,
  disabled,
  value,
  invalid,
  describedBy,
  setInputValue
}) => {
  const [isChecked, setIsChecked] = useState(checked || false);

  useEffect(() => {
    setInputValue(isChecked, value);
  }, [isChecked]);

  return (
    <div className="form-item js-form-type-checkbox form-type-checkbox">
      <input
        type="checkbox"
        id={id}
        aria-invalid={!!invalid}
        aria-describedby={describedBy}
        className={`form-checkbox ${invalid ? 'invalid' : ''}`}
        checked={checked}
        onChange={() => setIsChecked(!isChecked)}
        disabled={disabled}
        value={value} />
      <label className={`option ${disabled ? 'disabled' : ''}`} htmlFor={id}>
        {label}
      </label>
    </div>
  );
};

Checkbox.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  setInputValue: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  invalid: PropTypes.bool,
  describedBy: PropTypes.string
};

export default Checkbox;
