import { combineReducers } from 'redux';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import { contactsReducer } from './contactSlice';
import { filterReducer } from './filterSlice';
import { authReducer } from './authSlice';

const persistConfig = {
  key: 'token',
  storage,
  blacklist: ['isLoading', 'error'],
};
const persistedReducer = persistReducer(persistConfig, authReducer);

export const rootReducer = combineReducers({
  auth: persistedReducer,
  contacts: contactsReducer,
  filter: filterReducer,
});
