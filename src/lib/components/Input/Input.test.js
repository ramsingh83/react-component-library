import React from 'react';
import { create } from 'react-test-renderer';
import Input from './Input';
import Config from '../../../config.json';

const component = create(
  <Input
    config={Config.input}
    inputId="input-id"
    InputValue="Capgemini"
    setInputValue={() => {}}
    validateInput={false} />
);

describe('Checkbox component', () => {
  test('it shows the correct props of Input', () => {
    const instance = component.root;
    const input = instance.findByType('input');
    expect(input.props.id).toBe('input-id');
    expect(input.props.minLength).toBe('2');
    expect(input.props.maxLength).toBe('10');
    expect(input.props.placeholder).toBe('Enter your name');
  });
});
