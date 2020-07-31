import React from 'react';
import { mount } from 'enzyme';
import RadioButton from './RadioButton';

const mockCallBack = jest.fn();

const component = mount(
  <RadioButton
    id="yes-option"
    name="YES"
    disabled={false}
    handleOptionChange={mockCallBack}
    checked={false} />
);

describe('RadioButton component', () => {
  test('Should render RadioButton Component', () => {
    expect(component.exists()).toEqual(true);
  });

  test('it shows the correct props of RadioButton', () => {
    expect(component.find('input').prop('id')).toBe('yes-option');
    expect(component.find('input').prop('name')).toBe('YES');
    expect(component.find('input').prop('disabled')).toEqual(undefined);
    expect(component.find('input').prop('type')).toEqual('radio');
    expect(component.find('input').prop('className')).toEqual('form-checkbox');
    expect(component.find('input').prop('value')).toBe(undefined);
  });

  test('As a user I see one RadioButton', () => {
    expect(component.find('input[type="radio"]')).toHaveLength(1);
  });

  test('it should check on RadioButton component', () => {
    component.setProps({ checked: true });
    expect(component.find('input[type="radio"]').prop('checked')).toBe(true);
  });

  test('label should have the invalid class when invalid prop is true', () => {
    expect(component.find('label').prop('className')).toEqual('option ');

    component.setProps({ invalid: true });

    expect(component.find('label').prop('className')).toEqual('option invalid');
  });
});
