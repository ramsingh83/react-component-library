import React from 'react';
import { shallow } from 'enzyme';
import Button from './Button';

const isDisable = false;

const component = shallow(
  <Button
    handleClicked={() => {}}
    disabled={isDisable} />
);

describe('Button component', () => {
  it('Should render button component', () => {
    expect(component.exists()).toEqual(true);
  });
});
