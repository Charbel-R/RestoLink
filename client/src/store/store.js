import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import suppliersSlice from './slices/supplierSlice'
import userReducer from './slices/userSlice'; 

import persistStore from 'redux-persist/es/persistStore';

// Combine reducers from different slices into one rootReducer
const rootReducer = combineReducers({
  user: userReducer,
  suppliers: suppliersSlice,
});

// Define configuration for persisting the state
const persistConfig = {
  key: 'root', // Key under which the state will be stored in storage
  version: 1,
  storage,  // Use browser's local storage 
}

// Create a persisted reducer 
const persistedReducer = persistReducer(persistConfig, rootReducer)

// Configure and create the redux store
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
  })
});

export const persistor = persistStore(store);