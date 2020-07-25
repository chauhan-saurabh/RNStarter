import {createStore, applyMiddleware, compose} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import rootReducer from '../reducers';
import thunk from 'redux-thunk';
import {createLogger} from 'redux-logger';
import promiseMiddleware from 'redux-promise';
import {goToAuth} from '../config/navigation';
import AsyncStorage from '@react-native-community/async-storage';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['AuthReducer'],
};

export default function setup() {
  const isDev = global.isDebuggingInChrome || __DEV__;

  const logger = createLogger();

  const middleware = [applyMiddleware(...[thunk, promiseMiddleware, logger])];

  if (isDev) {
    middleware.push(
      applyMiddleware(require('redux-immutable-state-invariant').default()),
    );
  }

  const persistedReducer = persistReducer(persistConfig, rootReducer);

  const store = createStore(persistedReducer, compose(...middleware));

  if (global.isDebuggingInChrome) {
    window.store = store;
  }

  persistStore(store, {}, () => {
    goToAuth();
  });
  return store;
}
