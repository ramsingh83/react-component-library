import React from 'react';
import { shallow } from 'enzyme';
import Input from './Input';

const component = shallow(
  <Input
    label=""
    inputId="testinput"
    handleOnInputChanged={() => {}} />
);

describe('Input component', () => {
  it('Should render Input component', () => {
    expect(component.exists()).toEqual(true);
  });
});
