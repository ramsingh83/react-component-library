import React, { useState } from 'react';
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

const App = () => {
  const [validateForm, setValidateForm] = useState(false);
  const [formAddress, setFormAddress] = useState('');
  
  const handleContacts = (contacts) => {
    console.log(contacts);
  };  
  
  const setPostcode = () => {};

  const handleAddress = (address) => {
    setFormAddress(address);
  }    
  
  return (
    <div className="reactapps">
      <SectionWrap extraClasses="head">
        <h1>Component Library</h1>
      </SectionWrap>
      <SectionWrap extraClasses="pattern">
        <h2>Input</h2>
          <Input
            label="Name"
            inputId="input-id"
            placeholder=""
            inputValue=""
            setInputValue={() => {}}
            required />

        <h2>Address Finder</h2>
        <PostcodeFinder
          label="Address"
          placeholder="start typing your address"
          setPostcode={setPostcode}
          setSearchResult={handleAddress}
          config={Config.loqate}
          required />
        <div className="address-desc">
          {
            formAddress && Object.values(formAddress).filter(Boolean).map((val, index) => {
              const key = `${index}-${val}`;
              return (
                <span className="address-line" key={key}>{val}</span>
              );
            })
          }
        </div>

        <h2>Checckbox:</h2>
        <Checkbox label="checkbox" id="check-id" onHandleChange={() => {}} />

        <h2> Contact Details </h2>
        <ContactDetails
          title=""
          fields={Config.contacts.fields}
          email=""
          phone=""
          validateContact={validateForm}
          setValues={handleContacts} />
        
        <h2>Dropdown</h2>
        <Dropdown
          items={items}
          label="Dropdown label"
          handleChange={() => {}}
          handleBlur={() => {}}
          required />

        <h2>RadioButton</h2>
        <RadioButton name="YES" id="yes-id" value="YES">YES</RadioButton>
        <RadioButton name="NO" id="no-id" value="NO">No</RadioButton>
        
        <h2>Button:</h2>
        <Button
          styles="primary"
          handleClicked={() => setValidateForm(!validateForm)}>
          Submit
        </Button>
        
        <h2>Spinner</h2>
        <Spinner />
      </SectionWrap>
      <SectionWrap extraClasses="confirm">
        <h2>Tooltip</h2>
        <Tooltip message="I am a tool tip" position="top">click me</Tooltip>
      </SectionWrap>
    </div>
  );
}

export default App;
