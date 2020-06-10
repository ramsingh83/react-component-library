/**
 * A reusable tooltip to render on mouse hover and destroy on mouse out.
 * This accept tooltip position(top, bottom,right,left) as props to render accordingly.
 * Element that need a tooltip on mouse hover need to be wrapped inside this component
 * e. g. <Tooltip> hover me </Tooltip>.
 */
import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { uniqueId } from 'lodash';
import Icon from '../Icon/Icon';

const Tooltip = (props) => {
  const [displayTooltip, setDisplaytooltip] = useState(false);
  const tooltipRef = useRef();
  const {
    position,
    message
  } = props;

  const keyboardConstants = {
    enter: 13 // The 13 value is equivalent to the "Enter" or the "Return" key code
  };

  const tooltipMessageId = uniqueId('toolTip-');

  const handleToggleTooltip = (e) => {
    if (e.which !== keyboardConstants.enter || e.keyCode !== keyboardConstants.enter) {
      e.preventDefault();
    }
    setDisplaytooltip(!displayTooltip);
    tooltipRef.current.focus();
  };

  const handleKeyPressToggle = (e) => {
    e.preventDefault();
    if (e.which === keyboardConstants.enter || e.keyCode === keyboardConstants.enter) {
      handleToggleTooltip(e);
    }
  };

  return (
    <span
      className="tooltip">
      <span
        role="button"
        tabIndex={0}
        className="tooltip-trigger"
        aria-label="help"
        aria-describedby={tooltipMessageId}
        aria-live="assertive"
        ref={tooltipRef}
        onClick={handleToggleTooltip}
        onKeyPress={handleKeyPressToggle}>
        <Icon name="question" id="help-tip" />
      </span>
      {
        displayTooltip
        && (
          <div className={`tooltip-bubble tooltip-${position}`}>
            <div id={tooltipMessageId} className="tooltip-message" aria-live="assertive">
              {message}
            </div>
            <span
              role="button"
              tabIndex={0}
              className="tooltip-close"
              aria-label="Close tooltip"
              onClick={handleToggleTooltip}
              onKeyPress={handleKeyPressToggle}>
              <Icon name="cross" id="close" />
            </span>
          </div>
        )
      }
    </span>
  );
};

Tooltip.propTypes = {
  message: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired
};

export default Tooltip;
