import React from 'react';
import { create } from 'react-test-renderer';
import Button from './Button';

const isDisable = false;
const component = create(<Button styles="primary" disabled={isDisable} handleClicked={() => {}}>Submit</Button>);

describe('Button component', () => {
  test('it shows the correct props of button', () => {
    const instance = component.root;
    const button = instance.findByType('button');
    expect(button.props.children).toBe('Submit');
    expect(button.props.disabled).toBe(false);
  });
});
