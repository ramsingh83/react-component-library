import React from 'react';
import { shallow } from 'enzyme';
import SectionWrap from './SectionWrap';

const component = shallow(
  <SectionWrap id="confirm">
    <button type="button" id="continue">Continue</button>
  </SectionWrap>
);

describe('SectionWrap component', () => {
  test('Should render SectionWrap Component', () => {
    expect(component.exists()).toEqual(true);
  });

  test('it shows the correct props of SectionWrap', () => {
    expect(component.find('section').prop('id')).toBe('confirm');
    expect(component.find('section').hasClass('section')).toBe(true);
    expect(component.text()).toEqual('Continue');
  });

  test('extra classes are merged with classes', () => {
    component.setProps({ extraClasses: 'class1 class2' });

    expect(component.find('section').hasClass('section class1 class2')).toBe(true);
  });
});
