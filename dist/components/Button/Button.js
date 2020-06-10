

const _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.default = void 0;

const _react = _interopRequireDefault(require('react'));

const _propTypes = _interopRequireDefault(require('prop-types'));

const Button = function Button(props) {
  const id = props.id;


  const disabled = props.disabled;


  const handleClicked = props.handleClicked;


  const children = props.children;


  const styles = props.styles;
  const classes = ['button'];

  if (styles) {
    classes.push(styles);
  }

  return /* #__PURE__ */_react.default.createElement('button', {
    id,
    type: 'button',
    className: classes.join(' '),
    disabled,
    onClick: handleClicked
  }, children);
};

Button.propTypes = {
  id: _propTypes.default.string,
  disabled: _propTypes.default.bool,
  handleClicked: _propTypes.default.func.isRequired,
  styles: _propTypes.default.string
};
const _default = Button;
exports.default = _default;
