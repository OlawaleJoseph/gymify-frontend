/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const trainersSlice = createSlice({
  name: 'trainers',
  initialState: [],
  reducers: {
    getTrainers(state, { payload }) {
      return [...state, ...payload];
    },
  },
});

export const { getTrainers } = trainersSlice.actions;

export default trainersSlice.reducer;
