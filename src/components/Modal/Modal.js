import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import Icon from '../Icon/Icon';
import useClickAway from '../../hooks/useClickAway';
import './modal.scss';

const Modal = (props) => {
  const {
    id,
    children,
    dialogTitle,
    dialogDescription,
    closed
  } = props;

  const closeButton = useRef();
  const rootRef = useRef();

  useEffect(() => {
    closeButton.current.focus();
  }, []);

  useClickAway(rootRef, (e) => {
    closed(e);
  });

  return (
    <div
      id={id}
      className="modal"
      role="dialog"
      aria-labelledby={dialogTitle}
      aria-describedby={dialogDescription}
      ref={rootRef}>
      <button
        type="button"
        ref={closeButton}
        aria-label="close"
        className="close-button"
        onClick={e => closed(e)}
        onKeyDown={e => closed(e)}>
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
