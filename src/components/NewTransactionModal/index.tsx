import Modal from 'react-modal'
import { Container, RadioBox, TransactionTypeContainer } from './styles'

import closeImg from '../../assets/close.svg'
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import { useState } from 'react'

interface NewTransactionModalProps {
  isOpen: boolean
  onRequestClose():void
}

type TransactionType = 'deposit' | 'withdraw'


export function NewTransactionModal({isOpen, onRequestClose}:NewTransactionModalProps) {

  const [type, setType] = useState<TransactionType>('deposit')

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
          <RadioBox onClick={() =>setType('deposit')}
                    type="button"
                    activeColor='green'
                    isActive={type === 'deposit'}>
            <img src={incomeImg} alt="income"/>
            <span>Entrada</span>
          </RadioBox>
          <RadioBox onClick={() =>setType('withdraw')}
                    type="button"
                    activeColor='red'
                    isActive={type === 'withdraw'}>
            <img src={outcomeImg} alt="outcome"/>
            <span>Saída</span>
          </RadioBox>
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