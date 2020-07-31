import React, { useState } from 'react';
import {
  Checkbox
} from '../../../components';

const ExampleCheckbox = () => {
  const [formData, setFormData] = useState({
    checkboxValue: ''
  });

  const handleCheckbox = (checked, value) => {
    const newData = { ...formData };
    if (checked) newData.checkboxValue = value;
    setFormData(newData);
  };

  return (
    <Checkbox
      label="Checkbox label"
      value="en"
      id="check-id"
      setInputValue={handleCheckbox} />
  );
};

export default ExampleCheckbox;
