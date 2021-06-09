import React from 'react'

import useStyles from 'components/WidgetHeader/WidgetHeader.style'
import { Typography } from '@material-ui/core'
import { StatsHeaderProps } from './types'

import PoolPrice from 'components/LiquidityPoolChart/ChartHeader/PoolPrice'

export default function ChartStatsHeader({
  earned,
  title,
  value,
  isWalletStats = false,
  showUsd = true,
}: StatsHeaderProps): JSX.Element {
  const classes = useStyles()
  return (
    <div className={classes.headerData}>
      <div className={classes.poolPriceWrapper}>
        <Typography variant="h3">{title}</Typography>
      </div>

      <PoolPrice
        value={value}
        styled={!earned ? 'unstyled' : 'styled'}
        isWalletStats={isWalletStats}
        showUsd={showUsd}
      />
    </div>
  )
}
