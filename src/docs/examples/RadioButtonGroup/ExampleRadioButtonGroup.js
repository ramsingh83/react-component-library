import React, { useState } from 'react';
import {
  RadioButtonGroup
} from '../../../components';
import Config from '../../../config.json';

const ExampleRadioButtonGroup = () => {
  const [validateForm] = useState(false);
  const [formData, setFormData] = useState({
    radioButtonValue: ''
  });

  const handleRadioButton = (value) => {
    const newData = { ...formData };
    newData.radioButtonValue = value;
    setFormData(newData);
  };

  return (
    <RadioButtonGroup
      config={Config.radioButton}
      name="radio-button-group"
      defaultValue="radio2"
      setRadioButtonValue={value => handleRadioButton(value)}
      initialValidation={validateForm} />
  );
};

export default ExampleRadioButtonGroup;
