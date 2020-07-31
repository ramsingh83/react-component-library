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

var RadioButtonGroup = function RadioButtonGroup(props) {
  var config = props.config,
      setRadioButtonValue = props.setRadioButtonValue,
      initialValidation = props.initialValidation,
      defaultValue = props.defaultValue,
      name = props.name,
      invalid = props.invalid;

  var _useState = (0, _react.useState)(true),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      firstRender = _useState2[0],
      setfirstRender = _useState2[1];

  var _useState3 = (0, _react.useState)(defaultValue || ''),
      _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
      value = _useState4[0],
      setValue = _useState4[1];

  var _useState5 = (0, _react.useState)(''),
      _useState6 = (0, _slicedToArray2.default)(_useState5, 2),
      error = _useState6[0],
      setError = _useState6[1];

  var validate = function validate() {
    setError(!value ? config.emptyError : '');
  };

  (0, _react.useLayoutEffect)(function () {
    setRadioButtonValue(value);
  }, [value]);
  (0, _react.useLayoutEffect)(function () {
    if (!firstRender) {
      validate();
    } else {
      setfirstRender(false);
    }
  }, [initialValidation]);

  var handleOptionChange = function handleOptionChange(e) {
    setValue(e.target.value);
    setError('');
  };

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, config.fields.map(function (field) {
    return /*#__PURE__*/_react.default.createElement("div", {
      className: "form-item js-form-type-radio form-type-radio",
      key: field.id
    }, /*#__PURE__*/_react.default.createElement("input", {
      type: "radio",
      id: field.id,
      className: "form-checkbox",
      value: field.value,
      checked: value === field.value,
      disabled: field.disabled || undefined,
      name: name,
      onChange: handleOptionChange,
      "aria-invalid": invalid
    }), /*#__PURE__*/_react.default.createElement("label", {
      className: "option ".concat(error ? 'invalid' : ''),
      htmlFor: field.id
    }, field.label));
  }), /*#__PURE__*/_react.default.createElement("div", {
    id: "".concat(name, "-error"),
    className: "error-info"
  }, error));
};

RadioButtonGroup.propTypes = {
  name: _propTypes.default.string.isRequired,
  setRadioButtonValue: _propTypes.default.func.isRequired,
  invalid: _propTypes.default.bool,
  config: _propTypes.default.shape({}).isRequired,
  defaultValue: _propTypes.default.string,
  initialValidation: _propTypes.default.bool.isRequired
};
var _default = RadioButtonGroup;
exports.default = _default;