import React from 'react';
import {
  Button,
  Checkbox,
  ContactDetails,
  Dropdown,
  Input,
  RadioButton,
  Spinner,
  Tooltip,
  SectionWrap
} from '../lib';

const items = [
  { id: '0', name: '--Select--' },
  { id: '1', name: 'ContactDetails' },
  { id: '2', name: 'PostcodeFinder' },
  { id: '3', name: 'Calendar' }
];

const App = () => (
  <div style={{ width: 640, margin: '15px auto' }}>
    <SectionWrap extraClasses="head">
      <h1>Component Library</h1>
    </SectionWrap>
    <SectionWrap extraClasses="pattern">
      <h2>Button:</h2>
      <Button styles="primary">Click me</Button>

      <h2>Checckbox:</h2>
      <Checkbox label="checkbox" />

      <h2> Contact Details </h2>
      <ContactDetails label="Email Address" placeholder="ram.singh@example.com" required />

      <h2>Dropdown</h2>
      <Dropdown items={items} label="Dropdown label" required />
      <h2>Input</h2>
      <Input label="Input Label" required />

      <h2>RadioButton</h2>
      <RadioButton name="YES" value="YES">YES</RadioButton>
      <RadioButton name="NO" value="NO">No</RadioButton>

      <h2>Spinner</h2>
      <Spinner />
    </SectionWrap>
    <SectionWrap extraClasses="confirm">
      <h2>Tooltip</h2>
      <Tooltip message="I am a tool tip" position="top">click me</Tooltip>
    </SectionWrap>
  </div>
);

export default App;
