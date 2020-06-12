"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var Input = function Input(props) {
  var label = props.label,
      inputValue = props.inputValue,
      inputId = props.inputId,
      children = props.children,
      maxLength = props.maxLength,
      minLength = props.minLength,
      pattern = props.pattern,
      placeholder = props.placeholder,
      autoComplete = props.autoComplete,
      inputRef = props.inputRef,
      setInputValue = props.setInputValue,
      required = props.required;

  var _useState = (0, _react.useState)(inputValue || ''),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      value = _useState2[0],
      setValue = _useState2[1];

  var _useState3 = (0, _react.useState)(''),
      _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
      error = _useState4[0],
      setError = _useState4[1];

  (0, _react.useLayoutEffect)(function () {
    setInputValue(value);
  }, [value]);

  var handleOnInputChanged = function handleOnInputChanged(e) {
    e.preventDefault();
    var newError = '';

    if (!e.target.value) {
      newError = 'This field is required';
    } else {
      newError = '';
    }

    setValue(e.target.value);
    setError(newError);
  };

  var handleFocusOut = function handleFocusOut(e) {
    e.preventDefault();
    var inputPattern = new RegExp(pattern);
    var newError = '';

    if (value && inputPattern && !inputPattern.test(value)) {
      newError = 'Please provide valid data';
    } else if (!value && required) {
      newError = 'This field is required';
    } else {
      newError = '';
    }

    setError(newError);
  };

  return /*#__PURE__*/_react.default.createElement("div", {
    className: "form-item"
  }, /*#__PURE__*/_react.default.createElement("label", {
    className: "input-label",
    htmlFor: inputId
  }, label, required ? /*#__PURE__*/_react.default.createElement("span", {
    className: "mandatory"
  }, "*") : '', children, /*#__PURE__*/_react.default.createElement("input", {
    id: inputId,
    type: "text",
    tabIndex: "0",
    className: error ? 'invalid' : '',
    autoComplete: autoComplete || 'off',
    "aria-describedby": "".concat(label, "-error"),
    "aria-label": label,
    placeholder: placeholder,
    onChange: handleOnInputChanged,
    onBlur: handleFocusOut,
    value: value,
    ref: inputRef,
    maxLength: maxLength,
    minLength: minLength,
    "aria-required": "true",
    "aria-invalid": !!error
  })), /*#__PURE__*/_react.default.createElement("div", {
    id: "".concat(label, "-error"),
    className: "error-info"
  }, error));
};

Input.propTypes = {
  label: _propTypes.default.string.isRequired,
  inputValue: _propTypes.default.string,
  inputId: _propTypes.default.string.isRequired,
  maxLength: _propTypes.default.number,
  minLength: _propTypes.default.number,
  pattern: _propTypes.default.string,
  setInputValue: _propTypes.default.func,
  autoComplete: _propTypes.default.string,
  placeholder: _propTypes.default.string,
  inputRef: _propTypes.default.shape({}),
  required: _propTypes.default.bool
};
var _default = Input;
exports.default = _default;