import { actions } from '../actionTypes';
import { auth, googleAuthProvider } from '../../firebase';
import { combineEpics, ofType } from 'redux-observable';
import { catchError, map, switchMap } from 'rxjs/operators';
import { from, of } from 'rxjs';
import {
  showAuthMessage,
  userSignUpSuccess,
  userSignOutSuccess,
  userSignInSuccess,
  userGoogleSignInSuccess
} from '../actions/Auth';

/**
 * Epics
 */
const createUserWithEmailPassword = (action$: any, state: any) =>
  action$.pipe(
    ofType(actions.SIGNUP_USER),
    switchMap((action: any) => {
      return from(signUp(action.payload.email, action.payload.password)).pipe(
        map((authUser: any) => {
          console.dir({ authUser });

          if (authUser.message) {
            return showAuthMessage(authUser.message);
          } else {
            localStorage.setItem('user_id', authUser.user.uid);

            return userSignUpSuccess(authUser.user.uid);
          }
        }),
        catchError(error => {
          console.dir({ error });
          return of(showAuthMessage(error));
        })
      );
    })
  );

const signInUserWithEmailPasswordRequest = (action$: any) =>
  action$.pipe(
    ofType(actions.SIGNIN_USER),
    switchMap((action: any) => {
      return from(signIn(action.payload.email, action.payload.password)).pipe(
        map((authUser: any) => {
          console.dir({ authUser });

          if (authUser.message) {
            return showAuthMessage(authUser.message);
          } else {
            localStorage.setItem('user_id', authUser.user.uid);

            return userSignInSuccess(authUser.user.uid);
          }
        }),
        catchError(error => {
          console.dir({ error });
          return of(showAuthMessage(error));
        })
      );
    })
  );

const logout = (action$: any, state: any) =>
  action$.pipe(
    ofType(actions.SIGNOUT_USER),
    switchMap(() => {
      return from(signOut()).pipe(
        map((signOutUser: any) => {
          console.dir({ signOutUser });

          if (signOutUser === undefined) {
            localStorage.removeItem('user_id');
            return userSignOutSuccess();
          } else {
            return showAuthMessage(signOutUser.message);
          }
        }),
        catchError(error => {
          console.dir({ error });
          return of(showAuthMessage(error));
        })
      );
    })
  );
const signInUserWithGoogle = (action$: any, state: any) =>
  action$.pipe(
    ofType(actions.SIGNIN_GOOGLE_USER),
    switchMap(() => {
      return from(signInWithGoogle()).pipe(
        map((authUser: any) => {
          console.dir({ authUser });

          if (authUser.message) {
            return showAuthMessage(authUser.message);
          } else {
            localStorage.setItem('user_id', authUser.user.uid);
            return userGoogleSignInSuccess(authUser.user.uid);
          }
        }),
        catchError(error => {
          console.dir({ error });
          return of(showAuthMessage(error));
        })
      );
    })
  );
/**
 * Side Effects
 */
const signOut = () => auth.signOut();
const signUp = (email: any, password: any) => auth.createUserWithEmailAndPassword(email, password);
const signIn = (email: any, password: any) => auth.signInWithEmailAndPassword(email, password);
const signInWithGoogle = () => auth.signInWithPopup(googleAuthProvider);

const authEpic = combineEpics(
  createUserWithEmailPassword,
  signInUserWithEmailPasswordRequest,
  logout,
  signInUserWithGoogle
);

export default authEpic;
