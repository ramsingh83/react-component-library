import React from 'react';
import { shallow } from 'enzyme';
import Button from './Button';

const isDisable = false;
const mockCallBack = jest.fn();

const component = shallow(
  <Button
    styles="primary"
    disabled={isDisable}
    handleClicked={mockCallBack}>
    Submit
  </Button>
);

describe('Button component', () => {
  test('Should render Button Component', () => {
    expect(component.exists()).toEqual(true);
  });

  test('it shows the correct props of button', () => {
    expect(component.find('button').prop('children')).toBe('Submit');
    expect(component.find('button').prop('disabled')).toBe(false);
    expect(component.find('button').prop('type')).toBe('button');
    expect(component.find('button').prop('className')).toBe('button primary');
  });

  test('it shows the Button Component is currently not disabled', () => {
    expect(component.find('button')).not.toBeDisabled();
  });

  test('it shows the Button Component is currently disabled', () => {
    component.setProps({ disabled: true });
    expect(component.find('button')).toBeDisabled();
  });

  test('it should run onClick function when button is clicked in the DOM', () => {
    component.find('button').simulate('click');
    expect(mockCallBack).toHaveBeenCalled();
  });
});
