import React from 'react';
import { create } from "react-test-renderer";
import RadioButton from './RadioButton';

const component = create(
  <RadioButton 
    id="yes-option"
    name="YES"
    disabled={false}
    onHandleChange={() => {}} />
  );

describe("RadioButton component", () => {
  test("it shows the correct props of RadioButton", () => {
    const instance = component.root;
    const radio = instance.findByType("input");
    expect(radio.props.id).toBe("yes-option");
    expect(radio.props.name).toBe("YES");
  });
});
