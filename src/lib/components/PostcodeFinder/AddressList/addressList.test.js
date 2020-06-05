import React from 'react';
import { shallow } from 'enzyme';
import AddressList from './index';
import mockAddresses from '../../../static/testStubs/addressList.json';

const props = {
  results: mockAddresses.Items,
  getDetails: jest.fn(),
  handleKeyDown: jest.fn(),
  cursor: 0
};

const component = shallow(<AddressList {...props} />);

describe('Address list component', () => {
  const address = component.find('li');

  it('Should render Address list component with props', () => {
    expect(component.exists()).toEqual(true);
  });

  it('Should render all the list', () => {
    expect(address.children()).toHaveLength(mockAddresses.Items.length);
  });

  it('Should allow user to click on a address and respective onclick method is called', () => {
    address.at(0).find('div').simulate('click');
    expect(props.getDetails.mock.calls).toHaveLength(1);
  });

  it('Should allow user to enter keydown on a address and respective keyDown method is called', () => {
    address.at(0).find('div').simulate('keydown');
    expect(props.handleKeyDown.mock.calls).toHaveLength(1);
  });
});
