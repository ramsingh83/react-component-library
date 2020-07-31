import React, { useState } from 'react';
import { Modal, Button } from '../../../components';

const ExampleModal = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <React.Fragment>
      <Button
        handleClicked={() => setModalOpen(true)}>
        Open Modal
      </Button>
      {modalOpen && (
        <Modal
          closed={() => setModalOpen(false)}
          dialogTitle="dialogTitle"
          dialogDescription="dialogLinkDescription">
          <h1 id="dialogTitle">Blah blah blah h1</h1>
          <h2>Blah blah blah h2</h2>
          <p id="dialogLinkDescription">Some exciting paragraph</p>
          <img src="https://www.royalmail.com/sites/default/files/fee-to-pay-card---390x550.png" alt="" />
        </Modal>
      )}
    </React.Fragment>
  );
};

export default ExampleModal;
