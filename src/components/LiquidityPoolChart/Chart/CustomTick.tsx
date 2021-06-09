import React from 'react'
import { priceWithLetterFormatter } from 'utils/liquidityPoolChart'

type CustomTickProps = {
  x: number
  y: number
  payload: { value: string }
  granularity?: number
  isY?: boolean
}

export default function CustomTick({
  x,
  y,
  payload,
  granularity,
  isY = false,
}: CustomTickProps): JSX.Element {
  const dateTip = payload.value
  const all =
    granularity === 2 && (dateTip === '25 April' || dateTip === '14 May')
  const week =
    granularity === 1 && (dateTip === '7 May' || dateTip === '14 May')
  const month =
    granularity === 0 && (dateTip === '28 April' || dateTip === '14 May')

  return (
    <g transform={`translate(${x},${y})`}>
      <text
        x={isY ? 10 : 28}
        y={3}
        dy={8}
        fontSize="14px"
        fontFamily="Open Sans, sans-serif"
        textAnchor={isY ? undefined : 'end'}
        fill="white"
      >
        {/* TODO show date interval basing on active period picker */}
        {isY ? (
          '$' + priceWithLetterFormatter(+payload.value)
        ) : all ? (
          dateTip
        ) : month ? (
          dateTip
        ) : week ? (
          dateTip
        ) : (
          <>&nbsp;</>
        )}
      </text>
    </g>
  )
}
