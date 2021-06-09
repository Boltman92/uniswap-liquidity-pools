import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  headerData: {
    display: 'grid',
    gridAutoRows: 'auto',
    gap: '10px',
    margin: '20px',
  },
  poolPriceWrapper: {
    minHeight: '50%',
    color: theme.palette.primary.main,
    textAlign: 'left',
  },
}))

export default useStyles
