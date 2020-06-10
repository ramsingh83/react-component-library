

const _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard');

const _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.default = void 0;

const _slicedToArray2 = _interopRequireDefault(require('@babel/runtime/helpers/slicedToArray'));

const _react = _interopRequireWildcard(require('react'));

const _propTypes = _interopRequireDefault(require('prop-types'));

const Input = function Input(props) {
  const label = props.label;


  const inputValue = props.inputValue;


  const inputId = props.inputId;


  const children = props.children;


  const maxLength = props.maxLength;


  const minLength = props.minLength;


  const pattern = props.pattern;


  const placeholder = props.placeholder;


  const autoComplete = props.autoComplete;


  const inputRef = props.inputRef;


  const setInputValue = props.setInputValue;


  const required = props.required;

  const _useState = (0, _react.useState)(inputValue || '');


  const _useState2 = (0, _slicedToArray2.default)(_useState, 2);


  const value = _useState2[0];


  const setValue = _useState2[1];

  const _useState3 = (0, _react.useState)('');


  const _useState4 = (0, _slicedToArray2.default)(_useState3, 2);


  const error = _useState4[0];


  const setError = _useState4[1];

  (0, _react.useLayoutEffect)(() => {
    setInputValue(value);
  }, [value]);

  const handleOnInputChanged = function handleOnInputChanged(e) {
    e.preventDefault();
    let newError = '';

    if (!e.target.value) {
      newError = 'This field is required';
    } else {
      newError = '';
    }

    setValue(e.target.value);
    setError(newError);
  };

  const handleFocusOut = function handleFocusOut(e) {
    e.preventDefault();
    const inputPattern = new RegExp(pattern);
    let newError = '';

    if (value && inputPattern && !inputPattern.test(value)) {
      newError = 'Please provide valid data';
    } else if (!value && required) {
      newError = 'This field is required';
    } else {
      newError = '';
    }

    setError(newError);
  };

  return /* #__PURE__ */_react.default.createElement('div', {
    className: 'form-item'
  }, /* #__PURE__ */_react.default.createElement('label', {
    className: 'input-label',
    htmlFor: inputId
  }, label, required ? /* #__PURE__ */_react.default.createElement('span', {
    className: 'mandatory'
  }, '*') : '', children, /* #__PURE__ */_react.default.createElement('input', {
    id: inputId,
    type: 'text',
    tabIndex: '0',
    className: error ? 'invalid' : '',
    autoComplete: autoComplete || 'off',
    'aria-describedby': ''.concat(label, '-error'),
    'aria-label': label,
    placeholder,
    onChange: handleOnInputChanged,
    onBlur: handleFocusOut,
    value,
    ref: inputRef,
    maxLength,
    minLength,
    'aria-required': 'true',
    'aria-invalid': !!error
  })), /* #__PURE__ */_react.default.createElement('div', {
    id: ''.concat(label, '-error'),
    className: 'error-ifo'
  }, error));
};

Input.propTypes = {
  label: _propTypes.default.string.isRequired,
  inputValue: _propTypes.default.string,
  inputId: _propTypes.default.string.isRequired,
  maxLength: _propTypes.default.number,
  minLength: _propTypes.default.number,
  pattern: _propTypes.default.string,
  setInputValue: _propTypes.default.func,
  autoComplete: _propTypes.default.string,
  placeholder: _propTypes.default.string,
  inputRef: _propTypes.default.shape({}),
  required: _propTypes.default.bool
};
const _default = Input;
exports.default = _default;
