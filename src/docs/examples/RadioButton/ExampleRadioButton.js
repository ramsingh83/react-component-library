import React from 'react';
import {
  RadioButton
} from '../../../components';

const ExampleButton = () => (
  <React.Fragment>
    <RadioButton name="YES" id="yes-id" value="YES">Radio Button 1</RadioButton>
    <RadioButton name="NO" id="no-id" value="NO">Radio Button 2</RadioButton>
  </React.Fragment>
);

export default ExampleButton;
