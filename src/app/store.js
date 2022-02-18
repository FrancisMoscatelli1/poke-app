import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import favoriteReducer from '../features/favorite/favoriteSlice';

export default configureStore({
  reducer: {
    counter: counterReducer,
    favorite: favoriteReducer,
  },
});
