/**
 * A reusable tooltip to render on mouse hover and destroy on mouse out.
 * This accept tooltip position(top, bottom,right,left) as props to render accordingly.
 * Element that need a tooltip on mouse hover need to be wrapped inside this component
 * e. g. <Tooltip> hover me </Tooltip>.
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import Icon from '../Icon/Icon';

class Tooltip extends Component {
  constructor(props) {
    super(props);

    this.state = {
      displayTooltip: false
    };
    this.tooltipRef = React.createRef();
    this.handleToggleTooltip = this.handleToggleTooltip.bind(this);
    this.handleKeyPressToggle = this.handleKeyPressToggle.bind(this);
  }

  static keyboardConstants = {
    enter: 13 // The 13 value is equivalent to the "Enter" or the "Return" key code
  }

  handleToggleTooltip(e) {
    if (e.which !== Tooltip.keyboardConstants.enter
      || e.keyCode !== Tooltip.keyboardConstants.enter) {
      e.preventDefault();
    }
    const { displayTooltip } = this.state;
    this.setState({ displayTooltip: !displayTooltip });
    this.tooltipRef.current.focus();
  }

  handleKeyPressToggle(e) {
    e.preventDefault();
    if (e.which === Tooltip.keyboardConstants.enter
      || e.keyCode === Tooltip.keyboardConstants.enter) {
      this.handleToggleTooltip(e);
    }
  }

  render() {
    const {
      position,
      message
    } = this.props;
    const tooltipMessageId = nanoid();
    const { displayTooltip } = this.state;
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
          ref={this.tooltipRef}
          onClick={this.handleToggleTooltip}
          onKeyPress={this.handleKeyPressToggle}>
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
                onClick={this.handleToggleTooltip}
                onKeyPress={this.handleKeyPressToggle}>
                <Icon name="cross" id="close" />
              </span>
            </div>
          )
        }
      </span>
    );
  }
}

Tooltip.propTypes = {
  message: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired
};

export default Tooltip;
