"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var Icon = function Icon(_ref) {
  var name = _ref.name,
      id = _ref.id,
      title = _ref.title,
      _ref$extraClass = _ref.extraClass,
      extraClass = _ref$extraClass === void 0 ? '' : _ref$extraClass,
      _ref$ariaHidden = _ref.ariaHidden,
      ariaHidden = _ref$ariaHidden === void 0 ? 'true' : _ref$ariaHidden,
      _ref$focusable = _ref.focusable,
      focusable = _ref$focusable === void 0 ? 'false' : _ref$focusable;
  var iconClass = "icon ".concat(extraClass, " icon--").concat(name);
  return /*#__PURE__*/_react.default.createElement("span", {
    className: "icon__wrapper"
  }, /*#__PURE__*/_react.default.createElement("svg", {
    className: iconClass,
    "aria-hidden": title ? null : ariaHidden,
    focusable: focusable,
    role: "img",
    "aria-labelledby": title ? id : null
  }, title ? /*#__PURE__*/_react.default.createElement("title", {
    id: id
  }, title) : null, /*#__PURE__*/_react.default.createElement("use", {
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    xlinkHref: '#' + name
  })));
};

Icon.propTypes = {
  name: _propTypes.default.string.isRequired,
  id: _propTypes.default.string.isRequired,
  ariaHidden: _propTypes.default.string,
  extraClass: _propTypes.default.string,
  focusable: _propTypes.default.string,
  title: _propTypes.default.string
};
var _default = Icon;
exports.default = _default;