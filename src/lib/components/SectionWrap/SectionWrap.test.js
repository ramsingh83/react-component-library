import React from 'react';
import { shallow } from 'enzyme';
import SectionWrap from './SectionWrap';

const component = shallow(
  <SectionWrap
    id="confirm"
    extraClasses="confirm">
    <button type="button" id="continue">Continue</button>
  </SectionWrap>
);

describe('SectionWrap component', () => {
  test('Should render SectionWrap Component', () => {
    expect(component.exists()).toEqual(true);
  });

  test('it shows the correct props of SectionWrap', () => {
    expect(component.find('section').prop('id')).toBe('confirm');
    expect(component.find('section').hasClass('confirm')).toBe(true);
    expect(component.text()).toEqual('Continue');
  });
});
