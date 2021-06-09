import React, { useRef } from 'react'

import useStyles from './Chart.style'
import { Typography } from '@material-ui/core'
import { addUsdToNum } from 'utils/liquidityPoolChart'
import { useTranslation } from 'react-i18next'

type TooltipProps = {
  payload?: any[]
}

type shortPayloadType = {
  day: string
  pv: number
  valueUSD: number
}

function getPayload<T, R extends keyof T>(obj: T, key: R) {
  return obj[key]
}

export default function CustomTooltip({
  payload,
}: TooltipProps): JSX.Element | null {
  const classes = useStyles()
  const { t } = useTranslation()
  const year = new Date().getFullYear()
  const shortenPayload = useRef<shortPayloadType>()

  if (payload && payload[0]) {
    shortenPayload.current = getPayload(payload[0], 'payload')
  }

  if (shortenPayload.current !== undefined) {
    return (
      <div className={classes.contentStyle}>
        <div>
          <Typography variant="h3">
            {shortenPayload.current.day} {year}
          </Typography>
        </div>
        <div className={classes.customTooltipColor}>
          <Typography variant="h3">
            {t('liquidity')}: {addUsdToNum(shortenPayload.current.valueUSD)}
          </Typography>
        </div>
      </div>
    )
  }

  return null
}
