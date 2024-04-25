import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { usePostData } from "../hooks/usePostDate";
import { UseGetDataToken } from "../hooks/useGetData";
import useDeleteData from "../hooks/useDeleteData";





const initialState = {
    Allcoupon: [],
    NewCoupon: [],
    isloading: false,
    error: null,
    status: ""

}



export const AddCoupon = createAsyncThunk(
    "createCoupon",
    async (data, thunkAPI) => {
        try {
            const resp = await usePostData("/api/v1/coupons", data)
            return resp
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
)
export const GetAllCoupon = createAsyncThunk(
    "GetAllCoupon",
    async (thunkAPI) => {
        try {
            const resp = await UseGetDataToken("/api/v1/coupons")
            return resp
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
)
export const DeleteCoupon = createAsyncThunk(
    "DeleteCoupon",
    async (id, thunkAPI) => {
        try {
            const resp = await useDeleteData(`/api/v1/coupons/${id}`)
            return resp
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
)



const CouponSlice = createSlice({
    name: "coupon",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            // admin create product
            .addCase(GetAllCoupon.pending, (state) => {
                state.isloading = false
            })
            .addCase(GetAllCoupon.fulfilled, (state, action) => {
                state.Allcoupon = action.payload
                state.isloading = false
                state.error = null
            })
            .addCase(GetAllCoupon.rejected, (state, action) => {
                state.error = action.payload
                state.isloading = false
            })

            // add  New Coupon
            .addCase(AddCoupon.pending, (state) => {
                state.isloading = false
            })
            .addCase(AddCoupon.fulfilled, (state, action) => {
                state.NewCoupon = action.payload
                state.isloading = false
                state.error = null
            })
            .addCase(AddCoupon.rejected, (state, action) => {
                state.error = action.payload
                state.isloading = false
            })

            // delete Coupon
            .addCase(DeleteCoupon.pending, (state) => {
                state.isloading = false
            })
            .addCase(DeleteCoupon.fulfilled, (state, action) => {
                state.isloading = false
                state.status = action
                state.error = null
            })
            .addCase(DeleteCoupon.rejected, (state, action) => {
                state.error = action.payload
                state.isloading = false
            })
    }
})


export default CouponSlice.reducer