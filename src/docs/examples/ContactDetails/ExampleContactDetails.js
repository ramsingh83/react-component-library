import React, { useState } from 'react';
import {
  ContactDetails
} from '../../../components';
import Config from '../../../config.json';

const ExampleContactDetails = () => {
  const [validateForm] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    phone: '',
    error: {
      emailError: '',
      phoneError: ''
    }
  });

  const handleContacts = (contact) => {
    const newData = { ...formData };
    newData.email = contact.email;
    newData.phone = contact.phone;
    newData.error.emailError = contact.emailError;
    newData.error.phoneError = contact.phoneError;
    setFormData(newData);
  };

  return (
    <ContactDetails
      title=""
      fields={Config.contacts.fields}
      email=""
      phone=""
      validateInput={validateForm}
      setValues={handleContacts} />
  );
};

export default ExampleContactDetails;
