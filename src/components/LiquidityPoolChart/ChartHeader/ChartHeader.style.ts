import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  headerWrapper: {
    marginBottom: '1rem',
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
