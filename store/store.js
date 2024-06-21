import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './productSlice'
import cartReducer from './productSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    cart: cartReducer,
  },
})