import React from 'react';

const ContactDetails = ({
  label,
  placeholder,
  email,
  handleOnInputChanged,
  invalid,
  required
}) => (
  <div className="form-item">
    <label htmlFor="email-id">
      <span className="input-label">{label}</span>
      {required ? <span style={{ color: 'red' }}>*</span> : ''}
      <input
        id="email-id"
        type="text"
        className={`form-input ${invalid ? 'invalid' : ''}`}
        aria-describedby="email-error"
        aria-label={label}
        placeholder={placeholder}
        onChange={handleOnInputChanged}
        value={email}
        maxLength="128"
        aria-required="true"
        aria-invalid={!!invalid} />
    </label>
    <div id="email-error" className="error-ifo"></div>
    {console.log('test')}
  </div>
);

export default ContactDetails;
