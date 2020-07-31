"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var SectionWrap = function SectionWrap(props) {
  var id = props.id,
      extraClasses = props.extraClasses,
      children = props.children;
  var classes = ['section'];

  if (extraClasses) {
    classes.push(extraClasses);
  }

  return /*#__PURE__*/_react.default.createElement("section", {
    id: id,
    className: classes.join(' ')
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "section-inner"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "section-container"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "section-row"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "section-col"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "section-col-inner"
  }, children))))));
};

SectionWrap.propTypes = {
  id: _propTypes.default.string,
  extraClasses: _propTypes.default.string
};
var _default = SectionWrap;
exports.default = _default;