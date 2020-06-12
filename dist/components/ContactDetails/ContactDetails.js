"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var ContactDetails = function ContactDetails(_ref) {
  var title = _ref.title,
      email = _ref.email,
      phone = _ref.phone,
      fields = _ref.fields,
      autoComplete = _ref.autoComplete,
      validateContact = _ref.validateContact,
      setValues = _ref.setValues;

  var _useState = (0, _react.useState)({
    email: email,
    confirmEmail: email,
    phone: phone,
    emailError: '',
    confirmEmailError: '',
    phoneError: ''
  }),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      contacts = _useState2[0],
      setContacts = _useState2[1];

  (0, _react.useLayoutEffect)(function () {
    setValues(contacts);
  }, [contacts]);

  var _useState3 = (0, _react.useState)(true),
      _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
      firstRender = _useState4[0],
      setFirstRender = _useState4[1];

  var validate = function validate() {
    var values = _objectSpread({}, contacts);

    fields.forEach(function (field) {
      var pattern = new RegExp(field.pattern);
      var value = values[field.key];

      if (!value && field.required) {
        values["".concat(field.key, "Error")] = field.emptyError;
      } else if (value && pattern && !pattern.test(value)) {
        values["".concat(field.key, "Error")] = field.invalidError;
      } else {
        contacts["".concat(field.key, "Error")] = '';
      }
    });
    setContacts(values);
  };

  (0, _react.useLayoutEffect)(function () {
    setFirstRender(false);

    if (!firstRender) {
      validate();
    }
  }, [validateContact]);

  var setError = function setError(key) {
    return contacts["".concat(key, "Error")];
  };

  var handleOnInputChanged = function handleOnInputChanged(event) {
    event.preventDefault();
    var _event$target = event.target,
        name = _event$target.name,
        value = _event$target.value;
    var inputDetails = fields.find(function (input) {
      return input.key === name;
    });

    if (!value) {
      if (inputDetails.required) {
        contacts["".concat(name, "Error")] = inputDetails.emptyError;
      } else {
        contacts["".concat(name, "Error")] = '';
      }
    } else {
      contacts["".concat(name, "Error")] = '';
    }

    setContacts(_objectSpread(_objectSpread({}, contacts), {}, (0, _defineProperty2.default)({}, name, value)));
  };

  var handleFocusOut = function handleFocusOut(event) {
    event.preventDefault();
    var _event$target2 = event.target,
        name = _event$target2.name,
        value = _event$target2.value;
    var inputs = fields.find(function (input) {
      return input.key === name;
    });
    var pattern = new RegExp(inputs.pattern);

    if (value) {
      if (pattern && !pattern.test(value)) {
        contacts["".concat(name, "Error")] = inputs.invalidError;
      } else {
        contacts["".concat(name, "Error")] = '';
      }
    } else if (inputs.required) {
      contacts["".concat(name, "Error")] = inputs.emptyError;
    } else {
      contacts["".concat(name, "Error")] = '';
    }

    setContacts(_objectSpread(_objectSpread({}, contacts), {}, (0, _defineProperty2.default)({}, name, value)));
  };

  return /*#__PURE__*/_react.default.createElement("fieldset", null, /*#__PURE__*/_react.default.createElement("legend", null, title), /*#__PURE__*/_react.default.createElement("div", null, fields.map(function (field) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: field.key
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "form-item"
    }, /*#__PURE__*/_react.default.createElement("label", {
      htmlFor: field.key,
      className: "input-label"
    }, field.label, field.required ? /*#__PURE__*/_react.default.createElement("span", {
      className: "mandatory"
    }, "*") : '', /*#__PURE__*/_react.default.createElement("input", {
      name: field.key,
      type: "text",
      className: "form-input ".concat(setError(field.key) ? 'invalid' : ''),
      "aria-describedby": "".concat(field.key, "-error"),
      "aria-label": field.label,
      placeholder: field.placeholder,
      autoComplete: autoComplete || 'off',
      onChange: handleOnInputChanged,
      onBlur: handleFocusOut,
      value: contacts[field.key] || '',
      maxLength: field.maxLength,
      minLength: field.minLength,
      "aria-required": "true",
      "aria-invalid": !!setError(field.key)
    })), /*#__PURE__*/_react.default.createElement("div", {
      id: "".concat(field.key, "-error"),
      className: "error-info"
    }, setError(field.key))));
  })));
};

ContactDetails.propTypes = {
  title: _propTypes.default.string,
  email: _propTypes.default.string,
  phone: _propTypes.default.string,
  autoComplete: _propTypes.default.number,
  fields: _propTypes.default.arrayOf(_propTypes.default.shape({})),
  validateContact: _propTypes.default.bool,
  setValues: _propTypes.default.func
};
var _default = ContactDetails;
exports.default = _default;