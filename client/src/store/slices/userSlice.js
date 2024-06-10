import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentUser: null,
  token: null,
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
      state.currentUser = action.payload.userInfo;
      state.token = action.payload.accessToken;
      state.isLoading = false;
      state.error = false;
    },
    signInFailed: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    signOut: (state) => {
      state.currentUser = null;
      state.token = null;
      state.isLoading = false;
      state.error = false;
    },
    updateUser: (state, action) => {
      state.currentUser = action.payload; // Update currentUser with updated data
    },
    updateFavorites(state, action) {
      const { supplierId } = action.payload;
      if (state.currentUser) {
        const isFavorite = state.currentUser.favoriteSuppliers.includes(supplierId);
        state.currentUser.favoriteSuppliers = isFavorite
          ? state.currentUser.favoriteSuppliers.filter(id => id !== supplierId)
          : [...state.currentUser.favoriteSuppliers, supplierId];
      }
    },
    setToken(state, action) { // New action to set the token
      state.token = action.payload;
    },
  },
});

export const { signInStart, signInSuccess, signInFailed, signOut, updateUser, updateFavorites, setToken} = userSlice.actions;
export default userSlice.reducer;