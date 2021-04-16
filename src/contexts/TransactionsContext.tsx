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
  createTransaction(transaction: TransactionInputDTO): Promise<void>
}

interface TransactionsProviderProps {
  children: ReactNode
}

export const TransactionsContext = createContext<TransactionContextData>({} as TransactionContextData)

export function TransactionsProvider({children}: TransactionsProviderProps) {

  const [transactions, setTransactions] = useState<Transaction[]>([])

  useEffect(() => {
    api.get('transactions')
      .then(response => setTransactions(response.data.transactions))
  }, [])

  async function createTransaction(transactionInput: TransactionInputDTO):Promise<void> {
    const response = await api.post('transactions', transactionInput )    
    const newTransaction = response.data.transaction

    setTransactions([
      ...transactions,
      newTransaction
    ])

  }

  return(
    <TransactionsContext.Provider value={{transactions, createTransaction}}>
      {children}
    </TransactionsContext.Provider>
  )
}