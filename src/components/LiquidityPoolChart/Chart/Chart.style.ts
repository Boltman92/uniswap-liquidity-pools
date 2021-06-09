import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  wrapperStyle: {
    width: '78%',
    minHeight: '350px',
    maxHeight: '370px',
    backgroundColor: theme.custom.figma.elementBackgroundColor,
    margin: 0,
    padding: '1.25rem',
    border: theme.custom.figma.elementBackgroundColor,
    borderRadius: '10px',
  },
  centerStyle: {
    boxSizing: 'border-box',
    margin: '0px 0px 40px',
    minWidth: '0px',
    width: '100%',
    display: 'flex',
    padding: '0px',
    alignItems: 'center',
    justifyContent: 'space-between',
    color: theme.palette.primary.main,
  },
  liqStyle: {
    marginLeft: '10px',
    marginRight: '10px',
    paddingTop: '10px',
  },
  selectDate: {
    marginLeft: '10px',
    marginRight: '10px',
    paddingTop: '10px',
    display: 'flex',
  },
  contentStyle: {
    padding: '10px 14px',
    border: '1px solid',
    backgroundColor: theme.palette.primary.main,
    borderRadius: '10px',
    borderColor: theme.custom.figma.toolTipColor,
    color: theme.custom.figma.backgroundColor,
    textAlign: 'left',
  },
  customTooltipColor: {
    color: theme.custom.figma.toolTipColor,
  },
}))

export default useStyles
