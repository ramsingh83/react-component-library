import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import Icon from '../Icon/Icon';

const Modal = (props) => {
  const {
    id,
    children,
    dialogTitle,
    dialogDescription,
    closed
  } = props;

  const closeButton = useRef(null);

  useEffect(() => {
    closeButton.current.focus();
  }, []);

  return (
    <div
      id={id}
      className="modal"
      role="dialog"
      aria-labelledby={dialogTitle}
      aria-describedby={dialogDescription}>
      <button
        type="button"
        ref={closeButton}
        aria-label="close"
        className="close-button"
        onClick={(e) => closed(e)}
        onKeyDown={(e) => closed(e)}>
        <Icon name="close" id="close" />
      </button>
      <div className="modal-content">{children}</div>
    </div>
  );
};

Modal.propTypes = {
  id: PropTypes.string,
  dialogTitle: PropTypes.string,
  dialogDescription: PropTypes.string,
  closed: PropTypes.func.isRequired
};

export default Modal;
