import React from 'react';
import { shallow } from 'enzyme';
import Icon from './Icon';

const component = shallow(
  <Icon
    name="arrow"
    id="back"
    title="This symbolizes a back arrow"
    extraClass="red"
    ariaHidden="true"
    focusable="false" />
);

describe('Icon component', () => {
  test('Should render Icon Component', () => {
    expect(component.exists()).toEqual(true);
  });

  test('it shows the correct props of Icon', () => {
    expect(component.find('use').prop('xlinkHref')).toBe('#arrow');
    expect(component.find('title').prop('id')).toBe('back');
    expect(component.find('svg').prop('aria-hidden')).toBe(null);
    expect(component.find('svg').hasClass('red')).toBe(true);
    expect(component.find('svg').prop('focusable')).toBe('false');
    expect(component.find('title').text()).toBe('This symbolizes a back arrow');
    expect(component.find('svg').prop('role')).toBe('img');
    expect(component.find('svg').prop('aria-labelledby')).toBe('back');
  });
});
