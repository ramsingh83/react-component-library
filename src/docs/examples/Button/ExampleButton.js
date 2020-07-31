import React, { useState } from 'react';
import {
  Button
} from '../../../components';

const ExampleButton = () => {
  const [validateForm, setValidateForm] = useState(false);

  return (
    <Button
      styles="primary"
      handleClicked={() => setValidateForm(!validateForm)}>
      Submit
    </Button>
  );
};

export default ExampleButton;
