import React from 'react';
import { shallow } from 'enzyme';
import Dropdown from './Dropdown';

const props = {
  handleChange: jest.fn,
  keyName: ['dateOpt'],
  options: [
    {
      dateOpt: '01-01-2019',
      option: []
    }
  ],
  title: 'please select a option'
};
const component = shallow(<Dropdown {...props} />);

describe('DropDown component', () => {
  it('Should render DropDown component', () => {
    expect(component.exists()).toEqual(true);
  });
});
