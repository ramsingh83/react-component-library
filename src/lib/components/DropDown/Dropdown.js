import React from 'react';
import PropTypes from 'prop-types';

const Dropdown = ({
  handleChange,
  handleBlur,
  elementId,
  items,
  label,
  disabled,
  selectedValue,
  children,
  invalid,
  dropDownRef,
  describedBy,
  required
}) => (
  <div className="form-item-select js-form-item form-item js-form-type-select form-type-select js-form-item-select">
    <label className="input-label" htmlFor={elementId}>
      {label}
      {required ? <span className="mandatory">*</span> : ''}
      {children}
    </label>
    <select
      id={elementId}
      className={invalid ? 'error' : ''}
      aria-invalid={invalid}
      onBlur={handleBlur}
      onChange={handleChange}
      aria-label={label}
      ref={dropDownRef || undefined}
      aria-describedby={describedBy}
      aria-live="assertive"
      disabled={disabled}
      value={selectedValue}>
      {
        items.map(({ id, name }) => (
          <option key={id} value={id}>
            {name}
          </option>
        ))
      }
    </select>
  </div>
);

Dropdown.propTypes = {
  handleBlur: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  items: PropTypes.arrayOf(PropTypes.shape({})),
  label: PropTypes.string,
  elementId: PropTypes.string,
  disabled: PropTypes.bool,
  selectedValue: PropTypes.string,
  invalid: PropTypes.bool,
  dropDownRef: PropTypes.shape({}),
  describedBy: PropTypes.string,
  required: PropTypes.bool
};

export default Dropdown;
