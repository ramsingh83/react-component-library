import React from 'react';
import { create } from 'react-test-renderer';
import Checkbox from './Checkbox';

const component = create(
  <Checkbox
    id="i-accept"
    value="YES"
    label="Are you developer"
    disabled={false}
    onHandleChange={() => {}}
    setInputValue={() => {}} />
);

describe('Checkbox component', () => {
  test('it shows the correct props of checkbox', () => {
    const instance = component.root;
    const checkbox = instance.findByType('input');
    expect(checkbox.props.value).toBe('YES');
    expect(checkbox.props.disabled).toBe(false);
  });
});
