"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

require("./spinner.css");

var Spinner = function Spinner() {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "spinner-wrap"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "spinner"
  }));
};

var _default = Spinner;
exports.default = _default;