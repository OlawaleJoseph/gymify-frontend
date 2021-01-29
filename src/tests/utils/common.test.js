import { storeHeaders, getHeaders, localStorageHeadersKey } from '../../utils/common';

describe('Should store request headers values', () => {
  const headers = {
    token: 'oioinoino', uid: 'effef', client: 'fewff', 'token-type': 'Bearer',
  };
  test('should save the  headers in localstorage', () => {
    storeHeaders(headers);
    expect(localStorage.getItem(localStorageHeadersKey)).toBeTruthy();
    expect(localStorage.getItem(localStorageHeadersKey)).not.toBeFalsy();
  });

  test('should get the headers in localstorage', () => {
    const headers = {
      token: 'oioinoino', uid: 'effef', client: 'fewff', 'token-type': 'Bearer',
    };

    storeHeaders(headers);
    const retrievedHeaders = getHeaders();
    expect(retrievedHeaders).toBeTruthy();
    expect(retrievedHeaders).not.toBeFalsy();
    expect(retrievedHeaders).not.toEqual({});
    expect(retrievedHeaders).toEqual(headers);
  });
});
