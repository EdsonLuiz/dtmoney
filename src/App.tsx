import React, { useState } from 'react';
import Modal from 'react-modal'
import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';
import { NewTransactionModal } from './components/NewTransactionModal';
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

      <NewTransactionModal  isOpen={isNewTransactionModalOpen}
                            onRequestClose={handleCloseNewTransactionModalOpen} />

      <GlobalStyle />
    </>
  );
}

export default App;
