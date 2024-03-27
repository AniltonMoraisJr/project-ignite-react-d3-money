import { createContext, useEffect, useState } from 'react'
import { api } from '../lib/axios'

export interface Transaction {
  id: string
  type: 'income' | 'outcome'
  description: string
  category: string
  price: number
  createdAt: string
}

interface CreatTransactionInput extends Omit<Transaction, 'id' | 'createdAt'> {}

interface TransactionContextType {
  transactions: Transaction[]
  fetchTransactions: (query?: string) => Promise<void>
  createNewTransaction: (data: CreatTransactionInput) => Promise<void>
}

interface TransactionProviderProps {
  children: React.ReactNode
}

export const TransactionContext = createContext({} as TransactionContextType)

export const TransactionContextProvider: React.FC<TransactionProviderProps> = ({
  children,
}) => {
  const [transactions, setTransactions] = useState<Transaction[]>([])

  async function fetchTransactions(query?: string) {
    const response = await api.get('transactions', {
      params: {
        _sort: 'createdAt',
        _order: 'descending',
        q: query,
      },
    })
    const data = response.data

    setTransactions(data)
  }

  async function createNewTransaction(data: CreatTransactionInput) {
    const { description, price, category, type } = data
    const response = await api.post('transactions', {
      description,
      price,
      category,
      type,
      createdAt: new Date(),
    })
    setTransactions((prev) => [...prev, response.data])
  }

  useEffect(() => {
    fetchTransactions()
  }, [])

  return (
    <TransactionContext.Provider
      value={{ transactions, fetchTransactions, createNewTransaction }}
    >
      {children}
    </TransactionContext.Provider>
  )
}
