import { makeStyles, createStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      width: '100%',
      color: theme.palette.primary.main,
    },
    paper: {
      width: '100%',
      marginBottom: theme.spacing(2),
      backgroundColor: theme.custom.figma.elementBackgroundColor,
    },
    table: {
      minWidth: 750,
    },
    caption: {
      '& .MuiIconButton-root': {
        color: theme.custom.figma.poolPriceEarned,
      },
      '& .MuiIconButton-root.Mui-disabled': {
        color: theme.palette.primary.main,
      },
    },
  })
)

export default useStyles
