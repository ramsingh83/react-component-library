import React from 'react';
import { shallow } from 'enzyme';
import Checkbox from './Checkbox';

const mockCallBack = jest.fn();

const component = shallow(
  <Checkbox
    id="i-accept"
    value="YES"
    label="Are you developer"
    disabled={false}
    checked={false}
    onHandleChange={() => { }}
    setInputValue={mockCallBack} />
);

describe('Checkbox component', () => {
  test('Should render Input Component', () => {
    expect(component.exists()).toEqual(true);
  });

  test('it shows the correct props of checkbox', () => {
    expect(component.find({ type: 'checkbox' }).prop('value')).toBe('YES');
    expect(component.find({ type: 'checkbox' }).prop('disabled')).toBe(false);
    expect(component.find({ type: 'checkbox' }).prop('aria-invalid')).toBe(false);
    expect(component.find({ type: 'checkbox' }).prop('id')).toBe('i-accept');
    expect(component.find('label').text()).toEqual('Are you developer');
  });

  test('it should check on Checkbox component', () => {
    component.setProps({ checked: true });
    expect(component.find({ type: 'checkbox' }).prop('checked')).toBe(true);
  });

  test('it should uncheck on Checkbox component', () => {
    component.setProps({ checked: false });
    expect(component.find({ type: 'checkbox' }).prop('checked')).toBe(false);
  });
});
