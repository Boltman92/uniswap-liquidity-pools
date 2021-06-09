import React, { Suspense } from 'react'

import useStyles from './App.style'
import { Grid } from '@material-ui/core'

import Chart from 'components/LiquidityPoolChart/Chart/Chart'
import ChartHeader from 'components/LiquidityPoolChart/ChartHeader/ChartHeader'
import Positions from 'components/Positions/Positions'
import WalletStats from 'components/WalletStats/WalletStats'
import { ApolloProvider } from '@apollo/client/react'
import { client } from './apollo/client'

function App(): JSX.Element {
  const classes = useStyles()
  return (
    <ApolloProvider client={client}>
      <Suspense fallback={<div>Loading...</div>}>
        <Grid>
          <div className={classes.AppStyle}>
            <ChartHeader />
            <Chart />
            <Positions />
            <WalletStats />
          </div>
        </Grid>
      </Suspense>
    </ApolloProvider>
  )
}

export default App
