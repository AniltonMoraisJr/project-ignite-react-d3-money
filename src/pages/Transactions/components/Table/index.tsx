import React, { useContext } from 'react'
import { PriceHighlight, TransactionTableContainer } from './styles'
import { TransactionContext } from '../../../../contexts/TransactionsContexts'
import { dateFormatter, numberFormatter } from '../../../../utils/formatter'

// import { Container } from './styles';

const TransactionsTable: React.FC = () => {
  const { transactions } = useContext(TransactionContext)
  return (
    <TransactionTableContainer>
      <tbody>
        {transactions.map((transaction) => (
          <tr key={transaction.id}>
            <td width={'50%'}>{transaction.description}</td>
            <td>
              <PriceHighlight variant={transaction.type}>
                {transaction.type === 'outcome' && '- '}
                {numberFormatter.format(transaction.price)}
              </PriceHighlight>
            </td>
            <td>{transaction.category}</td>
            <td>{dateFormatter.format(new Date(transaction.createdAt))}</td>
          </tr>
        ))}
      </tbody>
    </TransactionTableContainer>
  )
}

export default TransactionsTable
