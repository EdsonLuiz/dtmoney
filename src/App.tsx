import React, { useState } from 'react';
import Modal from 'react-modal'
import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';
import { GlobalStyle } from './styles/global';

Modal.setAppElement('#root')

function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false)

  function handleNewTransactionModalOpen() {
    setIsNewTransactionModalOpen(true);
  }

  function handleCloseNewTransactionModalOpen() {
    setIsNewTransactionModalOpen(false)
  }
  return (
    <>
      <Header onOpenNewTransactionModal={handleNewTransactionModalOpen}/>
      <Dashboard/>

      <Modal  isOpen={isNewTransactionModalOpen}
              onRequestClose={handleCloseNewTransactionModalOpen}>
          <h2>Cadastrar transação</h2>
        </Modal>

      <GlobalStyle />
    </>
  );
}

export default App;
