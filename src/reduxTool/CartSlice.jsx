import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { usePostData } from "../hooks/usePostDate";
import { UseGetDataToken } from "../hooks/useGetData";
import { useUpdateData } from "../hooks/useUpdateDate";
import useDeleteData from "../hooks/useDeleteData";




const initialState = {
    Cart: [],
    AllCart: [],
    isLoaing: false,
    error: null
}



export const AddToCart = createAsyncThunk(
    "AddtoCart",
    async (data, thunkAPI) => {
        try {
            const resp = await usePostData("/api/v1/cart", data)
            return resp
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    })
export const GetUserCart = createAsyncThunk(
    "GetUserCart",
    async (thunkAPI) => {
        try {
            const resp = await UseGetDataToken("/api/v1/cart")
            return resp
        } catch (error) {
            return thunkAPI.rejectWithValue('something went wrong');
        }
    })
export const DeleteOneCart = createAsyncThunk(
    "DeleteOneCart",
    async (id, thunkAPI) => {
        try {
            const resp = await useDeleteData(`/api/v1/cart/${id}`)
            return resp
        } catch (error) {
            return thunkAPI.rejectWithValue('something went wrong');
        }
    })

export const DeleteAllCart = createAsyncThunk(
    "DeleteAllCart",
    async (thunkAPI) => {
        try {
            const resp = await useDeleteData("/api/v1/cart")
            return resp
        } catch (error) {
            return thunkAPI.rejectWithValue('something went wrong');
        }
    })
export const UpdateProductCartQuant = createAsyncThunk(
    "UpdateProductCartQuant",
    async (data, thunkAPI) => {

        try {
            const resp = await useUpdateData(`/api/v1/cart/${data.id}`, data.qtn)
            return resp
        } catch (error) {
            return thunkAPI.rejectWithValue('something went wrong');
        }
    })


const CartSlice = createSlice({
    name: "CartSlice",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            //  Add To Cart
            .addCase(AddToCart.pending, (state) => {
                state.isLoaing = true
            })
            .addCase(AddToCart.fulfilled, (state, action) => {
                state.Cart = action.payload
                state.error = null
                state.isLoaing = false
            })
            .addCase(AddToCart.rejected, (state, action) => {
                state.error = action.payload.response.data
                state.isLoaing = false
            })
            // Get User Cart
            .addCase(GetUserCart.pending, (state) => {
                state.isLoaing = true
            })
            .addCase(GetUserCart.fulfilled, (state, action) => {
                state.AllCart = action.payload
                state.isLoaing = false
            })
            .addCase(GetUserCart.rejected, (state, action) => {
                state.error = action.payload
                state.isLoaing = false
                state.AllCart = []
            })

            // Delete One Cart
            .addCase(DeleteOneCart.pending, (state) => {
                state.isLoaing = true
            })
            .addCase(DeleteOneCart.fulfilled, (state, action) => {
                state.AllCart = action.payload
                state.isLoaing = false
            })
            .addCase(DeleteOneCart.rejected, (state, action) => {
                state.error = action.payload
                state.isLoaing = false
            })
            // Delete All Cart
            .addCase(DeleteAllCart.pending, (state) => {
                state.isLoaing = true
            })
            .addCase(DeleteAllCart.fulfilled, (state,) => {
                state.AllCart = []
                state.isLoaing = false
            })
            .addCase(DeleteAllCart.rejected, (state, action) => {
                state.error = action.payload
                state.isLoaing = false
            })

            // Update Product Cart Quantaty
            .addCase(UpdateProductCartQuant.pending, (state) => {
                state.isLoaing = true
            })
            .addCase(UpdateProductCartQuant.fulfilled, (state, action) => {
                state.AllCart = action.payload.data
                state.isLoaing = false
            })
            .addCase(UpdateProductCartQuant.rejected, (state, action) => {
                state.error = action.payload
                state.isLoaing = false
            })
    }
})


export default CartSlice.reducer