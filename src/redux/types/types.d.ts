export interface TokenState {
  tokens: Token[]
}

export interface Token {
  name: string,
  symbol: string,
  usd_price: number,
  percent_change_24hs: number
}