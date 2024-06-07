import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentUser: null,
  isLoading: false,
  error: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    signInStart: (state) => {
      state.isLoading = true;
    },
    signInSuccess: (state, action) => {
      state.currentUser = action.payload;
      state.isLoading = false;
      state.error = false;
    },
    signInFailed: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    
  },
});

export const { signInStart, signInSuccess, signInFailed } = userSlice.actions;
export default userSlice.reducer;