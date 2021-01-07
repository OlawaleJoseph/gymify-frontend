import axios from 'axios';
import { toast } from 'react-toastify';
import { authSuccess } from '../reducers/auth';
import { storeHeaders } from './common';
import { loginPath, baseUrl } from './constants';

const instance = axios.create({
  baseURL: baseUrl,
});

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

export const postRequest = async (url, body, header) => {
  const { data, headers } = await instance.post(url, body, { headers: header });
  return { data, headers };
};

export const gettRequest = async (url, body, header) => {
  const { data, headers } = await instance.post(url, body, { headers: header });
  return { data, headers };
};
