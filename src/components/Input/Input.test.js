import React from 'react';
import { mount } from 'enzyme';
import Input from './Input';
import Config from '../../config.json';

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

describe('Text input component', () => {
  const customProps = getProps(Config.input, 'input-id', 'testvalue');
  let wrapper;
  let input;
  beforeEach(() => {
    wrapper = getWrappedComponent(customProps);
    input = wrapper.find('input');
  });

  it('Should render Input component', () => {
    expect(wrapper.exists()).toEqual(true);
  });

  it('Should shows the correct props of Input', () => {
    expect(input.props().id).toBe(customProps.inputId);
    expect(input.props().minLength).toBe(customProps.config.minLength);
    expect(input.props().maxLength).toBe(customProps.config.maxLength);
    expect(input.props().placeholder).toBe(customProps.config.placeholder);
    expect(Boolean(input.props()['aria-required'])).toBe(customProps.config.required);
  });

  it('Should simulate user input', () => {
    const userInput = 'test';
    input.simulate('change', { target: { value: userInput }, preventDefault: jest.fn() });
    expect(wrapper.find('input').props().value).toBe(userInput);
    expect(wrapper.find(`#${customProps.inputId}-error`).text()).toBe('');
  });

  it('should throw error for empty input field', () => {
    input.simulate('blur');
    expect(wrapper.find(`#${customProps.inputId}-error`).text()).toBe(customProps.config.emptyError);
  });

  it('should throw error for invalid input field', () => {
    const userInput = '@@';
    input.simulate('change', { target: { value: userInput }, preventDefault: jest.fn() });
    input.simulate('blur');
    expect(wrapper.find(`#${customProps.inputId}-error`).text()).toBe(customProps.config.invalidError);
  });
});

describe('Currency input component', () => {
  const customProps = getProps(Config.currencyInput, 'currency-input-id', 0);
  let wrapper;
  let input;
  beforeEach(() => {
    wrapper = getWrappedComponent(customProps);
    input = wrapper.find('input');
  });

  it('Should render component with props', () => {
    expect(wrapper.exists()).toEqual(true);
  });

  it('should shows the correct props', () => {
    expect(input.props().id).toBe(customProps.inputId);
    expect(input.props().minLength).toBe(customProps.config.minLength);
    expect(input.props().maxLength).toBe(customProps.config.maxLength);
    expect(input.props().placeholder).toBe(customProps.config.placeholder);
    expect(Boolean(input.props()['aria-required'])).toBe(customProps.config.required);
  });

  it('Should throw error without entering amount', () => {
    input.simulate('blur');
    expect(wrapper.find(`#${customProps.inputId}-error`).text()).toBe(customProps.config.emptyError);
  });

  it('Should throw error with alphabets/special characters in amount field', () => {
    const userInput = '@@';
    input.simulate('change', { target: { value: userInput }, preventDefault: jest.fn() });
    input.simulate('blur');
    expect(wrapper.find(`#${customProps.inputId}-error`).text()).toBe(customProps.config.invalidError);
  });

  it('Should throw error if value entered is less than minimum amount', () => {
    const userInput = customProps.config.minAmount - 0.01;
    input.simulate('change', { target: { value: userInput }, preventDefault: jest.fn() });
    input.simulate('blur');
    expect(wrapper.find(`#${customProps.inputId}-error`).text()).toBe(customProps.config.minAmountError);
  });

  it('Should throw error if value entered is greater than maximum amount', () => {
    const userInput = customProps.config.maxAmount + 0.01;
    input.simulate('change', { target: { value: userInput }, preventDefault: jest.fn() });
    input.simulate('blur');
    expect(wrapper.find(`#${customProps.inputId}-error`).text()).toBe(customProps.config.maxAmountError);
  });
});
