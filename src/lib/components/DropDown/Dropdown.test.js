import React from 'react';
import { shallow } from 'enzyme';
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

const component = shallow(
  <Dropdown
    handleChange={() => {}}
    handleBlur={() => {}}
    elementId="option-id"
    items={items}
    label="Select a date"
    disabled={false}
    invalid={false}
    required={false} />
);

describe('Dropdown component', () => {
  it('shows the correct props of Dropdown', () => {
    const select = component.find('select').get(0);

    expect(select.props.id).toBe('option-id');
    expect(select.props.className).toBe('');
  });

  it('sets error class when invalid', () => {
    component.setProps({ invalid: true });

    const select = component.find('select').get(0);

    expect(select.props.className).toBe('error');
  });

  it('shows the required indicator when required prop is true', () => {
    component.setProps({ required: true });

    const span = component.find('.mandatory');

    expect(span.text()).toBe('*');
  });

  it('does not show the required indicator when required prop is false', () => {
    component.setProps({ required: false });

    expect(component.find('.mandatory').exists()).toBe(false);
  });
});
