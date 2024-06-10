import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';


const initialState = {
  suppliers: [],
  loading: false,
  favoriteSuppliers: [],
  error: null,
};

export const fetchSuppliers = createAsyncThunk(
  'suppliers/fetchSuppliers',
  async () => {
    const response = await fetch('http://localhost:3000/suppliers');
    return response.json();
  }
);

export const fetchSuppliersById = createAsyncThunk(
  'suppliers/fetchSuppliersById',
  async (supplierIds) => {
    const fetchedSuppliers = [];
    for (const id of supplierIds) {
      const response = await fetch(
        `http://localhost:3000/suppliers/${id}`
      );
      const resp = await response.json();
      fetchedSuppliers.push(resp)
    }
    return fetchedSuppliers;
  }
);

const suppliersSlice = createSlice({
  name: 'suppliers',
  initialState,
  reducers: {
    resetFavorites: (state) => {
      state.favoriteSuppliers = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSuppliers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchSuppliers.fulfilled, (state, action) => {
        state.loading = false;
        state.suppliers = action.payload;
      })
      .addCase(fetchSuppliers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(fetchSuppliersById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchSuppliersById.fulfilled, (state, action) => {
        state.loading = false;
        state.favoriteSuppliers = action.payload;
      })
      .addCase(fetchSuppliersById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      }) 
  },
});

export const { resetFavorites } = suppliersSlice.actions;

export default suppliersSlice.reducer;