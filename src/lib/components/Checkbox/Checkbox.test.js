import React from 'react';
import { shallow } from 'enzyme';
import Checkbox from './index';

const component = shallow(<Checkbox id="user-accept-1" />);

describe('UserAcceptance component', () => {
  it('Should render UserAcceptance component', () => {
    expect(component.exists()).toEqual(true);
  });
});
