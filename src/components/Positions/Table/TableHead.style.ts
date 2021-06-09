import { makeStyles, createStyles } from '@material-ui/core/styles'

const useSortStyles = makeStyles((theme) =>
  createStyles({
    root: {
      color: theme.palette.primary.main,
      '&:hover': {
        color: theme.palette.primary.main,
      },
      '&$active': {
        color: theme.palette.primary.main,
      },
    },
    active: {},
    icon: {
      backgroundColor: theme.palette.primary.main[500],
      '& path': {
        fill: theme.palette.primary.main,
      },
    },
    head: {
      color: theme.palette.primary.main,
      fontWeight: 500,
      lineHeight: '1.5rem',
      borderBottom: 'none',
    },
    visuallyHidden: {
      border: 0,
      clip: 'rect(0 0 0 0)',
      height: 1,
      margin: -1,
      overflow: 'hidden',
      padding: 0,
      position: 'absolute',
      top: 20,
      width: 1,
      color: theme.palette.primary.main,
    },
  })
)

export default useSortStyles
