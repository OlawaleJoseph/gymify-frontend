/* eslint-disable no-param-reassign */
import axios from 'axios';
import { toast } from 'react-toastify';
import { authSuccess, logout } from '../reducers/auth';
import { storeHeaders, getHeaders, removeHeaders } from './common';
import { loginPath, baseUrl, logoutUrl } from './constants';

const instance = axios.create({
  baseURL: baseUrl,
});

instance.interceptors.request.use(
  config => {
    const header = getHeaders();
    if (header) {
      const {
        authorization, uid, client, tokenType,
      } = header;
      config.headers.Authorization = authorization;
      config.headers.uid = uid;
      config.headers.client = client;
      config.headers['token-type'] = tokenType;
    }
    return config;
  },
  error => Promise.reject(error),
);

export const login = userinfo => async dispatch => {
  try {
    const { data, headers } = await instance.post(loginPath, userinfo);
    dispatch(authSuccess(data.data));
    const {
      uid, client, authorization, expiry,
    } = headers;

    const tokenType = headers['token-type'];
    storeHeaders({
      uid, client, authorization, expiry, tokenType,
    });
    toast.success(`Welcome ${data.data.username}`);
  } catch (error) {
    if (error.response.status === 401) {
      error.response.data.errors.forEach(msg => toast.error(msg));
    } else {
      toast.error('Server error. Plaease try again later');
    }
  }
};

export const signOut = () => async dispatch => {
  try {
    await instance.delete(logoutUrl);
    dispatch(logout());
    removeHeaders();
    toast.success('Successfuly signed out');
  } catch (error) {
    toast.error('An error occured');
  }
};

export const postRequest = async (url, body, header) => {
  const { data, headers } = await instance.post(url, body, { headers: header });
  return { data, headers };
};

export const gettRequest = async (url, body, header) => {
  const { data, headers } = await instance.post(url, body, { headers: header });
  return { data, headers };
};
