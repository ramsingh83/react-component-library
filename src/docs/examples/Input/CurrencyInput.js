import React, { useState } from 'react';
import {
  Input
} from '../../../components';
import Config from '../../../config.json';

const CurrencyInput = () => {
  const [validateForm] = useState(false);
  const [formData, setFormData] = useState({
    currencyValue: 0,
    error: {
      currencyValueError: ''
    }
  });

  const handleCurrencyValue = (value, error) => {
    const newData = { ...formData };
    newData.currencyValue = value;
    newData.error.currencyValueError = error;
    setFormData(newData);
  };

  return (
    <Input
      config={Config.currencyInput}
      inputId="currency-input-id"
      inputValue={formData.currencyValue}
      setInputValue={handleCurrencyValue}
      validateInput={validateForm} />
  );
};

export default CurrencyInput;
