import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  AppStyle: {
    paddingTop: '10rem',
    textAlign: 'center',
    backgroundColor: theme.custom.figma.backgroundColor,
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifContent: 'center',
  },
}))

export default useStyles
