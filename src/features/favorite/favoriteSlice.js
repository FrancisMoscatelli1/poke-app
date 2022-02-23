import { createSlice } from '@reduxjs/toolkit';

export const favoriteSlice = createSlice({
  name: 'favorite',
  initialState: [],
  reducers: {
    addElement: (state, action) => {
      state.push(action.payload);
    },
    deleteFavorite: (state, action) => {
      const index = state.findIndex(
        (favorite) => favorite.number === action.payload,
      );
      if (index > -1) {
        state.splice(index, 1);
      }
    },
  },
});

export const { addElement, deleteFavorite } = favoriteSlice.actions;

export const selectFavorites = (state) => state.favorite;

export const addFavorite = (element) => (dispatch, getState) => {
  const currentValue = selectFavorites(getState());
  if (currentValue.length === 0) {
    dispatch(addElement(element));
  } else if (!currentValue.some((x) => element.name === x.name)) {
    dispatch(addElement(element));
  }
};

export default favoriteSlice.reducer;
