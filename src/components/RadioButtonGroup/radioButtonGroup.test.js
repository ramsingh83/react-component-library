import React from 'react';
import { shallow, mount } from 'enzyme';
import RadioButtonGroup from './RadioButtonGroup';
import Config from '../../config.json';

const component = shallow(
  <RadioButtonGroup
    config={Config.radioButton}
    name="radio-button-group"
    setRadioButtonValue={() => { }}
    initialValidation={false} />
);

describe('RadioButtonGroup component', () => {
  it('Should render the RadioButtonGroup Component', () => {
    expect(component.exists()).toEqual(true);
  });

  it('Should render component with given number of fields', () => {
    const radioButtonInputs = component.find('input');
    expect(radioButtonInputs).toHaveLength(Config.radioButton.fields.length);
  });

  it('Should render component with the correct labels', () => {
    const radioButtonLabels = component.find('label');

    expect(radioButtonLabels.get(0).props.children).toEqual(Config.radioButton.fields[0].label);
    expect(radioButtonLabels.get(1).props.children).toEqual(Config.radioButton.fields[1].label);
    expect(radioButtonLabels.get(2).props.children).toEqual(Config.radioButton.fields[2].label);
  });

  it('Selecting a radio button triggers setRadioButtonValue callback', () => {
    const setRadioButtonValueMock = jest.fn();

    const wrapper = mount(
      <RadioButtonGroup config={Config.radioButton} name="radio-button-group" setRadioButtonValue={setRadioButtonValueMock} initialValidation={false} />
    );

    const radioButtonLabels = wrapper.find('input');

    radioButtonLabels.at(0).simulate('change', {
      target: {
        value: Config.radioButton.fields[0].value
      }
    });

    expect(setRadioButtonValueMock).toHaveBeenCalledTimes(2);
    expect(setRadioButtonValueMock).toHaveBeenCalledWith(Config.radioButton.fields[0].value);
  });

  it('Initial render does not cause validation', () => {
    const wrapper = mount(
      <RadioButtonGroup config={Config.radioButton} name="radio-button-group" setRadioButtonValue={jest.fn()} initialValidation={false} />
    );

    const validationLabel = wrapper.find('.error-info');

    expect(validationLabel.text()).toEqual('');
  });

  it('Validation displays message if no radio button is selected', () => {
    const wrapper = mount(
      <RadioButtonGroup config={Config.radioButton} name="radio-button-group" setRadioButtonValue={jest.fn()} initialValidation={false} />
    );

    wrapper.setProps({ initialValidation: true });

    const validationLabel = wrapper.find('.error-info');

    expect(validationLabel.text()).toEqual(Config.radioButton.emptyError);
  });

  it('Selecting a radio button clears validation message', () => {
    const wrapper = mount(
      <RadioButtonGroup config={Config.radioButton} name="radio-button-group" setRadioButtonValue={jest.fn()} initialValidation={false} />
    );

    wrapper.setProps({ initialValidation: true });

    let validationLabel = wrapper.find('.error-info');

    expect(validationLabel.text()).toEqual(Config.radioButton.emptyError);

    const radioButtonLabels = wrapper.find('input');

    radioButtonLabels.at(0).simulate('change', {
      target: {
        value: Config.radioButton.fields[0].value
      }
    });

    validationLabel = wrapper.find('.error-info');

    expect(validationLabel.text()).toEqual('');
  });

  it('Validation clears message if a radio button has been selected', () => {
    const wrapper = mount(
      <RadioButtonGroup config={Config.radioButton} name="radio-button-group" setRadioButtonValue={jest.fn()} initialValidation={false} />
    );

    wrapper.setProps({ initialValidation: true });

    let validationLabel = wrapper.find('.error-info');

    expect(validationLabel.text()).toEqual(Config.radioButton.emptyError);

    const radioButtonLabels = wrapper.find('input');

    radioButtonLabels.at(0).simulate('change', {
      target: {
        value: Config.radioButton.fields[0].value
      }
    });

    wrapper.setProps({ initialValidation: false });

    validationLabel = wrapper.find('.error-info');

    expect(validationLabel.text()).toEqual('');
  });
});
