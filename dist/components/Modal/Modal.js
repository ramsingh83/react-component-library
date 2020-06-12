"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Icon = _interopRequireDefault(require("../Icon/Icon"));

var Modal = function Modal(props) {
  var id = props.id,
      children = props.children,
      dialogTitle = props.dialogTitle,
      dialogDescription = props.dialogDescription,
      closed = props.closed;
  var closeButton = (0, _react.useRef)(null);
  (0, _react.useEffect)(function () {
    closeButton.current.focus();
  }, []);
  return /*#__PURE__*/_react.default.createElement("div", {
    id: id,
    className: "modal",
    role: "dialog",
    "aria-labelledby": dialogTitle,
    "aria-describedby": dialogDescription
  }, /*#__PURE__*/_react.default.createElement("button", {
    type: "button",
    ref: closeButton,
    "aria-label": "close",
    className: "close-button",
    onClick: function onClick(e) {
      return closed(e);
    },
    onKeyDown: function onKeyDown(e) {
      return closed(e);
    }
  }, /*#__PURE__*/_react.default.createElement(_Icon.default, {
    name: "close",
    id: "close"
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "modal-content"
  }, children));
};

Modal.propTypes = {
  id: _propTypes.default.string,
  dialogTitle: _propTypes.default.string,
  dialogDescription: _propTypes.default.string,
  closed: _propTypes.default.func.isRequired
};
var _default = Modal;
exports.default = _default;