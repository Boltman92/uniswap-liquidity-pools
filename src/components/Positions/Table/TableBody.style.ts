import { makeStyles, createStyles } from '@material-ui/core/styles'

const useBodyStyles = makeStyles((theme) =>
  createStyles({
    body: {
      color: theme.palette.primary.main,
      fontWeight: 500,
      lineHeight: '1.5rem',
      borderBottom: 'none',
    },
    small: {
      width: theme.spacing(3),
      height: theme.spacing(3),
    },
    updateFontGreen: {
      fontWeight: 800,
      color: theme.custom.figma.poolPriceEarned,
    },
    updateFontPrimary: {
      fontWeight: 800,
      color: theme.palette.primary.main,
    },
    topMargin: {
      marginTop: '5px',
    },
    root: {
      marginTop: '8px',
      marginRight: '5px',
      minWidth: 'fit-content',
      padding: '2px 4px',
      borderRadius: '4px',
      border: '1px solid',
      borderColor: theme.custom.figma.backgroundColor,
      color: theme.custom.figma.toolTipColor,
      textTransform: 'none',
      '&:disabled': {
        color: theme.custom.figma.rangePickerHoverColor,
      },
      '&:hover': {
        color: theme.custom.figma.rangePickerHoverColor,
        fontWeight: 800,
      },
    },
  })
)

export default useBodyStyles
