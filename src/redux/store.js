import { configureStore } from '@reduxjs/toolkit'
import { persistStore, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist'
import filterSlice from './slice/filterSlice';
import logger from 'redux-logger';
import {persistedReducer} from './slice/contactSlice';

const store = configureStore({
  reducer: {
    contacts: persistedReducer,
    filter: filterSlice,
  }, 
  
  middleware: (getDefaultMiddleware) => [...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }).concat(logger)],
  })

export default store;

export const persistor = persistStore(store);