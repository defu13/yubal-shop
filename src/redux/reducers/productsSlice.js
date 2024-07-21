import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchProducts, addProduct, removeProduct, editProduct } from "../../api/products";

// Thunks
export const getProducts = createAsyncThunk(
    "products/getProducts",
    async () => {
        const data = await fetchProducts();
        return data;
    }
);

export const createProduct = createAsyncThunk(
    "products/createProduct",
    async (newProduct) => {
        const data = await addProduct(newProduct);
        return data;
    }
);

export const updateProduct = createAsyncThunk(
    "products/updateProduct",
    async ({ id, updatedProduct }) => {
        const data = await editProduct(id, updatedProduct);
        return data;
    }
);

export const deleteProduct = createAsyncThunk(
    "products/deleteProduct",
    async (id) => {
        const data = removeProduct(id);
        return data;
    }
);

// Slice
const productsSlice = createSlice({
    name: "products",
    initialState: {
        products: [],
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getProducts.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getProducts.fulfilled, (state, action) => {
                state.loading = false;
                state.products = action.payload;
            })
            .addCase(getProducts.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            .addCase(createProduct.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(createProduct.fulfilled, (state, action) => {
                state.loading = false;
                state.products = action.payload;
            })
            .addCase(createProduct.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            .addCase(updateProduct.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(updateProduct.fulfilled, (state, action) => {
                state.loading = false;
                state.products = action.payload;
            })
            .addCase(updateProduct.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            .addCase(deleteProduct.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(deleteProduct.fulfilled, (state, action) => {
                state.loading = false;
                state.products = action.payload;
            })
            .addCase(deleteProduct.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export default productsSlice.reducer;