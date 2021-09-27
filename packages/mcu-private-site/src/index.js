import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './state';
import { fbConfig, ReactReduxFirebaseProvider, getFirebase } from './firebase';
import { theme, ThemeProvider } from 'mcu-ui-kit';

const wrapWithProvider = ({ element }) => {
  const store = configureStore();
  const firebase = getFirebase();
  const rrfProps = {
    firebase,
    config: fbConfig,
    dispatch: store.dispatch
    // createFirestoreInstance // <- needed if using firestore
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
