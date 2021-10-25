import { combineReducers } from 'redux';
import { firebaseReducer as firebase } from '../../firebase';
import authReducer from './Auth';

const rootReducer = combineReducers({
  auth: authReducer,
  firebase
});
export default rootReducer;
