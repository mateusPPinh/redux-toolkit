import {configureStore} from '@reduxjs/toolkit'
import productsReducer from './features/loadProduct'

export const store = configureStore({
  reducer: {
    products: productsReducer
  }
})