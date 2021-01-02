import { combineReducers } from 'redux';

const reducer = (state = 0, { type, payload }) => {
  switch (type) {
    case 'FILTER':
      return payload;
    default:
      return state;
  }
};
export default combineReducers({
  test: reducer,
});
