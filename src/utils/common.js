export const localStorageHeadersKey = 'gymifyHeaders';

export const storeHeaders = headerObj => (
  localStorage.setItem(localStorageHeadersKey, JSON.stringify(headerObj))
);

export const getHeaders = () => JSON.parse(localStorage.getItem(localStorageHeadersKey));

export const removeHeaders = () => localStorage.removeItem(localStorageHeadersKey);
