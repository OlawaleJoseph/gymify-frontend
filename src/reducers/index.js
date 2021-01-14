import { combineReducers } from 'redux';
import authReducer from './auth';
import trainersReducer from './trainers';

export default combineReducers({
  auth: authReducer,
  trainers: trainersReducer,
});
