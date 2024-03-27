import React from 'react'
import Header from '../../components/Header'
import Summary from '../../components/Summary'
import SearchForm from './components/SearchForm'
import TransactionsTable from './components/Table'
import { TransactionsContainer } from './styles'

// import { Container } from './styles';

const Transactions: React.FC = () => {
  return (
    <div>
      <Header />
      <TransactionsContainer>
        <Summary />
        <SearchForm />
        <TransactionsTable />
      </TransactionsContainer>
    </div>
  )
}

export default Transactions
