import React, { useState } from 'react';
import {
  Button,
  Checkbox,
  ContactDetails,
  Dropdown,
  Input,
  Modal,
  PostcodeFinder,
  RadioButtonGroup,
  RadioButton,
  Spinner,
  SectionWrap
} from '../lib';
import Config from '../config.json';

const items = [
  { id: '0', name: '--Select--' },
  { id: '1', name: 'ContactDetails' },
  { id: '2', name: 'PostcodeFinder' },
  { id: '3', name: 'Calendar' }
];

const App = () => {
  const [validateForm, setValidateForm] = useState(false);
  const [modelOpen, setModelOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    numeric: 0,
    currencyValue: 0,
    address: '',
    postcode: '',
    email: '',
    phone: '',
    language: '',
    radioButtonValue: '',
    error: {
      nameError: '',
      numericError: '',
      addressError: '',
      emailError: '',
      phoneError: '',
      currencyValueError: ''
    }
  });

  const handleContacts = (contact) => {
    const newData = { ...formData };
    newData.email = contact.email;
    newData.phone = contact.phone;
    newData.error.emailError = contact.emailError;
    newData.error.phoneError = contact.phoneError;
    setFormData(newData);
  };

  const handleName = (value, error) => {
    const newData = { ...formData };
    newData.name = value;
    newData.error.nameError = error;
    setFormData(newData);
  };

  const handleNumeric = (value, error) => {
    const newData = { ...formData };
    newData.numeric = value;
    newData.error.numericError = error;
    setFormData(newData);
  };

  const handleCurrencyValue = (value, error) => {
    const newData = { ...formData };
    newData.currencyValue = value;
    newData.error.currencyValueError = error;
    setFormData(newData);
  };

  const handleAddress = (address, error) => {
    const newData = { ...formData };
    newData.address = address;
    newData.error.addressError = error;
    setFormData(newData);
  };

  const handleCheckbox = (checked, value) => {
    const newData = { ...formData };
    if (checked) newData.language = value;
    setFormData(newData);
  };

  const handleRadioButton = (value) => {
    const newData = { ...formData };
    newData.radioButtonValue = value;
    setFormData(newData);
  };

  return (
    <div className="reactapps app">
      {modelOpen && (
        <Modal
          closed={() => setModelOpen(false)}
          dialogTitle="dialogTitle"
          dialogDescription="dialogLinkDescription">
          <h1 id="dialogTitle">Blah blah blah h1</h1>
          <h2>Blah blah blah h2</h2>
          <p id="dialogLinkDescription">Some exciting paragraph</p>
          <img src="https://www.royalmail.com/sites/default/files/fee-to-pay-card---390x550.png" alt="" />
        </Modal>
      )}
      <SectionWrap extraClasses="head">
        <h1>Component Library</h1>
      </SectionWrap>
      <SectionWrap extraClasses="pattern">
        <h2>Input</h2>
        <Input
          config={Config.input}
          inputId="input-id"
          inputValue={formData.name}
          setInputValue={handleName}
          validateInput={validateForm} />
        <h2>Numeric Input</h2>
        <Input
          config={Config.numberInput}
          inputId="numeric-input-id"
          inputValue={formData.numeric}
          setInputValue={handleNumeric}
          validateInput={validateForm} />
        <h2>Currency Input</h2>
        <Input
          config={Config.currencyInput}
          inputId="currency-input-id"
          inputValue={formData.currencyValue}
          setInputValue={handleCurrencyValue}
          validateInput={validateForm}>
          <span className="amount-id-currency">{Config.currencySymbol}</span>
        </Input>
        <h2>Address Finder</h2>
        <PostcodeFinder
          label="Address"
          placeholder="start typing your address"
          setSearchResult={handleAddress}
          config={Config.loqate}
          validateInput={validateForm}
          required />
        <div className="address-desc">
          {
            formData.address
            && Object.values(formData.address).filter(Boolean).map((val, index) => {
              const key = `${index}-${val}`;
              return (
                <span className="address-line" key={key}>{val}</span>
              );
            })
          }
        </div>

        <h2> Contact Details </h2>
        <ContactDetails
          title=""
          fields={Config.contacts.fields}
          email=""
          phone=""
          validateInput={validateForm}
          setValues={handleContacts} />

        <h2>Dropdown</h2>
        <Dropdown
          items={items}
          label="Dropdown label"
          handleChange={() => {}}
          handleBlur={() => {}}
          required />

        <h2>RadioButtonGroup</h2>
        <RadioButtonGroup
          config={Config.radioButton}
          name="radio-button-group"
          defaultValue="radio2"
          setRadioButtonValue={value => handleRadioButton(value)}
          initialValidation={validateForm} />

        <h2>RadioButton</h2>
        <RadioButton name="YES" id="yes-id" value="YES">Yes</RadioButton>
        <RadioButton name="NO" id="no-id" value="NO">No</RadioButton>

        <h2>Checkbox:</h2>
        <Checkbox
          label="Language"
          value="en"
          id="check-id"
          setInputValue={handleCheckbox} />
        <h2>Button:</h2>
        <Button
          styles="primary"
          handleClicked={() => setValidateForm(!validateForm)}>
          Submit
        </Button>
        <h2>Modal:</h2>
        <Button
          styles="primary"
          handleClicked={() => setModelOpen(true)}>
          Open Modal
        </Button>
      </SectionWrap>
      <SectionWrap extraClasses="confirm">
        <h2>Spinner</h2>
        <Spinner />
      </SectionWrap>
    </div>
  );
};

export default App;
