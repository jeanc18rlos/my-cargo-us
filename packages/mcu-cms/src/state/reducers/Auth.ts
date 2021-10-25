import * as actionTypes from '../actionTypes';
import { Action } from 'redux-actions';

export interface AppState {
  loader: boolean;
  alertMessage: string;
  showMessage: boolean;
  initURL: string;
  authUser: any;
}

const initialState = {
  loader: false,
  alertMessage: '',
  showMessage: false,
  initURL: '',
  authUser: typeof window !== 'undefined' ? localStorage.getItem('user_id') : null
};

const authReducer = (state: AppState = initialState, action: Action<any>): AppState => {
  switch (action.type) {
    case actionTypes.SIGNUP_USER_SUCCESS: {
      return {
        ...state,
        loader: false,
        authUser: action.payload
      };
    }
    case actionTypes.SIGNIN_USER_SUCCESS: {
      return {
        ...state,
        loader: false,
        authUser: action.payload
      };
    }
    case actionTypes.INIT_URL: {
      return {
        ...state,
        initURL: action.payload
      };
    }
    case actionTypes.SIGNOUT_USER_SUCCESS: {
      return {
        ...state,
        authUser: null,
        initURL: '/',
        loader: false
      };
    }
    case actionTypes.SHOW_MESSAGE: {
      return {
        ...state,
        alertMessage: action.payload,
        showMessage: true,
        loader: false
      }
    }
    case actionTypes.HIDE_MESSAGE: {
      return {
        ...state,
        alertMessage: '',
        showMessage: false,
        loader: false
      }
    }
    case actionTypes.SIGNIN_GOOGLE_USER_SUCCESS: {
      return {
        ...state,
        loader: false,
        authUser: action.payload
      };
    }
    case actionTypes.SIGNIN_FACEBOOK_USER_SUCCESS: {
      return {
        ...state,
        loader: false,
        authUser: action.payload
      };
    }
    case actionTypes.SIGNIN_TWITTER_USER_SUCCESS: {
      return {
        ...state,
        loader: false,
        authUser: action.payload
      };
    }
    case actionTypes.SIGNIN_GITHUB_USER_SUCCESS: {
      return {
        ...state,
        loader: false,
        authUser: action.payload
      };
    }
    case actionTypes.ON_SHOW_LOADER: {
      return {
        ...state,
        loader: true
      }
    }
    case actionTypes.ON_HIDE_LOADER: {
      return {
        ...state,
        loader: false
      }
    }
    default:
      return state;
  }
};

export default authReducer;
