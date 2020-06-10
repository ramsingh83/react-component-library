import React from 'react';
import { create } from "react-test-renderer";
import Input from './Input';

const minLength = 5;
const maxLength = 20;
const component = create(
  <Input
    label="Name"
    inputId="input-id"
    InputValue="Capgemini"
    minLength={minLength}
    maxLength={maxLength}
    placeholder="John Doe"
    setInputValue={() => {}} />
);

describe("Checkbox component", () => {
  test("it shows the correct props of Input", () => {
    const instance = component.root;
    const input = instance.findByType("input");
    expect(input.props.id).toBe("input-id");
    expect(input.props.minLength).toBe(5);
    expect(input.props.maxLength).toBe(20);
    expect(input.props.placeholder).toBe("John Doe");
  });
});
