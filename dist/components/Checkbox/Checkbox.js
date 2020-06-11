"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var Checkbox = function Checkbox(_ref) {
  var label = _ref.label,
      id = _ref.id,
      checked = _ref.checked,
      onHandleChange = _ref.onHandleChange,
      disabled = _ref.disabled,
      value = _ref.value,
      itemsRef = _ref.itemsRef,
      invalid = _ref.invalid,
      describedBy = _ref.describedBy;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "form-item js-form-type-checkbox form-type-checkbox",
    ref: itemsRef
  }, /*#__PURE__*/_react.default.createElement("input", {
    type: "checkbox",
    id: id,
    "aria-invalid": !!invalid,
    "aria-describedby": describedBy,
    className: "form-checkbox ".concat(invalid ? 'error' : ''),
    checked: checked,
    onChange: onHandleChange,
    disabled: disabled,
    value: value
  }), /*#__PURE__*/_react.default.createElement("label", {
    className: "option ".concat(disabled ? 'disabled' : ''),
    htmlFor: id
  }, label));
};

Checkbox.propTypes = {
  label: _propTypes.default.string.isRequired,
  id: _propTypes.default.string.isRequired,
  checked: _propTypes.default.bool,
  disabled: _propTypes.default.bool,
  onHandleChange: _propTypes.default.func.isRequired,
  value: _propTypes.default.string,
  itemsRef: _propTypes.default.shape({}),
  invalid: _propTypes.default.bool,
  describedBy: _propTypes.default.string
};
var _default = Checkbox;
exports.default = _default;