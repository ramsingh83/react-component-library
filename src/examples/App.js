import React from 'react';
import {
  Button,
  Checkbox,
  ContactDetails,
  Dropdown,
  Input,
  PostcodeFinder,
  RadioButton,
  Spinner,
  Tooltip,
  SectionWrap
} from '../lib';
import Config from './config.json';

const items = [
  { id: '0', name: '--Select--' },
  { id: '1', name: 'ContactDetails' },
  { id: '2', name: 'PostcodeFinder' },
  { id: '3', name: 'Calendar' }
];

let address = '';
const setPostcode = () => {};
const setAddress = (add) => {
  address = Object.values(add).join('\n');
  console.log(address);
}

const App = () => (
  <div style={{ width: 640, margin: '15px auto' }}>
    <SectionWrap extraClasses="head">
      <h1>Component Library</h1>
    </SectionWrap>
    <SectionWrap extraClasses="pattern">
      <h2>Button:</h2>
      <Button styles="primary" handleClicked={() => {}}>Click me</Button>

      <h2>Address Finder</h2>
      <PostcodeFinder
        label="Address"
        placeholder="start typing your address"
        setPostcode={setPostcode}
        setSearchResult={setAddress}
        config={Config.loqate}
        required />
      <span>{address}</span>

      <h2>Checckbox:</h2>
      <Checkbox label="checkbox" id="check-id" onHandleChange={() => {}} />

      <h2> Contact Details </h2>
      <ContactDetails label="Email Address" placeholder="ram.singh@example.com" required />

      <h2>Dropdown</h2>
      <Dropdown
        items={items}
        label="Dropdown label"
        handleChange={() => {}}
        handleBlur={() => {}}
        required />

      <h2>Input</h2>
      <Input label="Input Label" inputId="input-id" required />

      <h2>RadioButton</h2>
      <RadioButton name="YES" id="yes-id" value="YES">YES</RadioButton>
      <RadioButton name="NO" id="no-id" value="NO">No</RadioButton>

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
