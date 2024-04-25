import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { usePostData } from "../hooks/usePostDate";
import { UseGetData } from "../hooks/useGetData";


const initialState = {
    data: [],
    isloading: false,
    isloadingSub: false,
    error: null,
    status: 1
}


export const CreateSubCategory = createAsyncThunk(
    "createSubCategory",
    async (SubCat, thunkAPI) => {
        try {
            const resp = await usePostData("/api/v1/subcategories", SubCat)
            return resp
        } catch (error) {
            return thunkAPI.rejectWithValue('something went wrong');
        }
    }

)

export const GetAllSubCate = createAsyncThunk(
    "getAllSubCategory",
    async (thunkAPI) => {
        try {
            const resp = await UseGetData(`/api/v1/subcategories`)
            return resp
        } catch (error) {
            return thunkAPI.rejectWithValue('something went wrong')
        }
    }
)

export const GetSubCategoryONCategory = createAsyncThunk(
    "subCategoryOnCategory",
    async (data, thunkAPI) => {
        try {
            const resp = await UseGetData(`/api/v1/categories/${data}/subcategories`)
            return resp
        } catch (error) {
            return thunkAPI.rejectWithValue('something went wrong')
        }
    }
)



const subCategorySlice = createSlice({
    name: "SubCategory",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            // * Create Sub Category
            .addCase(CreateSubCategory.pending, (state) => {
                state.isloadingSub = true
            })
            .addCase(CreateSubCategory.fulfilled, (state, action) => {
                state.data = action.payload.data.data
                state.isloadingSub = false
                state.status = action.payload.status
            })
            .addCase(CreateSubCategory.rejected, (state, action) => {

                state.error = action.payload
            })

            // * Get All Sub Category
            .addCase(GetAllSubCate.pending, (state) => {
                state.isloading = false
            })
            .addCase(GetAllSubCate.fulfilled, (state, action) => {
                // console.log(action.payload.data)
                state.data = action.payload.data
                state.isloading = false
                state.status = action.payload.status
            })
            .addCase(GetAllSubCate.rejected, (state, action) => {

                state.error = action.payload
            })
            //* get sub categories from category
            .addCase(GetSubCategoryONCategory.pending, (state) => {
                state.isloading = false
            })
            .addCase(GetSubCategoryONCategory.fulfilled, (state, action) => {

                state.data = action.payload.data
                state.isloading = false
                state.status = action.payload.status
            })
            .addCase(GetSubCategoryONCategory.rejected, (state, action) => {

                state.error = action.payload
            })

    }
})


export default subCategorySlice.reducer

