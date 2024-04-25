import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { UseGetData } from "../hooks/useGetData";
import { usePostDataWithImage } from "../hooks/usePostDate";
import { useUpdateDataWithImage } from "../hooks/useUpdateDate";




// get category and post category

const initialState = {
    data: [],
    isloading: true,
    specificCat: [],
    error: null,
    status: 1
}


export const GetAllCategory = createAsyncThunk(
    "getCategoy",
    async (thunkAPI) => {
        try {
            const resp = await UseGetData("/api/v1/categories")
            return resp
        } catch (error) {
            return thunkAPI.rejectWithValue('something went wrong');
        }
    }
)
export const CreateCategory = createAsyncThunk(
    "createCategoy",
    async (category, thunkAPI) => {
        try {
            const resp = await usePostDataWithImage("/api/v1/categories", category)
            return resp
        } catch (error) {
            return thunkAPI.rejectWithValue('something went wrong');
        }
    }
)
export const GetSpecificCategory = createAsyncThunk(
    "GetspicificCategory",
    async (id, thunkAPI) => {
        try {
            const resp = await UseGetData(`/api/v1/categories/${id}`)
            return resp
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
)

export const UpdateONeCategory = createAsyncThunk(
    "updateONeCategory",
    async (data, thunkAPI) => {
        try {
            const resp = await useUpdateDataWithImage(`/api/v1/categories/${data.id}`, data.format)
            console.log(resp);
            return resp
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
)



const categorySlice = createSlice({
    name: "category",
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder
            //* get all category
            .addCase(GetAllCategory.pending, (state) => {
                state.isloading = true;
            })
            .addCase(GetAllCategory.fulfilled, (state, action) => {
                state.data = action.payload.data;
                state.isloading = false;
            })
            .addCase(GetAllCategory.rejected, (state, action) => {
                state.error = action.payload;
                state.isloading = false;

            })

            //* create a new category
            .addCase(CreateCategory.pending, (state) => {
                state.isloading = true;
            })
            .addCase(CreateCategory.fulfilled, (state, action) => {
                state.data = action.payload.data.data;
                state.status = action.payload.status;
                state.isloading = false;
            })
            .addCase(CreateCategory.rejected, (state, action) => {
                state.error = action.payload;
            })
            //* Get Specific Category
            .addCase(GetSpecificCategory.pending, (state) => {
                state.isloading = true;
            })
            .addCase(GetSpecificCategory.fulfilled, (state, action) => {
                state.specificCat = action.payload.data;
                state.status = action.payload.status;
                state.isloading = false;
            })
            .addCase(GetSpecificCategory.rejected, (state, action) => {
                state.error = action.payload;
                state.isloading = false;
            })

    }
})


export default categorySlice.reducer