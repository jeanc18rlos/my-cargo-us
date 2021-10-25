import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './state/store';
import { config, ReactReduxFirebaseProvider, firebase } from './firebase';
import { theme, ThemeProvider } from 'mcu-ui-kit';
import 'rxjs';

const wrapWithProvider = ({ element }) => {
  const store = configureStore();
  const rrfProps = {
    firebase,
    config,
    dispatch: store.dispatch
  };

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        {firebase ? <ReactReduxFirebaseProvider {...rrfProps}>{element}</ReactReduxFirebaseProvider> : <>{element}</>}
      </ThemeProvider>
    </Provider>
  );
};
export default wrapWithProvider;
