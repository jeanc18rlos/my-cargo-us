import React from 'react';
import { InitialLayoutState, Layoutreducer } from './reducers';

const Store = React.createContext({});

export const useStore: () => any = () => React.useContext(Store);

export const LayoutProvider = ({ children }: any) => {
  const [globalState, dispatch] = React.useReducer(Layoutreducer, InitialLayoutState);

  return <Store.Provider value={[globalState, dispatch]}>{children}</Store.Provider>;
};
