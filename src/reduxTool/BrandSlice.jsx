import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { usePostDataWithImage } from "../hooks/usePostDate";
import { UseGetData } from "../hooks/useGetData";

const initialState = {
    data: [],
    isloading: true,
    error: null,
    status: 1

}


export const CreateBrand = createAsyncThunk(
    "createBrand",
    async (brand, thunkAPI) => {
        try {
            const resp = await usePostDataWithImage("/api/v1/brands", brand)
            return resp
        } catch (error) {
            return thunkAPI.rejectWithValue('something went wrong');
        }
    }
)


export const GetAllBrand = createAsyncThunk(
    "GetAllBrand",
    async (thunkAPI) => {
        try {
            const resp = await UseGetData("/api/v1/brands")
            return resp
        } catch (error) {
            return thunkAPI.rejectWithValue('something went wrong');
        }
    }
)



const brandSlice = createSlice({
    name: "brand",
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            // * create brand
            .addCase(CreateBrand.pending, (state) => {
                state.isloading = true
            })
            .addCase(CreateBrand.fulfilled, (state, action) => {
                state.data = action.payload.data.data;
                state.status = action.payload.status;
                state.isloading = false
            })
            .addCase(CreateBrand.rejected, (state, action) => {
                state.error = action
            })

            // * get all brand 
            .addCase(GetAllBrand.pending, (state) => {
                state.isloading = true
            })
            .addCase(GetAllBrand.fulfilled, (state, action) => {
                state.data = action.payload.data;
                state.isloading = false
            })
            .addCase(GetAllBrand.rejected, (state, action) => {
                state.error = action
            })

    }
})

export default brandSlice.reducer