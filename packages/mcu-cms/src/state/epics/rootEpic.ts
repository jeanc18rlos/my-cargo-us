import { catchError } from 'rxjs/operators';
import { combineEpics } from 'redux-observable';
import { default as AuthEpics } from './auth';

export const rootEpic: any = (action$: any, store$: any, dependencies: any) =>
  combineEpics(...[AuthEpics])(action$, store$, dependencies).pipe(
    catchError((error, source) => {
      console.error(error);
      return source;
    }) as any
  );
