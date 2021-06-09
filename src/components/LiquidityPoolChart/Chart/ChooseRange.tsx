import React from 'react'

import useStyles from './ChooseRange.style'
import { Typography, Button } from '@material-ui/core'
import { Granularities } from './common'

type ChooseRangeProps = {
  isActive: boolean
  onClick: (variant: number) => void
  displayMethod: string
  variant: number
}

export default function ChooseRange({
  isActive,
  onClick,
  displayMethod,
  variant,
}: ChooseRangeProps): JSX.Element {
  const classes = useStyles()

  return (
    <Typography variant="subtitle1">
      <Button
        disabled={isActive ? true : false}
        classes={{ root: classes.root, disabled: classes.disabled }}
        onClick={() => onClick(variant)}
      >
        {displayMethod === Granularities[2]
          ? displayMethod
          : displayMethod === Granularities[1]
          ? `1W`
          : `1M`}
      </Button>
    </Typography>
  )
}
