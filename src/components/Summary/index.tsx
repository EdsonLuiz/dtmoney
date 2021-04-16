import { Container } from "./styles";

import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import totalImg from '../../assets/total.svg'
import { useContext } from "react";
import { TransactionsContext } from "../../contexts/TransactionsContext";

export function Summary() {
  const {transactions} = useContext(TransactionsContext)
  console.log(transactions)
  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={incomeImg} alt="income"/>
        </header>
        <strong>R$1000,00</strong>
      </div>
      <div>
        <header>
          <p>Entradas</p>
          <img src={outcomeImg} alt="outcome"/>
        </header>
        <strong>-R$500,00</strong>
      </div>
      <div className="highlight-background">
        <header>
          <p>Entradas</p>
          <img src={totalImg} alt="total"/>
        </header>
        <strong>R$500,00</strong>
      </div>
    </Container>
  )
}