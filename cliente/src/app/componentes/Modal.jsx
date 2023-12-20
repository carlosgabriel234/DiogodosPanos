import React, { useState } from 'react';
import CustomModal from './Modal';

const Modal = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setModalIsOpen(true)}>Abrir Pop-up</button>
      <CustomModal isOpen={modalIsOpen} onClose={() => setModalIsOpen(false)}>
        Conteúdo do Pop-up
      </CustomModal>
    </div>
  );
};

export default Modal




  




