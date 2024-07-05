import { createSlice } from '@reduxjs/toolkit';



const initialState = {
  currentUser: null,
  token: null,
  mySuppliersIds: [],
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
    toggleIsLoading: (state) => {
      state.isLoading = true;
      state.isLoading = false; 
    }, 
    updateUser: (state, action) => {
      state.currentUser = action.payload; // Update currentUser with updated data
    },
    updateFavoritesStart(state) {
      state.isLoading = true
    },
    // TODO: updateFavorites reducer
    updateFavorites(state, action) {
      const { supplierId } = action.payload;
      // check if supplierId does not exist and Adds it  / otherwise deletes it 
      if (state.currentUser) {
        const isFavorite = state.currentUser.favoriteSuppliers.includes(supplierId);
        state.currentUser.favoriteSuppliers = isFavorite
          ? state.currentUser.favoriteSuppliers.filter(id => id.toString() !== supplierId) //Remove if already favorite 
          : [...state.currentUser.favoriteSuppliers, supplierId]; // Add if not favorite 

      }
      state.mySuppliersIds = state.currentUser.favoriteSuppliers;
      state.isLoading = false
    },
    updateFavoritesFailed(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    }
  },
});
export const { signInStart, signInSuccess, signInFailed, signOut, updateUser, updateFavorites, updateFavoritesStart, updateFavoritesFailed, toggleIsLoading } = userSlice.actions;
export default userSlice.reducer;