/**
 * Redux store
 */

 import { createStore, compose, applyMiddleware } from 'redux';
 import { createEpicMiddleware } from 'redux-observable';
 
 import { rootEpic } from './epics/rootEpic';
 import rootReducer from './reducers';
 
 const configureStore = (initialState: any) => {
   // create epic middleware
   const epicMiddleware = createEpicMiddleware();
 
   // redux configuration
   const middleware = [epicMiddleware];
   const enhancers = [];
 
   // apply middleware & compose Enhancers
   enhancers.push(applyMiddleware(...middleware));
 
   const composeEnhancers =
     (typeof window !== 'undefined' && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
 
   const enhancer = composeEnhancers(...enhancers);
 
   // create Store
   const store = createStore(rootReducer, initialState, enhancer);
 
   epicMiddleware.run(rootEpic);
 
   return store;
 };
 
 export default configureStore;
 