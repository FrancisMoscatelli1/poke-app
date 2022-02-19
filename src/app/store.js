import { configureStore } from '@reduxjs/toolkit';
import favoriteReducer from '../features/favorite/favoriteSlice';

export default configureStore({
  reducer: {
    favorite: favoriteReducer,
  },
});
