import React from 'react';
import PropTypes from 'prop-types';

const Checkbox = ({
  label,
  id,
  checked,
  onHandleChange,
  disabled,
  value,
  itemsRef,
  invalid,
  describedBy
}) => (
  <div className="form-item js-form-type-checkbox form-type-checkbox" ref={itemsRef}>
    <input
      type="checkbox"
      id={id}
      aria-invalid={!!invalid}
      aria-describedby={describedBy}
      className={`form-checkbox ${invalid ? 'error' : ''}`}
      checked={checked}
      onChange={onHandleChange}
      disabled={disabled}
      value={value} />
    <label className={`option ${disabled ? 'disabled' : ''}`} htmlFor={id}>
      {label}
    </label>
  </div>
);

Checkbox.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  onHandleChange: PropTypes.func.isRequired,
  value: PropTypes.string,
  itemsRef: PropTypes.shape({}),
  invalid: PropTypes.bool,
  describedBy: PropTypes.string
};

export default Checkbox;
