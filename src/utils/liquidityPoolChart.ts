import Numeral from 'numeral'

export const priceWithLetterFormatter = (
  number: number,
  liquid = false
): string => {
  return liquid
    ? Numeral(number).format('0.0[.]00')
    : Numeral(number).format('0.[00]a')
}

export const addUsdToNum = (number: number): string => {
  return number === 0
    ? '$0'
    : number > 0 && number < 0.0001
    ? '< $0.0001'
    : `${number} USD`
}
