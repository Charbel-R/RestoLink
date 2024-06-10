import { createSlice } from '@reduxjs/toolkit';



const initialState = {
  currentUser: null,
  token: null,
  mySuppliersIds: [],
  mySuppliersData: [],
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
      state.mySuppliersIds = action.payload.userInfo.favoriteSuppliers;
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
      state.mySuppliersIds = null;
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
  },
});

export const { signInStart, signInSuccess, signInFailed, signOut, updateUser, updateFavorites } = userSlice.actions;
export default userSlice.reducer;