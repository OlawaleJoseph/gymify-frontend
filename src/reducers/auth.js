/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    isLoading: false,
    error: null,
  },
  reducers: {
    authStart(state) {
      state.isLoading = true;
    },

    authSuccess(state) {
      state.isLoading = false;
      state.error = null;
    },

    authFail(state, { payload }) {
      state.user = null;
      state.isLoading = false;
      state.error = payload;
    },

    setUser(state, { payload }) {
      state.user = payload;
      state.isLoading = false;
      state.error = null;
    },

    logout(state) {
      state.user = null;
      state.isLoading = false;
    },
  },
});

export const {
  setHeaders, authFail, authStart, authSuccess, logout, setUser,
} = authSlice.actions;

export default authSlice.reducer;
