import { createSlice } from '@reduxjs/toolkit';

export const favoriteSlice = createSlice({
  name: 'favorite',
  initialState: [],
  reducers: {
    addElement: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { addElement } = favoriteSlice.actions;

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
