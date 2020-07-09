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

var Checkbox = function Checkbox(_ref) {
  var label = _ref.label,
      id = _ref.id,
      checked = _ref.checked,
      disabled = _ref.disabled,
      value = _ref.value,
      invalid = _ref.invalid,
      describedBy = _ref.describedBy,
      setInputValue = _ref.setInputValue;

  var _useState = (0, _react.useState)(checked || false),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      isChecked = _useState2[0],
      setIsChecked = _useState2[1];

  (0, _react.useEffect)(function () {
    setInputValue(isChecked, value);
  }, [isChecked]);
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "form-item js-form-type-checkbox form-type-checkbox"
  }, /*#__PURE__*/_react.default.createElement("input", {
    type: "checkbox",
    id: id,
    "aria-invalid": !!invalid,
    "aria-describedby": describedBy,
    className: "form-checkbox ".concat(invalid ? 'invalid' : ''),
    checked: checked,
    onChange: function onChange() {
      return setIsChecked(!isChecked);
    },
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
  setInputValue: _propTypes.default.func.isRequired,
  value: _propTypes.default.string.isRequired,
  invalid: _propTypes.default.bool,
  describedBy: _propTypes.default.string
};
var _default = Checkbox;
exports.default = _default;