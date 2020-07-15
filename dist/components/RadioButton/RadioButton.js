"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var RadioButton = function RadioButton(props) {
  var id = props.id,
      value = props.value,
      checked = props.checked,
      handleOptionChange = props.handleOptionChange,
      name = props.name,
      invalid = props.invalid,
      children = props.children,
      disabled = props.disabled;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "form-item js-form-type-radio form-type-radio"
  }, /*#__PURE__*/_react.default.createElement("input", {
    type: "radio",
    id: id,
    className: "form-checkbox",
    value: value,
    checked: checked,
    disabled: disabled || undefined,
    name: name,
    onChange: handleOptionChange,
    "aria-invalid": invalid
  }), /*#__PURE__*/_react.default.createElement("label", {
    className: "option ".concat(invalid ? 'invalid' : ''),
    htmlFor: id
  }, children));
};

RadioButton.propTypes = {
  id: _propTypes.default.string.isRequired,
  value: _propTypes.default.string,
  checked: _propTypes.default.bool,
  name: _propTypes.default.string,
  handleOptionChange: _propTypes.default.func,
  invalid: _propTypes.default.bool,
  disabled: _propTypes.default.bool
};
var _default = RadioButton;
exports.default = _default;