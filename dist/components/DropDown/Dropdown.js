"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var Dropdown = function Dropdown(_ref) {
  var handleChange = _ref.handleChange,
      handleBlur = _ref.handleBlur,
      elementId = _ref.elementId,
      items = _ref.items,
      label = _ref.label,
      disabled = _ref.disabled,
      selectedValue = _ref.selectedValue,
      children = _ref.children,
      invalid = _ref.invalid,
      dropDownRef = _ref.dropDownRef,
      describedBy = _ref.describedBy,
      required = _ref.required;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "form-item-select js-form-item form-item js-form-type-select form-type-select js-form-item-select"
  }, /*#__PURE__*/_react.default.createElement("label", {
    className: "input-label",
    htmlFor: elementId
  }, label, required ? /*#__PURE__*/_react.default.createElement("span", {
    style: {
      color: 'red'
    }
  }, "*") : '', children), /*#__PURE__*/_react.default.createElement("select", {
    id: elementId,
    className: invalid ? 'error' : '',
    "aria-invalid": !!invalid,
    onBlur: handleBlur,
    onChange: handleChange,
    "aria-label": label,
    ref: dropDownRef || undefined,
    "aria-describedby": describedBy,
    "aria-live": "assertive",
    disabled: disabled,
    value: selectedValue
  }, items.map(function (_ref2) {
    var id = _ref2.id,
        name = _ref2.name;
    return /*#__PURE__*/_react.default.createElement("option", {
      key: id,
      value: id
    }, name);
  })));
};

Dropdown.propTypes = {
  handleBlur: _propTypes.default.func.isRequired,
  handleChange: _propTypes.default.func.isRequired,
  items: _propTypes.default.arrayOf(_propTypes.default.shape({})),
  label: _propTypes.default.string,
  elementId: _propTypes.default.string,
  disabled: _propTypes.default.bool,
  selectedValue: _propTypes.default.string,
  invalid: _propTypes.default.bool,
  dropDownRef: _propTypes.default.shape({}),
  describedBy: _propTypes.default.string,
  required: _propTypes.default.bool
};
var _default = Dropdown;
exports.default = _default;