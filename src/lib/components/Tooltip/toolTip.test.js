import React from 'react';
import { mount } from 'enzyme';
import Tooltip from './Tooltip';

describe('Tooltip component', () => {
  let component;

  beforeEach(() => {
    component = mount(<Tooltip message="I am a tooltip" position="top" />);
  });

  test('Should render Tooltip component', () => {
    expect(component.exists()).toEqual(true);
  });

  test('it shows the correct props of Tooltip', () => {
    expect(component.find(Tooltip).prop('message')).toBe('I am a tooltip');
    expect(component.find(Tooltip).prop('position')).toBe('top');
    expect(component).toHaveLength(1);
  });

  test('it should have an icon', () => {
    expect(component.find('Icon')).toHaveLength(1);
  });

  test('it should show tooltip message when button is clicked', () => {
    component.find('.tooltip-trigger').simulate('click');
    expect(component.find('div.tooltip-message').text()).toBe('I am a tooltip');
  });

  test('it should not show the tooltip message when the tooltip close button is clicked', () => {
    component.find('.tooltip-trigger').simulate('click');
    component.find('.tooltip-close').simulate('click');
    expect(component.find('div.tooltip-message')).not.toIncludeText('I am a tooltip');
  });

  test('it should show the tooltip message when "Enter" is pressed with keycode', () => {
    component.find('.tooltip-trigger').simulate('keyPress', { keyCode: 13, which: 13 });
    expect(component.find('div.tooltip-message').text()).toBe('I am a tooltip');
  });

  test('it should show the tooltip message when "Enter" is pressed', () => {
    component.find('.tooltip-trigger').simulate('keyPress', { keyCode: 13, which: 13 });
    expect(component.find('div.tooltip-message').text()).toBe('I am a tooltip');
  });

  test('it should not show the tooltip message when a non enter key is pressed', () => {
    component.find('.tooltip-trigger').simulate('keyPress', { keyCode: 14, which: 14 });
    expect(component.find('div.tooltip-message')).not.toIncludeText('I am a tooltip');
  });

  test('it should not show the tooltip message when the tooltip close button "Enter" is pressed with keycode', () => {
    component.find('.tooltip-trigger').simulate('keyPress', { keyCode: 13, which: 13 });
    component.find('.tooltip-close').simulate('keyPress', { keyCode: 13, which: 13 });
    expect(component.find('div.tooltip-message')).not.toIncludeText('I am a tooltip');
  });
});
