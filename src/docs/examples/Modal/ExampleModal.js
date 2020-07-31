import React, { useState } from 'react';
import { Modal } from '../../../components';

const ExampleModal = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <React.Fragment>
      <button
        type="button"
        tabIndex="0"
        className="link-button"
        onClick={() => setModalOpen(true)}
        onKeyDown={() => setModalOpen(true)}>
        <span>Open Modal</span>
      </button>
      {modalOpen && (
        <Modal
          closed={() => setModalOpen(false)}
          dialogTitle="dialogTitle"
          dialogDescription="dialogLinkDescription">
          <h1 id="dialogTitle">Title</h1>
          <h2>Description</h2>
          <p id="dialogLinkDescription">Some exciting paragraph</p>
          <img src="https://www.royalmail.com/sites/default/files/fee-to-pay-card---390x550.png" alt="" />
        </Modal>
      )}
    </React.Fragment>
  );
};

export default ExampleModal;
