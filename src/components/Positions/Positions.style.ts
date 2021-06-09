import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  mainWrapper: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: theme.custom.figma.backgroundColor,
    marginTop: '30px',
    marginBottom: '5px',
  },
  positions: {
    marginTop: '3rem',
    width: '81%',
    textAlign: 'left',
    color: theme.palette.primary.main,
  },
  topMargin: {
    marginTop: '10px',
    width: '81%',
    padding: '16px',
  },
}))

export default useStyles
