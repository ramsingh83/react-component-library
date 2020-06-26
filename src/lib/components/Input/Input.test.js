import React from 'react';
import { mount } from 'enzyme';
import Input from './Input';
import Config from '../../../config.json';

function getProps(config, inputId, InputValue) {
  return {
    inputId,
    InputValue,
    setInputValue: () => {},
    config,
    validateInput: false
  };
}

function getWrappedComponent(props) {
  return mount(
    <Input {...props} />
  );
}

describe('Test text input', () => {
  const customProps = getProps(Config.input, 'input-id', 'testvalue');
  let wrapper;
  let input;
  beforeEach(() => {
    wrapper = getWrappedComponent(customProps);
    input = wrapper.find('input');
  });

  it('Should render Input component with props', () => {
    expect(wrapper.exists()).toEqual(true);
  });

  it('should shows the correct props of Input', () => {
    expect(input.props().id).toBe(customProps.inputId);
    expect(input.props().minLength).toBe(customProps.config.minLength);
    expect(input.props().maxLength).toBe(customProps.config.maxLength);
    expect(input.props().placeholder).toBe(customProps.config.placeholder);
    expect(Boolean(input.props()['aria-required'])).toBe(customProps.config.required);
  });

  it('should simulate user to input text', () => {
    const userInput = 'test';
    input.simulate('change', { target: { value: userInput }, preventDefault: jest.fn() });
    expect(wrapper.find('input').props().value).toBe(userInput);
    expect(wrapper.find(`#${customProps.inputId}-error`).text()).toBe('');
  });

  it('should through error for empty input field', () => {
    input.simulate('blur');
    expect(wrapper.find(`#${customProps.inputId}-error`).text()).toBe(customProps.config.emptyError);
  });

  it('should through error for invalid input field', () => {
    const userInput = '@@';
    input.simulate('change', { target: { value: userInput }, preventDefault: jest.fn() });
    input.simulate('blur');
    expect(wrapper.find(`#${customProps.inputId}-error`).text()).toBe(customProps.config.invalidError);
  });
});

describe('Test currency input', () => {
  const customProps = getProps(Config.currencyInput, 'currency-input-id', 0);
  let wrapper;
  let input;
  beforeEach(() => {
    wrapper = getWrappedComponent(customProps);
    input = wrapper.find('input');
  });

  it('Should render Input component with props', () => {
    expect(wrapper.exists()).toEqual(true);
  });

  it('should shows the correct props of Input', () => {
    expect(input.props().id).toBe(customProps.inputId);
    expect(input.props().minLength).toBe(customProps.config.minLength);
    expect(input.props().maxLength).toBe(customProps.config.maxLength);
    expect(input.props().placeholder).toBe(customProps.config.placeholder);
    expect(Boolean(input.props()['aria-required'])).toBe(customProps.config.required);
  });

  it('should through error without entering amount', () => {
    input.simulate('blur');
    expect(wrapper.find(`#${customProps.inputId}-error`).text()).toBe(customProps.config.emptyError);
  });

  it('should through error with alphabets/special characters in amount field', () => {
    const userInput = '@@';
    input.simulate('change', { target: { value: userInput }, preventDefault: jest.fn() });
    input.simulate('blur');
    expect(wrapper.find(`#${customProps.inputId}-error`).text()).toBe(customProps.config.invalidError);
  });

  it('should through error if value entered is less than minimum amount', () => {
    const userInput = customProps.config.minAmount - 0.01;
    input.simulate('change', { target: { value: userInput }, preventDefault: jest.fn() });
    input.simulate('blur');
    expect(wrapper.find(`#${customProps.inputId}-error`).text()).toBe(customProps.config.minAmountError);
  });

  it('should through error if value entered is greater than maximum amount', () => {
    const userInput = customProps.config.maxAmount + 0.01;
    input.simulate('change', { target: { value: userInput }, preventDefault: jest.fn() });
    input.simulate('blur');
    expect(wrapper.find(`#${customProps.inputId}-error`).text()).toBe(customProps.config.maxAmountError);
  });
});
