

const _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.default = void 0;

const _react = _interopRequireDefault(require('react'));

const _propTypes = _interopRequireDefault(require('prop-types'));

const Icon = function Icon(_ref) {
  const name = _ref.name;


  const id = _ref.id;


  const title = _ref.title;


  const _ref$extraClass = _ref.extraClass;


  const extraClass = _ref$extraClass === void 0 ? '' : _ref$extraClass;


  const _ref$ariaHidden = _ref.ariaHidden;


  const ariaHidden = _ref$ariaHidden === void 0 ? 'true' : _ref$ariaHidden;


  const _ref$focusable = _ref.focusable;


  const focusable = _ref$focusable === void 0 ? 'false' : _ref$focusable;
  const iconClass = 'icon '.concat(extraClass, ' icon--').concat(name);
  return /* #__PURE__ */_react.default.createElement('span', {
    className: 'icon__wrapper'
  }, /* #__PURE__ */_react.default.createElement('svg', {
    className: iconClass,
    'aria-hidden': title ? null : ariaHidden,
    focusable,
    role: 'img',
    'aria-labelledby': title ? id : null
  }, title ? /* #__PURE__ */_react.default.createElement('title', {
    id
  }, title) : null, /* #__PURE__ */_react.default.createElement('use', {
    xmlns: 'http://www.w3.org/2000/svg',
    xmlnsXlink: 'http://www.w3.org/1999/xlink',
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
const _default = Icon;
exports.default = _default;
