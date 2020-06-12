"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var addressList = function addressList(props) {
  var results = props.results,
      getDetails = props.getDetails,
      handleKeyDown = props.handleKeyDown;
  return /*#__PURE__*/_react.default.createElement("ul", {
    className: "address-list form-item form-item-autocomplete ui-widget ui-autocomplete",
    id: "address-list"
  }, results && results.length > 0 ? results.map(function (result) {
    if (result.Text || result.Description) {
      return /*#__PURE__*/_react.default.createElement("li", {
        key: result.Id,
        className: "address-item ui-menu-item"
      }, /*#__PURE__*/_react.default.createElement("div", {
        tabIndex: "0",
        role: "button",
        className: "ui-menu-item-wrapper",
        onClick: function onClick() {
          return getDetails(result);
        },
        onKeyDown: function onKeyDown(e) {
          return handleKeyDown(result, e);
        }
      }, /*#__PURE__*/_react.default.createElement("span", {
        className: "pca-text"
      }, result.Text || ''), /*#__PURE__*/_react.default.createElement("span", {
        className: "pca-description"
      }, " ".concat(result.Description) || '')));
    }

    return null;
  }) : null);
};

addressList.propTypes = {
  results: _propTypes.default.arrayOf(_propTypes.default.shape({})),
  getDetails: _propTypes.default.func,
  handleKeyDown: _propTypes.default.func
};
var _default = addressList;
exports.default = _default;