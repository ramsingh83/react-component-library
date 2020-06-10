

const _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.default = void 0;

const _react = _interopRequireDefault(require('react'));

const _propTypes = _interopRequireDefault(require('prop-types'));

const Dropdown = function Dropdown(_ref) {
  const handleChange = _ref.handleChange;


  const handleBlur = _ref.handleBlur;


  const elementId = _ref.elementId;


  const items = _ref.items;


  const label = _ref.label;


  const disabled = _ref.disabled;


  const selectedValue = _ref.selectedValue;


  const children = _ref.children;


  const invalid = _ref.invalid;


  const dropDownRef = _ref.dropDownRef;


  const describedBy = _ref.describedBy;


  const required = _ref.required;
  return /* #__PURE__ */_react.default.createElement('div', {
    className: 'form-item-select js-form-item form-item js-form-type-select form-type-select js-form-item-select'
  }, /* #__PURE__ */_react.default.createElement('label', {
    className: 'input-label',
    htmlFor: elementId
  }, label, required ? /* #__PURE__ */_react.default.createElement('span', {
    style: {
      color: 'red'
    }
  }, '*') : '', children), /* #__PURE__ */_react.default.createElement('select', {
    id: elementId,
    className: invalid ? 'error' : '',
    'aria-invalid': !!invalid,
    onBlur: handleBlur,
    onChange: handleChange,
    'aria-label': label,
    ref: dropDownRef || undefined,
    'aria-describedby': describedBy,
    'aria-live': 'assertive',
    disabled,
    value: selectedValue
  }, items.map((_ref2) => {
    const id = _ref2.id;


    const name = _ref2.name;
    return /* #__PURE__ */_react.default.createElement('option', {
      key: id,
      value: id
    }, name);
  })));
};

Dropdown.propTypes = {
  handleBlur: _propTypes.default.func.isRequired,
  handleChange: _propTypes.default.func.isRequired,
  items: _propTypes.default.arrayOf(_propTypes.default.shape({})),
  label: _propTypes.default.string,
  elementId: _propTypes.default.string,
  disabled: _propTypes.default.bool,
  selectedValue: _propTypes.default.string,
  invalid: _propTypes.default.bool,
  dropDownRef: _propTypes.default.shape({}),
  describedBy: _propTypes.default.string,
  required: _propTypes.default.bool
};
const _default = Dropdown;
exports.default = _default;
