

const _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.default = void 0;

const _react = _interopRequireDefault(require('react'));

const _propTypes = _interopRequireDefault(require('prop-types'));

const RadioButton = function RadioButton(props) {
  const id = props.id;


  const value = props.value;


  const checked = props.checked;


  const handleOptionChange = props.handleOptionChange;


  const name = props.name;


  const invalid = props.invalid;


  const children = props.children;


  const disabled = props.disabled;
  return /* #__PURE__ */_react.default.createElement('div', {
    className: 'form-item js-form-type-radio form-type-radio'
  }, /* #__PURE__ */_react.default.createElement('input', {
    type: 'radio',
    id,
    className: 'form-checkbox',
    value,
    checked,
    disabled: disabled || undefined,
    name,
    onChange: handleOptionChange,
    'aria-invalid': !!invalid
  }), /* #__PURE__ */_react.default.createElement('label', {
    className: 'option '.concat(invalid),
    htmlFor: id
  }, children));
};

RadioButton.propTypes = {
  id: _propTypes.default.string.isRequired,
  value: _propTypes.default.string,
  checked: _propTypes.default.bool,
  name: _propTypes.default.string,
  handleOptionChange: _propTypes.default.func,
  invalid: _propTypes.default.string,
  disabled: _propTypes.default.bool
};
const _default = RadioButton;
exports.default = _default;
