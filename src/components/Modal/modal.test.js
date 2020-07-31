import React from 'react';
import { shallow } from 'enzyme';
import Modal from './Modal';

const component = shallow(<Modal closed={() => {}} />);

describe('<Modal component', () => {
  it('Should render Modal component', () => {
    expect(component.exists()).toEqual(true);
  });
});
