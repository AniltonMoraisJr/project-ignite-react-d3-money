import React from 'react'
import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from 'phosphor-react'
import { useSummary } from '../../hooks/useSummary'
import { numberFormatter } from '../../utils/formatter'
import { SummaryCard, SummaryContainer } from './styles'

// import { Container } from './styles';

const Summary: React.FC = () => {
  const { summary } = useSummary()
  return (
    <SummaryContainer>
      <SummaryCard>
        <header>
          <span>Entradas</span>
          <ArrowCircleUp size={32} color="#88b37e" />
        </header>
        <strong>{numberFormatter.format(summary.income)}</strong>
      </SummaryCard>
      <SummaryCard>
        <header>
          <span>Saídas</span>
          <ArrowCircleDown size={32} color="#f75a68" />
        </header>
        <strong>
          {'- '}
          {numberFormatter.format(summary.outcome)}
        </strong>
      </SummaryCard>
      <SummaryCard variant="green">
        <header>
          <span>Total</span>
          <CurrencyDollar size={32} color="#fff" />
        </header>
        <strong>{numberFormatter.format(summary.total)}</strong>
      </SummaryCard>
    </SummaryContainer>
  )
}

export default Summary
