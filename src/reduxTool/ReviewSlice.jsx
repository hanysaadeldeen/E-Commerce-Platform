

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import { UseGetDataToken } from "../hooks/useGetData";
// import { useUpdateData } from "../hooks/useUpdateDate";
import { usePostData } from "../hooks/usePostDate";
import { UseGetData } from "../hooks/useGetData";
import useDeleteData from "../hooks/useDeleteData";
import { useUpdateData } from "../hooks/useUpdateDate";


const initialState = {

    AllReviews: [],
    NewReview: [],
    isLoading: false,
    status: "",
    error: null

}

export const AddReview = createAsyncThunk(
    "AdminGelAllOrder",
    async (data, thunkAPI) => {
        try {
            const resp = await usePostData("/api/v1/reviews", data)
            return resp
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    })


export const GetAllReview = createAsyncThunk(
    "GetAllReview",
    async (thunkAPI) => {
        try {
            const resp = await UseGetData("/api/v1/reviews")
            return resp
        } catch (error) {
            return thunkAPI.rejectWithValue('something went wrong');
        }
    })

export const GetReviewOnProduct = createAsyncThunk(
    "GetAllReview",
    async (id, thunkAPI) => {
        try {
            const resp = await UseGetData(`/api/v1/products/${id}/reviews`)
            return resp
        } catch (error) {
            return thunkAPI.rejectWithValue('something went wrong');
        }
    })


export const DeleteSpecificReview = createAsyncThunk(
    "DeleteSpecificReview",
    async (id, thunkAPI) => {
        try {
            const resp = await useDeleteData(`/api/v1/reviews/${id}`)
            return resp
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    })

export const UpdateSpecificReveiw = createAsyncThunk(

    "UpdateSpecificReveiw",
    async (id, thunkAPI) => {
        // console.log(id);
        try {
            const resp = await useUpdateData(`/api/v1/reviews/${id.idUpdateReveiw}`, id.info)
            return resp
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    })





const ReviewSlice = createSlice({

    name: "ReviewSlice",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            // add new review
            .addCase(AddReview.pending, (state) => {
                state.isLoading = true
            })
            .addCase(AddReview.fulfilled, (state, action) => {
                state.NewReview = action.payload.data
                state.isLoading = false
                state.error = null
            })
            .addCase(AddReview.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.payload.response.data.errors
            })

            //Get All reveiw on Product
            .addCase(GetReviewOnProduct.pending, (state) => {
                state.isLoading = true
            })
            .addCase(GetReviewOnProduct.fulfilled, (state, action) => {
                state.AllReviews = action.payload.data
                state.isLoading = false
                state.error = null
            })
            .addCase(GetReviewOnProduct.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.payload
            })

            //Delete specified review
            .addCase(DeleteSpecificReview.pending, (state) => {
                state.isLoading = true
            })
            .addCase(DeleteSpecificReview.fulfilled, (state, action) => {
                state.status = action.payload
                state.isLoading = false
                state.error = null
            })
            .addCase(DeleteSpecificReview.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.payload
            })

            //Update specified review
            .addCase(UpdateSpecificReveiw.pending, (state) => {
                state.isLoading = true
            })
            .addCase(UpdateSpecificReveiw.fulfilled, (state, action) => {
                state.NewReview = action.payload.data
                state.isLoading = false
                state.error = null
            })
            .addCase(UpdateSpecificReveiw.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.payload
            })
    }
})


export default ReviewSlice.reducer