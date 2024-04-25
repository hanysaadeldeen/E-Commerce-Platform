
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { UseGetDataToken } from "../hooks/useGetData"
import { useUpdateData } from "../hooks/useUpdateDate"

const initialState = {
    userInfo: [],
    order: [],
    isloading: false,
    error: null,
    status: ""
}

export const GetLogedUserOrder = createAsyncThunk(
    "GetLogedUserOrder",
    async (thunkAPI) => {
        try {
            const resp = await UseGetDataToken(`/api/v1/orders`)
            return resp
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
)
export const GetLogedUser = createAsyncThunk(
    "GetLogedUser",
    async (thunkAPI) => {
        try {
            const resp = await UseGetDataToken(`/api/v1/users/getMe`)
            return resp
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
)
export const UpdateCurrentPass = createAsyncThunk(
    "UpdateCurrentPass",
    async (data, thunkAPI) => {
        try {
            const resp = await useUpdateData(`/api/v1/users/changeMyPassword`, data)
            return resp
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
)
export const UpdateUserInform = createAsyncThunk(
    "UpdateUserInform",
    async (data, thunkAPI) => {
        try {
            const resp = await useUpdateData(`/api/v1/users/updateMe`, data)
            return resp
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
)

const UserInfoReducer = createSlice({
    name: "userInfo",
    initialState,
    reducer: {

    },
    extraReducers: (builder) => {
        builder
            // get user information
            .addCase(GetLogedUser.pending, (state) => {
                state.isloading = true
            })
            .addCase(GetLogedUser.fulfilled, (state, action) => {
                state.userInfo = action.payload.data
                state.isloading = false
            })
            .addCase(GetLogedUser.rejected, (state, action) => {
                state.error = action.payload
                state.isloading = false
            })

            //udpate user password 
            .addCase(UpdateCurrentPass.pending, (state) => {
                state.isloading = true
            })
            .addCase(UpdateCurrentPass.fulfilled, (state, action) => {
                state.status = action.payload
                state.isloading = false
                state.error = null
            })
            .addCase(UpdateCurrentPass.rejected, (state, action) => {
                state.error = action.payload.response.data
                state.isloading = false
            })

            //Get  user orders 
            .addCase(GetLogedUserOrder.pending, (state) => {
                state.isloading = true
            })
            .addCase(GetLogedUserOrder.fulfilled, (state, action) => {
                state.order = action.payload
                state.isloading = false
                state.error = null
            })
            .addCase(GetLogedUserOrder.rejected, (state, action) => {
                state.error = action.payload.response.data
                state.isloading = false
            })
    }

})

export default UserInfoReducer.reducer
