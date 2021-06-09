import { gql } from '@apollo/client'

export const PAIRS = gql`
  query users($id: String!) {
    users(where: { id: $id }) {
      id
      usdSwapped
      liquidityPositions {
        id
        pair {
          totalSupply
          reserveUSD
          token0 {
            symbol
          }
          token1 {
            symbol
          }
        }
        liquidityTokenBalance
      }
    }
  }
`
