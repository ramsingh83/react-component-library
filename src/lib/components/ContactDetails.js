import React from "react";
import "./ContactDetails.css";

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
      <span className={`input-label ${required ? 'element-required' : ''}`}>{label}</span>
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
  </div>
);

export default ContactDetails;
