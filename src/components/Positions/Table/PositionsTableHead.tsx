import React from 'react'

import {
  TableCell,
  TableHead,
  TableRow,
  TableSortLabel,
  Typography,
} from '@material-ui/core'
import { Data } from '../interfaces'
import useSortStyles from './TableHead.style'
import { Order } from '../types'
import { useTranslation } from 'react-i18next'
import { headCells } from '../data'

interface EnhancedTableProps {
  onRequestSort: (
    event: React.MouseEvent<unknown>,
    property: keyof Data
  ) => void
  order: Order
  orderBy: string
  rowCount: number
}

export default function PositionsTableHead({
  order,
  orderBy,
  onRequestSort,
}: EnhancedTableProps): JSX.Element {
  const classes = useSortStyles()
  const { t } = useTranslation()
  const createSortHandler =
    (property: keyof Data) => (event: React.MouseEvent<unknown>) => {
      onRequestSort(event, property)
    }

  return (
    <TableHead>
      <TableRow>
        <TableCell classes={{ head: classes.head }} padding="default">
          #
        </TableCell>
        <TableCell
          classes={{ head: classes.head }}
          padding="default"
        ></TableCell>
        {headCells.map((headCell) => (
          <TableCell
            classes={{ head: classes.head }}
            key={headCell.id}
            align={headCell.numeric ? 'right' : 'left'}
            padding={headCell.disablePadding ? 'none' : 'default'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            {headCell.id !== 'pair' ? (
              <TableSortLabel
                classes={{
                  root: classes.active,
                  icon: classes.icon,
                  active: classes.active,
                }}
                active={orderBy === headCell.id}
                direction={orderBy === headCell.id ? order : 'desc'}
                onClick={createSortHandler(headCell.id)}
              >
                <Typography className={classes.head} variant="h3">
                  {t(headCell.label)}
                </Typography>
                {orderBy === headCell.id && (
                  <span className={classes.visuallyHidden}>
                    {order === 'desc'
                      ? 'sorted descending'
                      : 'sorted ascending'}
                  </span>
                )}
              </TableSortLabel>
            ) : (
              <Typography variant="h3">{t(headCell.label)}</Typography>
            )}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  )
}
