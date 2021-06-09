import React from 'react'

import useStyles from './ChartHeader.style'
import { useTranslation } from 'react-i18next'
import { useQuery } from '@apollo/client'
import { PAIRS } from '../../../apollo/queries'
import WidgetHeader from 'components/WidgetHeader/WidgetHeader'

type pairType = {
  id: string
  liquidityTokenBalance: string
  pair: {
    reserveUSD: string
    totalSupply: string
  }
}

export default function ChartHeader(): JSX.Element {
  const classes = useStyles()
  const { t } = useTranslation()
  const MOCK_WALLET = '0x511a21cffba5d6f9cb4965f6d743c8ca3b250dbf' // TODO: add func to grab wallet hash from metamask
  const { loading, data, error } = useQuery(PAIRS, {
    variables: { id: MOCK_WALLET },
  })
  if (loading) {
    return <div> loading... </div> // PLACE FOR LOADING COMPONENT
  }
  if (error) {
    return <div> {error} </div>
  }
  const liquidityPairsByUser = data.users[0].liquidityPositions
  const feesByUser = liquidityPairsByUser.map(
    (pair: pairType) =>
      (Number(pair.pair.reserveUSD) / Number(pair.pair.totalSupply)) *
      Number(pair.liquidityTokenBalance)
  )

  return (
    <div className={classes.headerWrapper}>
      <WidgetHeader.ChartStatsHeader
        title={t('liquidInclFees')}
        earned={false}
        value={feesByUser[0]}
      />
      <WidgetHeader.ChartStatsHeader
        title={t('feesEarnedCumulative')}
        earned={true}
        value={feesByUser[0] * 0.03}
      />
    </div>
  )
}
