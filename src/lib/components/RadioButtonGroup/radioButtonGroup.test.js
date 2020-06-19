import React from 'react';
import { shallow } from 'enzyme';
import RadioButtonGroup from './RadioButtonGroup';
import Config from '../../../examples/config.json';

const component = shallow(
  <RadioButtonGroup
    config={Config.radioButton}
    name="radio-button-group"
    setRadioButtonValue={() => {}}
    initialValidation={false} />
);

describe('RadioButton component', () => {
  it('Should render component with given number of fields', () => {
    expect(component.exists()).toEqual(true);
    const radioButtons = component.find('input');
    expect(radioButtons).toHaveLength(Config.radioButton.fields.length);
  });
});
