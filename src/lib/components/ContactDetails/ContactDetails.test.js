import React from 'react';
import { shallow } from 'enzyme';
import ContactDetails from './ContactDetails';

const config = [
  {
    key: 'email',
    label: 'Email',
    placeholder: 'John.Doe@example.com',
    autoComplete: 'email',
    maxLength: 128,
    minLength: 5,
    required: true,
    emptyError: 'Please enter email',
    invalidError: 'Please enter valid email',
    pattern: "^(?![.])(?!.*?[._]{2})[a-zA-Z0-9._%+\\-!#$&'*/=?^`{|}~]+@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$"
  },
  {
    key: 'confirmEmail',
    label: 'Confirm email',
    placeholder: '',
    autoComplete: 'email',
    maxLength: 128,
    minLength: 5,
    required: true,
    emptyError: 'Please confirm email',
    invalidError: 'Please enter valid email',
    pattern: "^(?![.])(?!.*?[._]{2})[a-zA-Z0-9._%+\\-!#$&'*/=?^`{|}~]+@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$"
  },
  {
    key: 'phone',
    label: 'Phone number',
    placeholder: '+41 123456789',
    autoComplete: 'phone',
    maxLength: 20,
    minLength: 5,
    required: false,
    emptyError: 'Please enter phone number',
    invalidError: 'Please enter valid phone number',
    pattern: '^[0+][\\s?0-9\\s?]{4,19}$'
  }
];

const component = shallow(
  <ContactDetails
    label="Email"
    fields={config}
    setValues={() => {}}
    validateContact={false} />
);

describe('ContactDetails', () => {
  it('Should renders ContactDetails component', () => {
    expect(component.exists()).toEqual(true);
  });
});
