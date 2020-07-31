import React from 'react';
import { Modal } from '../../../components';

const ExampleModal = () => (
  <Modal
    closed={() => setModelOpen(false)}
    dialogTitle="dialogTitle"
    dialogDescription="dialogLinkDescription">
    <h1 id="dialogTitle">Blah blah blah h1</h1>
    <h2>Blah blah blah h2</h2>
    <p id="dialogLinkDescription">Some exciting paragraph</p>
    <img src="https://www.royalmail.com/sites/default/files/fee-to-pay-card---390x550.png" alt="" />
  </Modal>
);

export default ExampleModal;
