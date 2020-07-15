import React, { useState, useLayoutEffect } from 'react';
import PropTypes from 'prop-types';

const ContactDetails = ({
  title,
  email,
  phone,
  fields,
  validateInput,
  setValues
}) => {
  const [contacts, setContacts] = useState({
    email,
    phone,
    emailError: '',
    phoneError: ''
  });

  useLayoutEffect(() => {
    setValues(contacts);
  }, [contacts]);

  const [firstRender, setFirstRender] = useState(true);

  const validate = () => {
    const values = { ...contacts };
    fields.forEach((field) => {
      const pattern = new RegExp(field.pattern);
      const value = values[field.key];
      if (!value && field.required) {
        values[`${field.key}Error`] = field.emptyError;
      } else if (value && pattern && !pattern.test(value)) {
        values[`${field.key}Error`] = field.invalidError;
      } else {
        contacts[`${field.key}Error`] = '';
      }
    });
    setContacts(values);
  };

  useLayoutEffect(() => {
    setFirstRender(false);
    if (!firstRender) {
      validate();
    }
  }, [validateInput]);

  const setError = key => contacts[`${key}Error`];

  const handleOnInputChanged = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    const inputDetails = fields.find(input => input.key === name);
    if (!value) {
      if (inputDetails.required) {
        contacts[`${name}Error`] = inputDetails.emptyError;
      } else {
        contacts[`${name}Error`] = '';
      }
    } else {
      contacts[`${name}Error`] = '';
    }

    setContacts({ ...contacts, [name]: value });
  };

  const handleFocusOut = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    const inputs = fields.find(input => input.key === name);
    const pattern = new RegExp(inputs.pattern);
    if (value) {
      if (pattern && !pattern.test(value)) {
        contacts[`${name}Error`] = inputs.invalidError;
      } else {
        contacts[`${name}Error`] = '';
      }
    } else if (inputs.required) {
      contacts[`${name}Error`] = inputs.emptyError;
    } else {
      contacts[`${name}Error`] = '';
    }
    setContacts({ ...contacts, [name]: value });
  };

  return (
    <fieldset className="contact-details">
      <legend>{title}</legend>
      <div>
        {
          fields.map(field => (
            <React.Fragment key={field.key}>
              <div className="form-item">
                <label htmlFor={field.key} className="input-label">
                  {field.label}
                  {field.required ? <span className="mandatory">*</span> : ''}
                  <input
                    name={field.key}
                    type="text"
                    className={`form-input ${setError(field.key) ? 'invalid' : ''}`}
                    aria-describedby={`${field.key}-error`}
                    aria-label={field.label}
                    placeholder={field.placeholder}
                    autoComplete={field.autoComplete || 'off'}
                    onChange={handleOnInputChanged}
                    onBlur={handleFocusOut}
                    value={contacts[field.key] || ''}
                    maxLength={field.maxLength}
                    minLength={field.minLength}
                    aria-required="true"
                    aria-invalid={!!setError(field.key)} />
                </label>
                <div id={`${field.key}-error`} className="error-info">{setError(field.key)}</div>
              </div>
            </React.Fragment>
          ))
        }
      </div>
    </fieldset>
  );
};

ContactDetails.propTypes = {
  title: PropTypes.string,
  email: PropTypes.string,
  phone: PropTypes.string,
  fields: PropTypes.arrayOf(PropTypes.shape({})),
  validateInput: PropTypes.bool,
  setValues: PropTypes.func
};

export default ContactDetails;
