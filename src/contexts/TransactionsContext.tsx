import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "../services/api";


interface Transaction {
  id: number,
  title: string,
  type: string,
  category: string,
  amount: number,
  createdAt: string
}

type TransactionInputDTO = Omit<Transaction, 'id' | 'createdAt'>

interface TransactionContextData {
  transactions: Array<Transaction>,
  createTransaction(transaction: TransactionInputDTO): void
}

interface TransactionsProviderProps {
  children: ReactNode
}

export const TransactionsContext = createContext<TransactionContextData>({} as TransactionContextData)

export function TransactionsProvider({children}: TransactionsProviderProps) {

  const [transactions, setTransactions] = useState<Transaction[]>([])

  useEffect(() => {
    api.get('http://localhost:3000/api/transactions')
      .then(response => setTransactions(response.data.transactions))
  }, [])

  function createTransaction(transaction: TransactionInputDTO):void {
    api.post('/transactions', transaction )
  }

  return(
    <TransactionsContext.Provider value={{transactions, createTransaction}}>
      {children}
    </TransactionsContext.Provider>
  )
}