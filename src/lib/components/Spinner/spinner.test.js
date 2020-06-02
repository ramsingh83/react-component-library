import React from 'react';
import { shallow } from 'enzyme';
import Spinner from './Spinner';

const component = shallow(<Spinner />);

describe('Spinner component', () => {
  it('Should render Spinner component', () => {
    expect(component.exists()).toEqual(true);
  });
});
