import { makeStyles } from '@material-ui/core/styles'

type StyleProps = {
  styled: string
}

const useStyles = makeStyles((theme) => ({
  poolPrice: {
    boxSizing: 'border-box',
    margin: '0px',
    minWidth: '0px',
    color: (props: StyleProps) =>
      props.styled === 'styled'
        ? theme.custom.figma.poolPriceEarned
        : theme.palette.primary.main,
    display: 'flex',
    alignItems: 'flex-end',
    width: 'fit-content',
  },
  poolFeesEarned: {
    boxSizing: 'border-box',
    margin: '0px',
    minWidth: '0px',
  },
}))

export default useStyles
