import React from "react";
import {
  Button,
  Checkbox,
  ContactDetails,
  Dropdown,
  Icon,
  Input,
  RadioButton,
  Spinner,
  Tooltip
} from "../lib";

const componentOptions = [
  {key: "0", value: "--Select--"},
  {key: "1", value: "ContactDetails"},
  {key: "2", value: "PostcodeFinder"},
  {key: "3", value: "Calendar"}
];

const App = () => (
  <div style={{ width: 640, margin: "15px auto" }}>
    <h1>Component Library</h1>
    
    <h2>Button:</h2>
    <Button styles="primary">Click me</Button>

    <h2>Checckbox:</h2>
    <Checkbox label="checkbox" />

    <h2> Contact Details </h2>
    <ContactDetails label="Email Address" placeholder="ram.singh@example.com" />

    <h2>Dropdown</h2>
    <Dropdown title="Select app" options={componentOptions} required />

    <h2>Input</h2>
    <Input label="Input Label" required />

    <h2>RadioButton</h2>
    <RadioButton name="YES" value="YES">YES</RadioButton>
    <RadioButton name="NO" value="NO">No</RadioButton>

    <h2>Spinner</h2>
    <Spinner />

    <h2>Tooltip</h2>
    <Tooltip message="I am a tool tip" position="top">click me</Tooltip>

    <h2>Icon</h2>
    <Icon>I am icon</Icon>

    <h2>Modal</h2> 
  </div>
);

export default App;
