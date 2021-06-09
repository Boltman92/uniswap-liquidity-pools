import React from 'react'
import {
  Table,
  TableBody,
  TableContainer,
  TablePagination,
  Paper,
} from '@material-ui/core'
import useStyles from './PositionsTable.style'
import { rows } from '../data'
import { Data } from '../interfaces'
import { Order } from '../types'
import { stableSort, getComparator } from 'utils/tableSort'

import PositionsTableHead from './PositionsTableHead'
import PositionsTableBody from './PositionsTableBody'

export default function PositionsTable(): JSX.Element {
  const classes = useStyles()
  const [order, setOrder] = React.useState<Order>('asc')
  const [orderBy, setOrderBy] = React.useState<keyof Data>('pairLiquidity')
  const [page, setPage] = React.useState(0)
  const rowsPerPage = 7

  const handleRequestSort = (
    event: React.MouseEvent<unknown>,
    property: keyof Data
  ) => {
    const isAsc = orderBy === property && order === 'asc'
    setOrder(isAsc ? 'desc' : 'asc')
    setOrderBy(property)
  }

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage)
  }

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <TableContainer>
          <Table
            className={classes.table}
            aria-labelledby="tableTitle"
            size="medium"
            aria-label="enhanced table"
          >
            <PositionsTableHead
              order={order}
              orderBy={orderBy}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
            />

            <TableBody>
              {stableSort(rows, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  return (
                    <PositionsTableBody
                      key={index}
                      row={row}
                      index={index}
                      page={page}
                      rowsPerPage={rowsPerPage}
                    />
                  )
                })}
            </TableBody>
          </Table>
        </TableContainer>

        <TablePagination
          classes={{
            root: classes.root,
            actions: classes.caption,
          }}
          rowsPerPageOptions={[]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
        />
      </Paper>
    </div>
  )
}
