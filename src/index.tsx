import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

import reportWebVitals from './reportWebVitals'
import { Web3ReactProvider } from '@web3-react/core'
import getLibrary from 'utils/getLibrary'
import { ThemeProvider } from '@material-ui/core/styles'
import theme from './theme/theme'
import './i18n'

import App from './App'

const TeamWidget = () => {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </Web3ReactProvider>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <TeamWidget />
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
