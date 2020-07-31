import React from 'react';
import { mount } from 'enzyme';
import ContactDetails from './ContactDetails';
import Config from '../../config.json';

const emailProps = {
  name: 'email',
  label: 'Email',
  placeholder: 'John.Doe@example.com',
  maxLength: 128,
  minLength: 5,
  required: true,
  emptyError: 'Please enter an email',
  invalidError: 'Please enter a valid email'
};

const phoneProps = {
  name: 'phone',
  label: 'Phone number',
  placeholder: '+41 123456789',
  autoComplete: 'phone',
  maxLength: 20,
  minLength: 5,
  required: true,
  emptyError: 'Please enter a phone number',
  invalidError: 'Please enter a valid phone number'
};

const emailPattern = /^(?![.])(?!.*?[._]{2})[a-zA-Z0-9._%+\-!#$&'*/=?^`{|}~]+@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const phonePattern = /^[0+][\s?0-9\s?]{4,19}$/s;

const component = mount(
  <ContactDetails
    title=""
    fields={Config.contacts.fields}
    email=""
    phone=""
    validateInput={false}
    setValues={() => {}} />
);

describe('ContactDetails', () => {
  const emailInput = component.find('[name="email"]').hostNodes();
  const phoneInput = component.find('[name="phone"]').hostNodes();

  it('Should renders ContactDetails component', () => {
    expect(component.exists()).toEqual(true);
  });

  it('Should shows the correct props of email contact', () => {
    expect(emailInput.props().name).toBe(emailProps.name);
    expect(emailInput.props().minLength).toBe(emailProps.minLength);
    expect(emailInput.props().maxLength).toBe(emailProps.maxLength);
    expect(emailInput.props().placeholder).toBe(emailProps.placeholder);
    expect(Boolean(emailInput.props()['aria-required'])).toBe(emailProps.required);
  });

  it('Should shows the correct props of phone contacts', () => {
    expect(phoneInput.props().name).toBe(phoneProps.name);
    expect(phoneInput.props().minLength).toBe(phoneProps.minLength);
    expect(phoneInput.props().maxLength).toBe(phoneProps.maxLength);
    expect(phoneInput.props().placeholder).toBe(phoneProps.placeholder);
    expect(Boolean(phoneInput.props()['aria-required'])).toBe(phoneProps.required);
  });

  it('Should throw error for empty email input field', () => {
    emailInput.simulate('blur');
    expect(component.find(`#${emailProps.name}-error`).text()).toBe(emailProps.emptyError);
  });

  it('Should throw error for invalid email', () => {
    const userInput = 'test@example@com';
    emailInput.simulate('change', { target: { value: userInput }, preventDefault: jest.fn() });
    expect(component.find(`#${emailProps.name}-error`).text()).not.toBe('');
  });

  it('Should not throw error for empty phone input field when not mandatory', () => {
    phoneInput.simulate('blur');
    expect(component.find(`#${phoneProps.name}-error`).text()).toBe('');
  });
});

describe('Email Validation', () => {
  it.each`
    email                       | result
    ${'ramsingh@test.com'}      | ${true}
    ${'RAMSINGH@test.co'}       | ${true}
    ${'ram!#$%&*+Singh@test.co'}| ${true}
    ${'ram-/=?^_`{|}s@cg.com'}  | ${true}
    ${'s_4$^us@test.cg'}        | ${true}
    ${'0123456789@cg.com'}      | ${true}
    ${'ram123$%^&*singh@cg.com'}| ${true}
    ${'ram@hw.co.'}             | ${false}
    ${'.ram@hw.co'}             | ${false}
    ${'ramsinghcg.com'}         | ${false}
    ${'ramsingh@cg..com'}       | ${false}
    ${'ram..singh@cg.com'}      | ${false}
    ${'ram@singh@test.com'}     | ${false}
    `('Should return $result when $email', ({ email, result }) => {
  expect(emailPattern.test(email)).toEqual(result);
});
});

describe('Phone number Validation', () => {
  it.each`
    phone                         | result
    ${'9968877156'}               | ${false}
    ${'9968 7156'}                | ${false}
    ${'9968 77  6'}               | ${false}
    ${'+ 968 8771'}               | ${true}
    ${'0 68 77 56'}               | ${true}
    `('Should return $result when $phone', ({ phone, result }) => {
  expect(phonePattern.test(phone)).toEqual(result);
});
});
