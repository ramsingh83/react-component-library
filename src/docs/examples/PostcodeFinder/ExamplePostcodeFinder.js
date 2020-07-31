import React, { useState } from 'react';
import {
  PostcodeFinder
} from '../../../components';
import Config from '../../../config.json';

const ExamplePostcodeFinder = () => {
  const [validateForm] = useState(false);
  const [formData, setFormData] = useState({
    address: '',
    error: {
      addressError: ''
    }
  });

  const handleAddress = (address, error) => {
    const newData = { ...formData };
    newData.address = address;
    newData.error.addressError = error;
    setFormData(newData);
  };

  return (
    <React.Fragment>
      <PostcodeFinder
        label="Address"
        placeholder="start typing your address"
        setSearchResult={handleAddress}
        config={Config.loqate}
        validateInput={validateForm}
        required />
      <div className="address-desc">
        {
          formData.address
          && Object.values(formData.address).filter(Boolean).map((val, index) => {
            const key = `${index}-${val}`;
            return (
              <span className="address-line" key={key}>{val}</span>
            );
          })
        }
      </div>
    </React.Fragment>
  );
};

export default ExamplePostcodeFinder;
