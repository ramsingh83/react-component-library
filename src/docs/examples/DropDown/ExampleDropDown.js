import React from 'react';
import {
  Dropdown
} from '../../../components';

const ExampleDropdown = () => {
  const items = [
    { id: '0', name: '--Select--' },
    { id: '1', name: 'ContactDetails' },
    { id: '2', name: 'PostcodeFinder' },
    { id: '3', name: 'Calendar' }
  ];

  return (
    <Dropdown
      items={items}
      label="Dropdown label"
      handleChange={() => {}}
      handleBlur={() => {}}
      required />
  );
};

export default ExampleDropdown;
