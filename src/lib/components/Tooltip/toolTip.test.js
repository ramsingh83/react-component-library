import React from 'react';
import { nanoid } from 'nanoid';
import { create } from "react-test-renderer";
import Tooltip from './Tooltip';

const component = create(
  <Tooltip
    message="I am a tooltip"
    position="top" />
);

describe('Tooltip component', () => {
  it('Should render Tooltip component', () => {
    expect(component.exists()).toEqual(true);
  });
});
