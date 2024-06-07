import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/userSlice'; // Import your root reducer

const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

export default store;