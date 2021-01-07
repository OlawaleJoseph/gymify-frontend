import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:3000/api/v1/',
});
// export const postRequest = async (url, body, header) => {
//   try {
//     const { data, headers } = await instance.post(url, body, { headers: header });
//     return { data, headers };
//   } catch (error) {
//     console.log(error.response);
//   }
// };
export const postRequest = async (url, body, header) => {
  const { data, headers } = await instance.post(url, body, { headers: header });
  return { data, headers };
};

export const gettRequest = async (url, body, header) => {
  const { data, headers } = await instance.post(url, body, { headers: header });
  return { data, headers };
};
