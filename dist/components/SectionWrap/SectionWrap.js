

const _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.default = void 0;

const _react = _interopRequireDefault(require('react'));

const _propTypes = _interopRequireDefault(require('prop-types'));

const SectionWrap = function SectionWrap(props) {
  const id = props.id;


  const extraClasses = props.extraClasses;


  const children = props.children;
  const classes = ['section'];

  if (extraClasses) {
    classes.push(extraClasses);
  }

  return /* #__PURE__ */_react.default.createElement('section', {
    id,
    className: classes.join(' ')
  }, /* #__PURE__ */_react.default.createElement('div', {
    className: 'section-inner'
  }, /* #__PURE__ */_react.default.createElement('div', {
    className: 'section-container'
  }, /* #__PURE__ */_react.default.createElement('div', {
    className: 'section-row'
  }, /* #__PURE__ */_react.default.createElement('div', {
    className: 'section-col'
  }, /* #__PURE__ */_react.default.createElement('div', {
    className: 'section-col-inner'
  }, children))))));
};

SectionWrap.propTypes = {
  id: _propTypes.default.string,
  extraClasses: _propTypes.default.string
};
const _default = SectionWrap;
exports.default = _default;
