import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { usePostData } from "../hooks/usePostDate";
import useDeleteData from "../hooks/useDeleteData";
import { UseGetDataToken } from "../hooks/useGetData";




const initialState = {
    wishLish: [],
    newProductWish: [],
    isLoading: false,
    error: null,
    status: ""
}

export const AddProductToFav = createAsyncThunk(
    "AddProductToFav",
    async (id, thunkAPI) => {
        try {
            const resp = await usePostData(`/api/v1/wishlist`, id)
            return resp
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    })


export const DeleteProductFav = createAsyncThunk(
    "DeleteProductFav",
    async (id, thunkAPI) => {
        try {
            const resp = await useDeleteData(`/api/v1/wishlist/${id}`)
            return resp
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    })


export const GetProductFav = createAsyncThunk(
    "GetProductFav",
    async (thunkAPI) => {
        try {
            const resp = await UseGetDataToken(`/api/v1/wishlist`)
            return resp
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    })

const WishListeSlice = createSlice({
    name: "wishLish ",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            // get All wish liste
            .addCase(GetProductFav.pending, (state) => {
                state.isLoading = true
            })
            .addCase(GetProductFav.fulfilled, (state, action) => {
                state.wishLish = action.payload.data
                state.isLoading = false
                state.error = null
            })
            .addCase(GetProductFav.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.payload
            })

            // add to wish liste
            .addCase(AddProductToFav.pending, (state) => {
                state.isLoading = true
            })
            .addCase(AddProductToFav.fulfilled, (state, action) => {
                state.newProductWish = action.payload.data
                state.isLoading = false
                state.error = null
            })
            .addCase(AddProductToFav.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.payload
            })

            // remove from wish liste
            .addCase(DeleteProductFav.pending, (state) => {
                state.isLoading = true
            })
            .addCase(DeleteProductFav.fulfilled, (state, action) => {
                state.status = action.payload
                state.isLoading = false
                state.error = null
            })
            .addCase(DeleteProductFav.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.payload
            })
    }
})

export default WishListeSlice.reducer

