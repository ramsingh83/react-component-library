import React from 'react';
import { shallow, mount } from 'enzyme';
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
    setInputValue={mockCallBack}
    invalid={false} />
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

  test('selecting a checkbox triggers setInputValue callback', () => {
    const setInputValueMock = jest.fn();

    const wrapper = mount(
      <Checkbox
        id="i-accept"
        value="YES"
        label="Are you developer"
        disabled={false}
        checked
        onHandleChange={() => {}}
        setInputValue={setInputValueMock}
        invalid={false} />
    );

    wrapper.find({ type: 'checkbox' }).at(0).simulate('change', { target: { value: 'YES' } });
    expect(setInputValueMock).toHaveBeenCalledTimes(1);
    expect(setInputValueMock).toHaveBeenCalledWith(true, 'YES');
  });

  test('checkbox should have the invalid class when invalid prop is set to true', () => {
    expect(component.find({ type: 'checkbox' }).prop('className')).toEqual('form-checkbox ');
    component.setProps({ invalid: true });
    expect(component.find({ type: 'checkbox' }).prop('className')).toEqual('form-checkbox invalid');
  });

  test('label should have the disabled class when disabled prop is true', () => {
    expect(component.find('label').prop('className')).toEqual('option ');
    component.setProps({ disabled: true });
    expect(component.find('label').prop('className')).toEqual('option disabled');
  });
});
