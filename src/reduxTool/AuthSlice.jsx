import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { usePostData } from "../hooks/usePostDate"
import { useUpdateData } from "../hooks/useUpdateDate"


const initialState = {
    user: [],
    code: "",
    Registeruser: [],
    forgetNumber: "",
    isloading: false,
    status: 1,
    error: null

}

export const LoginPage = createAsyncThunk(
    "loginUser",
    async (userData, thunkAPI) => {
        try {
            const resp = await usePostData("/api/v1/auth/login", userData)
            return resp
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
)

export const RegisterPage = createAsyncThunk(
    "registerUser",
    async (userData, thunkAPI) => {
        try {
            const resp = await usePostData("/api/v1/auth/signup", userData)
            return resp
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
)
export const ForgetPass = createAsyncThunk(
    "forget pass",
    async (userData, thunkAPI) => {
        try {
            const resp = await usePostData("/api/v1/auth/forgotPasswords", userData)
            return resp
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
)
export const VerifyResetCode = createAsyncThunk(
    "verifyResetCode",
    async (code, thunkAPI) => {
        try {
            const resp = await usePostData("/api/v1/auth/verifyResetCode", code)
            return resp
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
)
export const ResetPassword = createAsyncThunk(
    "ResetPassword",
    async (newData, thunkAPI) => {
        try {
            const resp = await useUpdateData("/api/v1/auth/resetPassword", newData)
            return resp
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
)





const AuthSlice = createSlice({
    name: "authentication",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            // .login Page
            .addCase(LoginPage.pending, (state) => {
                state.isloading = true
            })
            .addCase(LoginPage.fulfilled, (state, action) => {
                state.user = action.payload.data
                state.status = action.payload.status
                state.isloading = false
            })
            .addCase(LoginPage.rejected, (state, action) => {
                state.error = action.payload.response.data
                state.isloading = false
            })



            // .register Page
            .addCase(RegisterPage.pending, (state) => {
                state.isloading = true
            })
            .addCase(RegisterPage.fulfilled, (state, action) => {
                state.Registeruser = action.payload.data
                state.status = action.payload.status
                state.isloading = false
            })
            .addCase(RegisterPage.rejected, (state, action) => {
                state.error = action.payload.response.data
                state.isloading = false
            })
            // .forget password
            .addCase(ForgetPass.pending, (state) => {
                state.isloading = true
            })
            .addCase(ForgetPass.fulfilled, (state, action) => {
                state.forgetNumber = action.payload.data
                state.error = null
                state.isloading = false
            })
            .addCase(ForgetPass.rejected, (state, action) => {
                state.error = action.payload.response.data
                state.isloading = false
            })

            // verify Reset  code
            .addCase(VerifyResetCode.pending, (state) => {
                state.isloading = true
            })
            .addCase(VerifyResetCode.fulfilled, (state, action) => {
                state.code = action.payload.data
                state.error = null
                state.isloading = false
            })
            .addCase(VerifyResetCode.rejected, (state, action) => {
                state.error = action.payload.response.data
                state.isloading = false
            })

            // Reset Password
            .addCase(ResetPassword.pending, (state) => {
                state.isloading = true
            })
            .addCase(ResetPassword.fulfilled, (state, action) => {
                state.code = action.payload
                state.error = null
                state.isloading = false
            })
            .addCase(ResetPassword.rejected, (state, action) => {
                state.error = action.payload.response.data
                state.isloading = false
            })
    }
})

export default AuthSlice.reducer