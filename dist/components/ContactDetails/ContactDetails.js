

const _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard');

const _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.default = void 0;

const _defineProperty2 = _interopRequireDefault(require('@babel/runtime/helpers/defineProperty'));

const _slicedToArray2 = _interopRequireDefault(require('@babel/runtime/helpers/slicedToArray'));

const _react = _interopRequireWildcard(require('react'));

const _propTypes = _interopRequireDefault(require('prop-types'));

function ownKeys(object, enumerableOnly) { const keys = Object.keys(object); if (Object.getOwnPropertySymbols) { let symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(sym => Object.getOwnPropertyDescriptor(object, sym).enumerable); keys.push(...symbols); } return keys; }

function _objectSpread(target) { for (let i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach((key) => { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach((key) => { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

const ContactDetails = function ContactDetails(_ref) {
  const title = _ref.title;


  const email = _ref.email;


  const phone = _ref.phone;


  const fields = _ref.fields;


  const autoComplete = _ref.autoComplete;


  const validateContact = _ref.validateContact;


  const setValues = _ref.setValues;

  const _useState = (0, _react.useState)({
    email,
    confirmEmail: email,
    phone,
    emailError: '',
    confirmEmailError: '',
    phoneError: ''
  });


  const _useState2 = (0, _slicedToArray2.default)(_useState, 2);


  const contacts = _useState2[0];


  const setContacts = _useState2[1];

  (0, _react.useLayoutEffect)(() => {
    setValues(contacts);
  }, [contacts]);

  const _useState3 = (0, _react.useState)(true);


  const _useState4 = (0, _slicedToArray2.default)(_useState3, 2);


  const firstRender = _useState4[0];


  const setFirstRender = _useState4[1];

  const validate = function validate() {
    const values = _objectSpread({}, contacts);

    fields.forEach((field) => {
      const pattern = new RegExp(field.pattern);
      const value = values[field.key];

      if (!value && field.required) {
        values[''.concat(field.key, 'Error')] = field.emptyError;
      } else if (value && pattern && !pattern.test(value)) {
        values[''.concat(field.key, 'Error')] = field.invalidError;
      } else {
        contacts[''.concat(field.key, 'Error')] = '';
      }
    });
    setContacts(values);
  };

  (0, _react.useLayoutEffect)(() => {
    setFirstRender(false);

    if (!firstRender) {
      validate();
    }
  }, [validateContact]);

  const setError = function setError(key) {
    return contacts[''.concat(key, 'Error')];
  };

  const handleOnInputChanged = function handleOnInputChanged(event) {
    event.preventDefault();
    const _event$target = event.target;


    const name = _event$target.name;


    const value = _event$target.value;
    const inputDetails = fields.find(input => input.key === name);

    if (!value) {
      if (inputDetails.required) {
        contacts[''.concat(name, 'Error')] = inputDetails.emptyError;
      } else {
        contacts[''.concat(name, 'Error')] = '';
      }
    } else {
      contacts[''.concat(name, 'Error')] = '';
    }

    setContacts(_objectSpread(_objectSpread({}, contacts), {}, (0, _defineProperty2.default)({}, name, value)));
  };

  const handleFocusOut = function handleFocusOut(event) {
    event.preventDefault();
    const _event$target2 = event.target;


    const name = _event$target2.name;


    const value = _event$target2.value;
    const inputs = fields.find(input => input.key === name);
    const pattern = new RegExp(inputs.pattern);

    if (value) {
      if (pattern && !pattern.test(value)) {
        contacts[''.concat(name, 'Error')] = inputs.invalidError;
      } else {
        contacts[''.concat(name, 'Error')] = '';
      }
    } else if (inputs.required) {
      contacts[''.concat(name, 'Error')] = inputs.emptyError;
    } else {
      contacts[''.concat(name, 'Error')] = '';
    }

    setContacts(_objectSpread(_objectSpread({}, contacts), {}, (0, _defineProperty2.default)({}, name, value)));
  };

  return /* #__PURE__ */_react.default.createElement('fieldset', null, /* #__PURE__ */_react.default.createElement('legend', null, title), /* #__PURE__ */_react.default.createElement('div', null, fields.map(field => _react.default.createElement(_react.default.Fragment, {
    key: field.key
  }, /* #__PURE__ */_react.default.createElement('div', {
    className: 'form-item'
  }, /* #__PURE__ */_react.default.createElement('label', {
    htmlFor: field.key,
    className: 'input-label'
  }, field.label, field.required ? /* #__PURE__ */_react.default.createElement('span', {
    className: 'mandatory'
  }, '*') : '', /* #__PURE__ */_react.default.createElement('input', {
    name: field.key,
    type: 'text',
    className: 'form-input '.concat(setError(field.key) ? 'invalid' : ''),
    'aria-describedby': ''.concat(field.key, '-error'),
    'aria-label': field.label,
    placeholder: field.placeholder,
    autoComplete: autoComplete || 'off',
    onChange: handleOnInputChanged,
    onBlur: handleFocusOut,
    value: contacts[field.key] || '',
    maxLength: field.maxLength,
    minLength: field.minLength,
    'aria-required': 'true',
    'aria-invalid': !!setError(field.key)
  })), /* #__PURE__ */_react.default.createElement('div', {
    id: ''.concat(field.key, '-error'),
    className: 'error-ifo'
  }, setError(field.key)))))));
};

ContactDetails.propTypes = {
  title: _propTypes.default.string,
  email: _propTypes.default.string,
  phone: _propTypes.default.string,
  autoComplete: _propTypes.default.number,
  fields: _propTypes.default.shape({}),
  validateContact: _propTypes.default.bool,
  setValues: _propTypes.default.func
};
const _default = ContactDetails;
exports.default = _default;
