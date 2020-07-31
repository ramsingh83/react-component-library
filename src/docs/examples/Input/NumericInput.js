import React, { useState } from 'react';
import {
  Input
} from '../../../components';
import Config from '../../../config.json';

const NumericInput = () => {
  const [validateForm] = useState(false);
  const [formData, setFormData] = useState({
    numeric: 0,
    error: {
      numericError: ''
    }
  });

  const handleNumeric = (value, error) => {
    const newData = { ...formData };
    newData.numeric = value;
    newData.error.numericError = error;
    setFormData(newData);
  };

  return (
    <Input
      config={Config.numberInput}
      inputId="numeric-input-id"
      inputValue={formData.numeric}
      setInputValue={handleNumeric}
      validateInput={validateForm} />
  );
};

export default NumericInput;
