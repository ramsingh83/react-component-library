import React from 'react';
import Button from './Button';
import { create } from "react-test-renderer";

const isDisable = false;
const component = create(<Button children="PRIMARY" disabled={isDisable} handleClicked={() => {}} />);

describe("Button component", () => {
  test("it shows the correct props of button", () => {
    const instance = component.root;
    const button = instance.findByType("button");
    expect(button.props.children).toBe("PRIMARY");
    expect(button.props.disabled).toBe(false);
  });
});
