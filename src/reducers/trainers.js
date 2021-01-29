/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const trainersSlice = createSlice({
  name: 'trainers',
  initialState: {
    trainers: [],
    currentTrainerId: null,
  },
  reducers: {
    getTrainers(state, { payload }) {
      state.trainers = payload;
    },
    setCurrentTrainerId(state, { payload }) {
      state.currentTrainerId = payload;
    },
  },
});

export const { getTrainers, setCurrentTrainerId } = trainersSlice.actions;

export default trainersSlice.reducer;
