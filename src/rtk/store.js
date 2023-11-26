import { configureStore } from '@reduxjs/toolkit'
import  productsSlice from './Slice/ProductsSlice'
import cardSlice from './Slice/cardSlice'

export const store = configureStore({
  reducer: {
    allProducts: productsSlice,
    Card:cardSlice,
  },
})