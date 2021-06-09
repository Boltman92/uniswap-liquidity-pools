import React from 'react'
import useStyles from './PoolPrice.style'
import { Typography } from '@material-ui/core'
import { priceWithLetterFormatter } from 'utils/liquidityPoolChart'

type PoolPriceProps = {
  value: number
  styled: string
  isWalletStats?: boolean
  showUsd?: boolean
}

export default function PoolPrice({
  value,
  styled,
  isWalletStats,
  showUsd = true,
}: PoolPriceProps): JSX.Element {
  const classes = useStyles({ styled })

  return (
    <div className={classes.poolPrice}>
      <div className={classes.poolFeesEarned}>
        <Typography variant="h2">
          {priceWithLetterFormatter(value, !isWalletStats)} {showUsd && 'USD'}
        </Typography>
      </div>
    </div>
  )
}
