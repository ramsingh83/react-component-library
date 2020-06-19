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
  var config = props.config,
      inputValue = props.inputValue,
      inputId = props.inputId,
      children = props.children,
      inputRef = props.inputRef,
      setInputValue = props.setInputValue,
      validateInput = props.validateInput;

  var _useState = (0, _react.useState)(inputValue || ''),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      value = _useState2[0],
      setValue = _useState2[1];

  var _useState3 = (0, _react.useState)(true),
      _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
      firstRender = _useState4[0],
      setFirstRender = _useState4[1];

  var _useState5 = (0, _react.useState)(''),
      _useState6 = (0, _slicedToArray2.default)(_useState5, 2),
      error = _useState6[0],
      setError = _useState6[1];

  (0, _react.useLayoutEffect)(function () {
    setInputValue(value, error);
  }, [value, error]);

  var validate = function validate() {
    var inputPattern = new RegExp(config.pattern);
    var newError = '';

    if (value && inputPattern && !inputPattern.test(value)) {
      newError = config.invalidError;
    } else if (!value && config.required) {
      newError = config.emptyError;
    } else {
      newError = '';
    }

    setError(newError);
  };

  (0, _react.useLayoutEffect)(function () {
    setFirstRender(false);

    if (!firstRender) {
      validate();
    }
  }, [validateInput]);

  var handleOnInputChanged = function handleOnInputChanged(e) {
    e.preventDefault();
    var newError = '';

    if (!e.target.value) {
      newError = config.emptyError;
    } else {
      newError = '';
    }

    setValue(e.target.value);
    setError(newError);
  };

  var handleFocusOut = function handleFocusOut(e) {
    e.preventDefault();
    var inputPattern = new RegExp(config.pattern);
    var newError = '';

    if (value && inputPattern && !inputPattern.test(value)) {
      newError = config.invalidError;
    } else if (!value && config.required) {
      newError = config.emptyError;
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
  }, config.label, config.required ? /*#__PURE__*/_react.default.createElement("span", {
    className: "mandatory"
  }, "*") : '', children, /*#__PURE__*/_react.default.createElement("input", {
    id: inputId,
    type: "text",
    tabIndex: "0",
    className: error ? 'invalid' : '',
    "aria-describedby": "".concat(inputId, "-error"),
    "aria-label": config.label,
    placeholder: config.placeholder,
    onChange: handleOnInputChanged,
    onBlur: handleFocusOut,
    value: value,
    ref: inputRef,
    maxLength: config.maxLength,
    minLength: config.minLength,
    "aria-required": "true",
    "aria-invalid": !!error
  })), /*#__PURE__*/_react.default.createElement("div", {
    id: "".concat(inputId, "-error"),
    className: "error-info"
  }, error));
};

Input.propTypes = {
  config: _propTypes.default.shape({}),
  inputValue: _propTypes.default.string,
  inputId: _propTypes.default.string.isRequired,
  setInputValue: _propTypes.default.func,
  inputRef: _propTypes.default.shape({}),
  validateInput: _propTypes.default.bool
};
var _default = Input;
exports.default = _default;