

const _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard');

const _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.default = void 0;

const _slicedToArray2 = _interopRequireDefault(require('@babel/runtime/helpers/slicedToArray'));

const _react = _interopRequireWildcard(require('react'));

const _propTypes = _interopRequireDefault(require('prop-types'));

const _lodash = require('lodash');

const _Icon = _interopRequireDefault(require('../Icon/Icon'));

/**
 * A reusable tooltip to render on mouse hover and destroy on mouse out.
 * This accept tooltip position(top, bottom,right,left) as props to render accordingly.
 * Element that need a tooltip on mouse hover need to be wrapped inside this component
 * e. g. <Tooltip> hover me </Tooltip>.
 */
const Tooltip = function Tooltip(props) {
  const _useState = (0, _react.useState)(false);


  const _useState2 = (0, _slicedToArray2.default)(_useState, 2);


  const displayTooltip = _useState2[0];


  const setDisplaytooltip = _useState2[1];

  const tooltipRef = (0, _react.useRef)();
  const position = props.position;


  const message = props.message;
  const keyboardConstants = {
    enter: 13 // The 13 value is equivalent to the "Enter" or the "Return" key code

  };
  const tooltipMessageId = (0, _lodash.uniqueId)('toolTip-');

  const handleToggleTooltip = function handleToggleTooltip(e) {
    if (e.which !== keyboardConstants.enter || e.keyCode !== keyboardConstants.enter) {
      e.preventDefault();
    }

    setDisplaytooltip(!displayTooltip);
    tooltipRef.current.focus();
  };

  const handleKeyPressToggle = function handleKeyPressToggle(e) {
    e.preventDefault();

    if (e.which === keyboardConstants.enter || e.keyCode === keyboardConstants.enter) {
      handleToggleTooltip(e);
    }
  };

  return /* #__PURE__ */_react.default.createElement('span', {
    className: 'tooltip'
  }, /* #__PURE__ */_react.default.createElement('span', {
    role: 'button',
    tabIndex: 0,
    className: 'tooltip-trigger',
    'aria-label': 'help',
    'aria-describedby': tooltipMessageId,
    'aria-live': 'assertive',
    ref: tooltipRef,
    onClick: handleToggleTooltip,
    onKeyPress: handleKeyPressToggle
  }, /* #__PURE__ */_react.default.createElement(_Icon.default, {
    name: 'question',
    id: 'help-tip'
  })), displayTooltip && /* #__PURE__ */_react.default.createElement('div', {
    className: 'tooltip-bubble tooltip-'.concat(position)
  }, /* #__PURE__ */_react.default.createElement('div', {
    id: tooltipMessageId,
    className: 'tooltip-message',
    'aria-live': 'assertive'
  }, message), /* #__PURE__ */_react.default.createElement('span', {
    role: 'button',
    tabIndex: 0,
    className: 'tooltip-close',
    'aria-label': 'Close tooltip',
    onClick: handleToggleTooltip,
    onKeyPress: handleKeyPressToggle
  }, /* #__PURE__ */_react.default.createElement(_Icon.default, {
    name: 'cross',
    id: 'close'
  }))));
};

Tooltip.propTypes = {
  message: _propTypes.default.string.isRequired,
  position: _propTypes.default.string.isRequired
};
const _default = Tooltip;
exports.default = _default;
