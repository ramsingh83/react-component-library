

const _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.default = void 0;

const _react = _interopRequireDefault(require('react'));

require('./spinner.css');

const Spinner = function Spinner() {
  return /* #__PURE__ */_react.default.createElement('div', {
    className: 'spinner-wrap'
  }, /* #__PURE__ */_react.default.createElement('div', {
    className: 'spinner'
  }));
};

const _default = Spinner;
exports.default = _default;
