import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { usePostData } from "../hooks/usePostDate";
import { useUpdateData } from "../hooks/useUpdateDate";








const initialState = {
    coupon: [],
    checkOut: [],
    isLoading: false,
    error: null

}

export const MakeOrderCash = createAsyncThunk(
    "MakeOrderCash",
    async (data, thunkAPI) => {
        try {
            const resp = await usePostData(`/api/v1/orders/${data.id}`, data.datails)
            return resp
        } catch (error) {
            return thunkAPI.rejectWithValue('something went wrong');
        }
    })
export const ApplyCouponOnProduct = createAsyncThunk(
    "ApplyCouponOnProduct",
    async (data, thunkAPI) => {
        try {
            const resp = await useUpdateData(`/api/v1/cart/applyCoupon`, data)
            return resp
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    })




const CheckOutSlice = createSlice({

    name: "checkout",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            // checkOut
            .addCase(MakeOrderCash.pending, (state) => {
                state.isLoading = true
            })
            .addCase(MakeOrderCash.fulfilled, (state, action) => {
                state.checkOut = action.payload.data
                state.isLoading = false
            })
            .addCase(MakeOrderCash.rejected, (state, action) => {
                state.isLoading = false
                state.error = action
            })

            // apply coupon 
            .addCase(ApplyCouponOnProduct.pending, (state) => {
                state.isLoading = true
            })
            .addCase(ApplyCouponOnProduct.fulfilled, (state, action) => {
                state.coupon = action.payload.data
                state.isLoading = false
                state.error = null
            })
            .addCase(ApplyCouponOnProduct.rejected, (state, action) => {
                state.isLoading = false
                state.coupon = []
                state.error = action.payload.response.data
            })
    }
})


export default CheckOutSlice.reducer