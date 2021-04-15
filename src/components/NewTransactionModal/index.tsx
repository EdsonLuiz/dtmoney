import Modal from 'react-modal'
import { Container, TransactionTypeContainer } from './styles'

import closeImg from '../../assets/close.svg'
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'

interface NewTransactionModalProps {
  isOpen: boolean
  onRequestClose():void
}

export function NewTransactionModal({isOpen, onRequestClose}:NewTransactionModalProps) {
  return (
    <Modal  isOpen={isOpen}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
            onRequestClose={onRequestClose}>

      <button type="button"
              className="react-modal-close"
              onClick={onRequestClose}>
        <img src={closeImg} alt="fechar modal"/>
      </button>

      <Container>
        <h2>Cadastrar transação</h2>

        <input  type="text"
                placeholder="Título"/>
        <input  type="number"
                placeholder="Valor"/>

        <TransactionTypeContainer>
          <button>
            <img src={incomeImg} alt="income"/>
            <span>Entrada</span>
          </button>
          <button>
            <img src={outcomeImg} alt="outcome"/>
            <span>Saída</span>
          </button>
        </TransactionTypeContainer>
            
        <input  type="text"
                placeholder="Categoria"/>
        <button type="submit">
          Cadastrar
        </button>
      </Container>
    </Modal>
  )
}