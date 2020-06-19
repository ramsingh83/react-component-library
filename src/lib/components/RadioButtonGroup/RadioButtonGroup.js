import React, { useState, useLayoutEffect } from 'react';
import PropTypes from 'prop-types';

const RadioButtonGroup = (props) => {
  const {
    config,
    setRadioButtonValue,
    initialValidation,
    defaultValue,
    name,
    invalid
  } = props;

  const [validationOnFirstRender, setValidationOnFirstRender] = useState(true);
  const [value, setValue] = useState(defaultValue || '');
  const [error, setError] = useState('');

  const validate = () => {
    let newError = '';
    if (!value) {
      newError = config.emptyError;
    } else {
      newError = '';
    }
    setError(newError);
  };

  useLayoutEffect(() => {
    setRadioButtonValue(value);
    // console.log(value)
  }, [value]);

  useLayoutEffect(() => {
    setValidationOnFirstRender(false);
    if (!validationOnFirstRender) {
      validate();
    }
  }, [initialValidation]);

  const handleOptionChange = (e) => {
    setValue(e.target.value);
    setError('');
  };

  return (
    <React.Fragment>
      {
        config.fields.map(field => (
          <div className="form-item js-form-type-radio form-type-radio" key={field.id}>
            <input
              type="radio"
              id={field.id}
              className="form-checkbox"
              value={field.value}
              checked={value === field.value}
              disabled={field.disabled || undefined}
              name={name}
              onChange={handleOptionChange}
              aria-invalid={!!invalid} />
            <label className={`option ${invalid}`} htmlFor={field.id}>
              {field.label}
            </label>
          </div>
        ))
      }
      <div id={`${name}-error`} className="error-info">{error}</div>
    </React.Fragment>
  );
};

RadioButtonGroup.propTypes = {
  name: PropTypes.string.isRequired,
  setRadioButtonValue: PropTypes.func.isRequired,
  invalid: PropTypes.string,
  config: PropTypes.shape({}).isRequired,
  defaultValue: PropTypes.string,
  initialValidation: PropTypes.bool.isRequired
};

export default RadioButtonGroup;
