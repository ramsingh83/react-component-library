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

var _lodash = require("lodash");

var _Icon = _interopRequireDefault(require("../Icon/Icon"));

/**
 * A reusable tooltip to render on mouse hover and destroy on mouse out.
 * This accept tooltip position(top, bottom,right,left) as props to render accordingly.
 * Element that need a tooltip on mouse hover need to be wrapped inside this component
 * e. g. <Tooltip> hover me </Tooltip>.
 */
var Tooltip = function Tooltip(props) {
  var _useState = (0, _react.useState)(false),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      displayTooltip = _useState2[0],
      setDisplaytooltip = _useState2[1];

  var tooltipRef = (0, _react.useRef)();
  var position = props.position,
      message = props.message;
  var keyboardConstants = {
    enter: 13 // The 13 value is equivalent to the "Enter" or the "Return" key code

  };
  var tooltipMessageId = (0, _lodash.uniqueId)('toolTip-');

  var handleToggleTooltip = function handleToggleTooltip(e) {
    if (e.which !== keyboardConstants.enter || e.keyCode !== keyboardConstants.enter) {
      e.preventDefault();
    }

    setDisplaytooltip(!displayTooltip);
    tooltipRef.current.focus();
  };

  var handleKeyPressToggle = function handleKeyPressToggle(e) {
    e.preventDefault();

    if (e.which === keyboardConstants.enter || e.keyCode === keyboardConstants.enter) {
      handleToggleTooltip(e);
    }
  };

  return /*#__PURE__*/_react.default.createElement("span", {
    className: "tooltip"
  }, /*#__PURE__*/_react.default.createElement("span", {
    role: "button",
    tabIndex: 0,
    className: "tooltip-trigger",
    "aria-label": "help",
    "aria-describedby": tooltipMessageId,
    "aria-live": "assertive",
    ref: tooltipRef,
    onClick: handleToggleTooltip,
    onKeyPress: handleKeyPressToggle
  }, /*#__PURE__*/_react.default.createElement(_Icon.default, {
    name: "question",
    id: "help-tip"
  })), displayTooltip && /*#__PURE__*/_react.default.createElement("div", {
    className: "tooltip-bubble tooltip-".concat(position)
  }, /*#__PURE__*/_react.default.createElement("div", {
    id: tooltipMessageId,
    className: "tooltip-message",
    "aria-live": "assertive"
  }, message), /*#__PURE__*/_react.default.createElement("span", {
    role: "button",
    tabIndex: 0,
    className: "tooltip-close",
    "aria-label": "Close tooltip",
    onClick: handleToggleTooltip,
    onKeyPress: handleKeyPressToggle
  }, /*#__PURE__*/_react.default.createElement(_Icon.default, {
    name: "cross",
    id: "close"
  }))));
};

Tooltip.propTypes = {
  message: _propTypes.default.string.isRequired,
  position: _propTypes.default.string.isRequired
};
var _default = Tooltip;
exports.default = _default;