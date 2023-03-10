import { createSlice } from '@reduxjs/toolkit';

const filter = '';

const filterSlice = createSlice({
  name: 'filter',
  initialState: filter,
  reducers: {
    onChangeFilter(state, action) {
      return action.payload;
    },
  },
});

export const { onChangeFilter } = filterSlice.actions;

export const filterReducer = filterSlice.reducer;
