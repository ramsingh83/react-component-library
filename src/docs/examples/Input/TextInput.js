import React, { useState } from 'react';
import {
  Input
} from '../../../components';
import Config from '../../../config.json';

const TextInput = () => {
  const [validateForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    error: {
      nameError: ''
    }
  });

  const handleName = (value, error) => {
    const newData = { ...formData };
    newData.name = value;
    newData.error.nameError = error;
    setFormData(newData);
  };

  return (
    <Input
      config={Config.input}
      inputId="input-id"
      inputValue={formData.name}
      setInputValue={handleName}
      validateInput={validateForm} />
  );
};

export default TextInput;
