import React from 'react'

import useStyles from './Positions.style'
import { useTranslation } from 'react-i18next'
import { Typography } from '@material-ui/core'
import PositionsTable from './Table/PositionsTable'

export default function Positions(): JSX.Element {
  const classes = useStyles()
  const { t } = useTranslation()

  return (
    <div className={classes.mainWrapper}>
      <div className={classes.positions}>
        <Typography variant="h6">{t('positions')}</Typography>
      </div>
      <div className={classes.topMargin}>
        <PositionsTable />
      </div>
    </div>
  )
}
