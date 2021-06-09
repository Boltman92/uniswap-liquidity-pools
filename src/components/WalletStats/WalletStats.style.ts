import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  mainWrapper: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: theme.custom.figma.backgroundColor,
    marginTop: '30px',
    marginBottom: '80px',
  },
  walletStats: {
    marginTop: '3rem',
    width: '81%',
    textAlign: 'left',
    color: 'white',
  },
  headerWrapper: {
    marginBottom: '1rem',
    marginTop: '1.5rem',
    padding: '1.25rem',
    backgroundColor: theme.custom.figma.elementBackgroundColor,
    borderRadius: '10px',
    width: '78%',
    maxWidth: '80%',
    height: '91px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    flexWrap: 'nowrap',
    alignItems: 'center',
  },
}))

export default useStyles
