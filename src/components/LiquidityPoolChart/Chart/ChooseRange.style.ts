import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    margin: '4px',
    minWidth: 'fit-content',
    padding: '6px',
    borderRadius: '6px',
    border: theme.custom.figma.elementBackgroundColor,
    color: theme.custom.figma.rangePickerColor,
    textTransform: 'none',
    '&$disabled': {
      color: theme.custom.figma.rangePickerColor,
    },
    '&:hover': {
      color: theme.custom.figma.rangePickerHoverColor,
      fontWeight: 800,
    },
  },
  disabled: {
    backgroundColor: theme.custom.figma.backgroundColor,
  },
}))

export default useStyles
