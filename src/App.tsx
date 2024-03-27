import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'
import Transactions from './pages/Transactions'
import { TransactionContextProvider } from './contexts/TransactionsContexts'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <TransactionContextProvider>
        <Transactions />
      </TransactionContextProvider>
    </ThemeProvider>
  )
}
