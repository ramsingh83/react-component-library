

const _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.default = void 0;

const _react = _interopRequireDefault(require('react'));

const _propTypes = _interopRequireDefault(require('prop-types'));

const Checkbox = function Checkbox(_ref) {
  const label = _ref.label;


  const id = _ref.id;


  const checked = _ref.checked;


  const onHandleChange = _ref.onHandleChange;


  const disabled = _ref.disabled;


  const value = _ref.value;


  const itemsRef = _ref.itemsRef;


  const invalid = _ref.invalid;


  const describedBy = _ref.describedBy;
  return /* #__PURE__ */_react.default.createElement('div', {
    className: 'form-item js-form-type-checkbox form-type-checkbox',
    ref: itemsRef
  }, /* #__PURE__ */_react.default.createElement('input', {
    type: 'checkbox',
    id,
    'aria-invalid': !!invalid,
    'aria-describedby': describedBy,
    className: 'form-checkbox '.concat(invalid ? 'error' : ''),
    checked,
    onChange: onHandleChange,
    disabled,
    value
  }), /* #__PURE__ */_react.default.createElement('label', {
    className: 'option '.concat(disabled ? 'disabled' : ''),
    htmlFor: id
  }, label));
};

Checkbox.propTypes = {
  label: _propTypes.default.string.isRequired,
  id: _propTypes.default.string.isRequired,
  checked: _propTypes.default.bool,
  disabled: _propTypes.default.bool,
  onHandleChange: _propTypes.default.func.isRequired,
  value: _propTypes.default.string,
  itemsRef: _propTypes.default.shape({}),
  invalid: _propTypes.default.bool,
  describedBy: _propTypes.default.string
};
const _default = Checkbox;
exports.default = _default;
