import React from 'react';
import { shallow } from 'enzyme';
import Tooltip from './Tooltip';

const component = shallow(<Tooltip message="I am a tooltip" position="top" />);

describe('Tooltip component', () => {
  it('Should render Tooltip component', () => {
    expect(component.exists()).toEqual(true);
  });
});
