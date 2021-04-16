import Modal from 'react-modal'
import { Container, RadioBox, TransactionTypeContainer } from './styles'

import closeImg from '../../assets/close.svg'
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import { FormEvent, useState } from 'react'
import { useTransactions } from '../../hooks/useTransactions'

interface NewTransactionModalProps {
  isOpen: boolean
  onRequestClose():void
}

type TransactionType = 'deposit' | 'withdraw'


export function NewTransactionModal({isOpen, onRequestClose}:NewTransactionModalProps) {

  const {createTransaction} = useTransactions()

  const [type, setType] = useState<TransactionType>('deposit')
  const [title, setTitle] = useState('')
  const [amount, setAmount] = useState(0)
  const [category, setCategory] = useState('')

  async function handleCreateNewTransaction(event: FormEvent) {
    event.preventDefault()
    await createTransaction({
      title,
      amount,
      category,
      type,
    });

    setTitle('')
    setType('deposit')
    setAmount(0)
    setCategory('')

    onRequestClose()

  }

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

      <Container  onSubmit={handleCreateNewTransaction}>
        <h2>Cadastrar transação</h2>

        <input  type="text"
                onChange={ e => setTitle(e.target.value)}
                placeholder="Título"/>
        <input  type="number"
                onChange={e => setAmount(Number(e.target.value))}
                placeholder="Valor"/>

        <TransactionTypeContainer>
          <RadioBox onClick={() => setType('deposit')}
                    
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
                onChange={e => setCategory(e.target.value )}
                placeholder="Categoria"/>
        <button type="submit">
          Cadastrar
        </button>
      </Container>
    </Modal>
  )
}