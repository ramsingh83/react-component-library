import React from 'react';
import { shallow } from 'enzyme';
import Tooltip from './Tooltip';

const message = 'test tooltip';
const position = 'bottom';

const component = shallow(
  <Tooltip
    message={message}
    position={position} />
);

describe('Tooltip component', () => {
  it('Should render Tooltip component', () => {
    expect(component.exists()).toEqual(true);
  });
});
