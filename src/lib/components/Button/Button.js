import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => {
  const {
    id,
    disabled,
    handleClicked,
    children,
    styles
  } = props;
  const classes = ['button'];
  if (styles) {
    classes.push(styles);
  }
  return (
    <button
      id={id}
      type="button"
      className={classes.join(' ')}
      disabled={disabled}
      onClick={handleClicked}>
      {children}
    </button>
  );
};

Button.propTypes = {
  id: PropTypes.string,
  disabled: PropTypes.bool,
  handleClicked: PropTypes.func.isRequired,
  styles: PropTypes.string
};

export default Button;
