/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    token: null,
    client: null,
    expiry: null,
    uid: null,
    user: null,
    isLoading: false,
    error: null,
  },
  reducers: {
    setHeaders(state, { payload }) {
      const {
        token, uid, client, expiry,
      } = payload;

      state.token = token;
      state.uid = uid;
      state.client = client;
      state.expiry = expiry;
    },

    authStart(state) {
      state.isLoading = true;
    },

    authSuccess(state, { payload }) {
      state.isLoading = false;
      state.user = payload;
      state.error = null;
    },

    authFail(state, { payload }) {
      state.user = null;
      state.isLoading = false;
      state.error = payload;
    },

    logout(state) {
      state.user = null;
      state.isLoading = false;
    },
  },
});

export const {
  setHeaders, authFail, authStart, authSuccess, logout,
} = authSlice.actions;

export default authSlice.reducer;
