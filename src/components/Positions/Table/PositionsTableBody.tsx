import React from 'react'

import {
  TableCell,
  TableRow,
  Avatar,
  Typography,
  Button,
} from '@material-ui/core'
import { AvatarGroup } from '@material-ui/lab'
import useBodyStyles from './TableBody.style'
import { Data } from '../interfaces'
import { addUsdToNum } from 'utils/liquidityPoolChart'
import { useTranslation } from 'react-i18next'

type TableBodyProps = {
  row: Data
  index: number
  page: number
  rowsPerPage: number
}

export default function PositionsTableBody({
  row,
  index,
  page,
  rowsPerPage,
}: TableBodyProps): JSX.Element {
  const classes = useBodyStyles()
  const { t } = useTranslation()

  return (
    <>
      <TableRow tabIndex={1} key={row.pair}>
        <TableCell classes={{ body: classes.body }} padding="default">
          {page === 0 ? index + 1 : page * rowsPerPage + (index + 1)}
        </TableCell>
        <TableCell classes={{ body: classes.body }} padding="default">
          <AvatarGroup max={2}>
            <Avatar
              alt={row.position1}
              src={row.image1Src}
              className={classes.small}
            />
            <Avatar
              alt={row.position2}
              src={row.image2Src}
              className={classes.small}
            />
          </AvatarGroup>
        </TableCell>
        <TableCell
          classes={{ body: classes.body }}
          component="th"
          id={`enhanced-table-checkbox-${index}`}
          scope="row"
          padding="none"
        >
          <Typography variant="subtitle2">{row.pair}</Typography>
          <Button disabled classes={{ root: classes.root }}>
            {t('add')}
          </Button>
          <Button disabled classes={{ root: classes.root }}>
            {t('remove')}
          </Button>
        </TableCell>
        <TableCell classes={{ body: classes.body }} align="right">
          <Typography className={classes.updateFontPrimary} variant="h3">
            {addUsdToNum(row.pairLiquidity)}
          </Typography>
          <div className={classes.topMargin}>
            {row.liquidity1} {row.position1}
          </div>
          <div>
            {row.liquidity2} {row.position2}
          </div>
        </TableCell>
        <TableCell classes={{ body: classes.body }} align="right">
          <Typography className={classes.updateFontGreen} variant="h3">
            {addUsdToNum(row.pairFeesEarned)}
          </Typography>
          <div className={classes.topMargin}>
            {row.feesEarned1} {row.position1}
          </div>
          <div>
            {row.feesEarned2} {row.position2}
          </div>
        </TableCell>
      </TableRow>
    </>
  )
}
