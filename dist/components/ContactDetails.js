"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

require("./ContactDetails.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ContactDetails = function ContactDetails(_ref) {
  var label = _ref.label,
      placeholder = _ref.placeholder,
      email = _ref.email,
      handleOnInputChanged = _ref.handleOnInputChanged,
      invalid = _ref.invalid,
      required = _ref.required;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "form-item"
  }, /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: "email-id"
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "input-label ".concat(required ? 'element-required' : '')
  }, label), /*#__PURE__*/_react.default.createElement("input", {
    id: "email-id",
    type: "text",
    className: "form-input ".concat(invalid ? 'invalid' : ''),
    "aria-describedby": "email-error",
    "aria-label": label,
    placeholder: placeholder,
    onChange: handleOnInputChanged,
    value: email,
    maxLength: "128",
    "aria-required": "true",
    "aria-invalid": !!invalid
  })), /*#__PURE__*/_react.default.createElement("div", {
    id: "email-error",
    className: "error-ifo"
  }));
};

var _default = ContactDetails;
exports.default = _default;