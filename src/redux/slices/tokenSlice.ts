import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { TokenState } from '../types/types'

const initialState: TokenState = {
  tokens: [
    {
      name:"Bitcoin",
      symbol:"BTC",
      usd_price:27153.714711306526,
      percent_change_24hs:-3.0090937372486577,
    },
    {
      name:"Ethereum",
      symbol:"ETH",
      usd_price:1122.714711306526,
      percent_change_24hs:2.3090937372486577,
    },
  ]
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    /*
    
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload
    },
    */
  },
})

// Action creators are generated for each case reducer function
//export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer