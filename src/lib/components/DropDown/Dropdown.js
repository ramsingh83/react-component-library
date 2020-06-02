import React from 'react';
import PropTypes from 'prop-types';

const Dropdown = ({
  handleChange,
  id,
  keyName,
  options,
  title,
  disabled,
  selectedValue,
  children,
  invalid,
  dropDownRef,
  describedBy,
  required
}) => (
  <div className="form-item-select js-form-item form-item js-form-type-select form-type-select js-form-item-select">
    <label className={`input-label ${required ? 'element-required' : ''}`} htmlFor={id}>
      {title}
      {children}
    </label>
    <select
      id={id}
      className={`form-checkbox valid ${invalid ? 'error' : ''}`}
      aria-invalid={!!invalid}
      onBlur={() => {}}
      onChange={handleChange}
      aria-label={title}
      ref={dropDownRef || undefined}
      aria-describedby={describedBy}
      aria-live="assertive"
      disabled={disabled}
      value={selectedValue}>
      {
        options
          ? options.map((option) => {
            let displayValue = '';
            let displayKey = '';
            if (Array.isArray(keyName)) {
              keyName.forEach((key) => {
                displayValue = `${displayValue} ${option[key]}`;
                displayKey = `${displayValue}`;
              });
            } else {
              displayKey = option.key;
              displayValue = option.value;
            }
            return (
              <option
                key={displayKey}
                value={displayKey}
                selected={selectedValue === displayValue}>
                {displayValue}
              </option>
            );
          }) : null
      }
    </select>
  </div>
);

Dropdown.propTypes = {
  keyName: PropTypes.arrayOf(PropTypes.string),
  handleChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.shape({})),
  title: PropTypes.string,
  id: PropTypes.string,
  disabled: PropTypes.bool,
  selectedValue: PropTypes.string,
  invalid: PropTypes.bool,
  dropDownRef: PropTypes.shape({}),
  describedBy: PropTypes.string,
  required: PropTypes.bool
};

export default Dropdown;
