

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
export const fetchProdcuts = createAsyncThunk('productsSlice/fetchProdcuts', async () => {
  const res = await fetch('https://fakestoreapi.com/products');
  const data = await res.json();
  return data
})
export const productsSlice = createSlice({
  name: 'productsSlice',
  initialState : [],
  reducers: {

  },
  extraReducers:(builder) => {
    builder.addCase(fetchProdcuts.fulfilled, (state,action)=> {
      return action.payload
    })
  }
})


export const {} = productsSlice.actions

export default productsSlice.reducer

// import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

// export const fetchProducts = createAsyncThunk('productsSlice/fetchProducts', async () => {
//   try {
//     const res = await fetch('https://fakestoreapi.com/products');
//     const data = await res.json();
//     console.log(data);
//     return data;
//   } catch (error) {
//     // You can handle the error here, e.g., throw or return an error object.
//     throw error;
//   }
// });

// export const productsSlice = createSlice({
//   name: 'productsSlice',
//   initialState: { data: [], loading: 'idle', error: null },
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchProducts.pending, (state) => {
//         state.loading = 'pending';
//       })
//       .addCase(fetchProducts.fulfilled, (state, action) => {
//         state.loading = 'fulfilled';
//         state.data = action.payload;
//       })
//       .addCase(fetchProducts.rejected, (state, action) => {
//         state.loading = 'rejected';
//         state.error = action.error.message; // You can handle the error message here.
//       });
//   },
// });

// export const {} = productsSlice.actions;

// export default productsSlice.reducer;
