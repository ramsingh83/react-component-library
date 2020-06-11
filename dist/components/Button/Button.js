"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var Button = function Button(props) {
  var id = props.id,
      disabled = props.disabled,
      handleClicked = props.handleClicked,
      children = props.children,
      styles = props.styles;
  var classes = ['button'];

  if (styles) {
    classes.push(styles);
  }

  return /*#__PURE__*/_react.default.createElement("button", {
    id: id,
    type: "button",
    className: classes.join(' '),
    disabled: disabled,
    onClick: handleClicked
  }, children);
};

Button.propTypes = {
  id: _propTypes.default.string,
  disabled: _propTypes.default.bool,
  handleClicked: _propTypes.default.func.isRequired,
  styles: _propTypes.default.string
};
var _default = Button;
exports.default = _default;