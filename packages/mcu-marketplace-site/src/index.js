import React from "react";
import { Provider } from "react-redux";
import configureStore from "./state";
import { fbConfig, ReactReduxFirebaseProvider, getFirebase } from "./firebase";
import { ThemeProvider } from "styled-components";
import { theme } from "mcu-ui-kit";
const wrapWithProvider = ({ element }) => {
  const store = configureStore();
  const firebase = getFirebase();
  const rrfProps = {
    firebase,
    config: fbConfig,
    dispatch: store.dispatch,
    // createFirestoreInstance // <- needed if using firestore
  };
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        {firebase ? (
          <ReactReduxFirebaseProvider {...rrfProps}>
            {element}
          </ReactReduxFirebaseProvider>
        ) : (
          <>{element}</>
        )}
      </Provider>
    </ThemeProvider>
  );
};
export default wrapWithProvider;
