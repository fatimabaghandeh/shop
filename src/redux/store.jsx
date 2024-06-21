import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './redux/cartSlice';

const loadState = () => {
  try {
    const serializedState = localStorage.getItem('cart');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('cart', serializedState);
  } catch (err) {
    console.error('Failed to save state to localStorage:', err);
  }
};

const persistedState = loadState();

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
  preloadedState: {
    cart: persistedState,
  },
});

store.subscribe(() => {
  saveState(store.getState().cart);
});

export default store;
