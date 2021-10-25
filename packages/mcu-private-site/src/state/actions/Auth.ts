import {
  actions
} from '../actionTypes';

export const userSignUp = (user: any) => ({
  type: actions.SIGNUP_USER,
  payload: user
});

export const userSignIn = (user: any) => ({
  type: actions.SIGNIN_USER,
  payload: user
});

export const userSignOut = () => ({
  type: actions.SIGNOUT_USER
});

export const userSignUpSuccess = (authUser: any) => ({
  type: actions.SIGNUP_USER_SUCCESS,
  payload: authUser
});

export const userSignInSuccess = (authUser: any) => ({
  type: actions.SIGNIN_USER_SUCCESS,
  payload: authUser
});

export const userSignOutSuccess = () => ({
  type: actions.SIGNOUT_USER_SUCCESS
});

export const showAuthMessage = (message: any) => ({
  type: actions.SHOW_MESSAGE,
  payload: message
});

export const setInitUrl = (url: any) => ({
  type: actions.INIT_URL,
  payload: url
});

export const showAuthLoader = () => ({
  type: actions.ON_SHOW_LOADER
});

export const userGoogleSignIn = () => ({
  type: actions.SIGNIN_GOOGLE_USER
});

export const userGoogleSignInSuccess = (authUser: any) => ({
  type: actions.SIGNIN_GOOGLE_USER_SUCCESS,
  payload: authUser
});

export const userFacebookSignIn = () => ({
  type: actions.SIGNIN_FACEBOOK_USER
});

export const userFacebookSignInSuccess = (authUser: any) => ({
  type: actions.SIGNIN_FACEBOOK_USER_SUCCESS,
  payload: authUser
});

export const userTwitterSignIn = () => ({
  type: actions.SIGNIN_TWITTER_USER
});

export const userTwitterSignInSuccess = (authUser: any) => ({
  type: actions.SIGNIN_TWITTER_USER_SUCCESS,
  payload: authUser
});

export const userGithubSignIn = () => ({
  type: actions.SIGNIN_GITHUB_USER
});

export const userGithubSignInSuccess = (authUser: any) => ({
  type: actions.SIGNIN_GITHUB_USER_SUCCESS,
  payload: authUser
});

export const hideMessage = () => ({
  type: actions.HIDE_MESSAGE
});

export const hideAuthLoader = () => ({
  type: actions.ON_HIDE_LOADER
});
