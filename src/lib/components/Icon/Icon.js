import React from 'react';
import PropTypes from 'prop-types';

const Icon = ({
  name, id, title, extraClass = '', ariaHidden = 'true', focusable = 'false'
}) => {
  const iconClass = `icon ${extraClass} icon--${name}`;
  return (
    <span className="icon__wrapper">
      <svg
        className={iconClass}
        aria-hidden={title ? null : ariaHidden}
        focusable={focusable}
        role="img"
        aria-labelledby={title ? id : null}>
        {title ? <title id={id}>{title}</title> : null}
        <use
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          xlinkHref={'#' + name} />
      </svg>
    </span>
  );
};

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  ariaHidden: PropTypes.string,
  extraClass: PropTypes.string,
  focusable: PropTypes.string,
  title: PropTypes.string
};

export default Icon;
