import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';


const initialState = {
  suppliers: [],
  loading: false,
  error: null,
};

export const fetchSuppliers = createAsyncThunk(
  'suppliers/fetchSuppliers',
  async () => {
    const response = await fetch('http://localhost:3000/suppliers');
    return response.json();
  }
);

export const updateSupplier = createAsyncThunk(
  'suppliers/updateSupplier',
  async (supplier) => {
    // Replace with your actual API call to update the supplier
    const response = await fetch(`http://localhost:3000/suppliers/${supplier._id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(supplier),
    });
    return response.json();
  }
);

const suppliersSlice = createSlice({
  name: 'suppliers',
  initialState,
  reducers: {},
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
      .addCase(updateSupplier.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(updateSupplier.fulfilled, (state, action) => {
        state.isLoading = false;
        // Update the supplier object in the state based on the response data
        const updatedSupplier = action.payload;
        const index = state.suppliers.findIndex((sup) => sup.id === updatedSupplier.id);
        if (index !== -1) {
          state.suppliers[index] = updatedSupplier;
        }
      })
      .addCase(updateSupplier.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export default suppliersSlice.reducer;