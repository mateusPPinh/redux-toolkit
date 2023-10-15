import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

import products from '../../products'

const apiURL = "http://localhost:3333/products"

// equivale ao usu do state no useState
const initialState = {
  items: products,
  cartTotal: 0,
  cartItems: [],
}

export const getProducts = createAsyncThunk('/products', () => {
  return fetch(apiURL)
    .then((response) => response.json())
    .catch((error) => console.log(error))
})

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    increase: (state, action) => {
      const product = state.items.find((item) => item.id === action.payload.id);
      const cartItem = state.cartItems.find((item) => item.id === action.payload.id); 

      if (cartItem) {
        cartItem.amount += 1;
        
      } else {
        state.cartItems.push({...product, amount: 1});
      }
    
      state.cartTotal += 1;  // Incrementar o total do carrinho
    },
    decrease: (state, action) => {
      const index = state.cartItems.findIndex(item => item.id === action.payload.id);
      if (index !== -1) {
          if (state.cartItems[index].amount === 1) {
              state.cartItems.splice(index, 1);
          } else {
              state.cartItems[index].amount -= 1;
          }
      }
      state.cartTotal -= 1;
  }
    
  },
  extraReducers: {
    [getProducts.pending]: (state) => {
      state.isLoading = true;
    },
    [getProducts.fulfilled]: (state, action) => {
      state.isLoading = false,
      state.items = action.payload;
    },
    [getProducts.rejected]: (state) => {
      state.isLoading = false
    }
  }
})

export const {increase, decrease} = productsSlice.actions

export default productsSlice.reducer