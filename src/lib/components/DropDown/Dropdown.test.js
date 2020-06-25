import React from 'react';
import { create } from 'react-test-renderer';
import Dropdown from './Dropdown';

const items = [
  {
    id: '08/06/2020',
    name: 'Mon 08 Jun 2020'
  },
  {
    id: '09/06/2020',
    name: 'Tue 09 Jun 2020'
  },
  {
    id: '10/06/2020',
    name: 'Wed 10 Jun 2020'
  }
];

const component = create(
  <Dropdown
    handleChange={() => {}}
    handleBlur={() => {}}
    elementId="option-id"
    items={items}
    label="Select a date"
    disabled={false}
    required />
);

describe('Checkbox component', () => {
  test('it shows the correct props of Dropdown', () => {
    const instance = component.root;
    const select = instance.findByType('select');
    expect(select.props.id).toBe('option-id');
  });
});
