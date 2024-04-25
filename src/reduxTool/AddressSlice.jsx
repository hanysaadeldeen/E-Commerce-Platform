import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { UseGetDataToken } from "../hooks/useGetData"
import { usePostData } from "../hooks/usePostDate"
import { useUpdateData } from "../hooks/useUpdateDate"
import useDeleteData from "../hooks/useDeleteData"


const initialState = {
    Address: [],
    NewAddress: [],
    SpecificAddress: [],
    isloading: false,
    isLoadingAdd: false,
    isloadingdelete: false,
    error: null,
    status: "",
}
export const Alladress = createAsyncThunk(
    "getAlladress",
    async (thunkAPI) => {
        try {
            const resp = await UseGetDataToken("/api/v1/addresses")
            return resp
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
)
export const AddAdress = createAsyncThunk(
    "AddAdress",
    async (data, thunkAPI) => {
        try {
            const resp = await usePostData("/api/v1/addresses", data)
            return resp
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
)
export const DeleteAdress = createAsyncThunk(
    "DeleteAdress",
    async (id, thunkAPI) => {
        try {
            const resp = await useDeleteData(`/api/v1/addresses/${id}`)
            return resp
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
)
export const UpdateAddress = createAsyncThunk(
    "UpdateAddress",
    async (data, thunkAPI) => {
        try {
            const resp = await useUpdateData(`/api/v1/addresses/${data.id}`, data.data)
            return resp
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
)
export const GetSpecificeAddresss = createAsyncThunk(
    "GetSpecificeAddresss",
    async (id, thunkAPI) => {
        try {
            const resp = await UseGetDataToken(`/api/v1/addresses/${id}`)
            return resp
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
)


const AddressSlice = createSlice({
    name: "address",
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder


            // get All addresses
            .addCase(Alladress.pending, (state) => {
                state.isloading = true
            })
            .addCase(Alladress.fulfilled, (state, action) => {
                state.Address = action.payload.data
                state.isloading = false
            })
            .addCase(Alladress.rejected, (state, action) => {
                state.error = action.payload
                state.isloading = false
            })


            // add adress
            .addCase(AddAdress.pending, (state) => {
                state.isLoadingAdd = true
            })
            .addCase(AddAdress.fulfilled, (state, action) => {
                state.NewAddress = action.payload.data
                state.status = action.payload.status

                state.isLoadingAdd = false
            })
            .addCase(AddAdress.rejected, (state, action) => {
                state.error = action.payload
                state.isLoadingAdd = false
            })



            // delete adress
            .addCase(DeleteAdress.pending, (state) => {
                state.isloadingdelete = true
            })
            .addCase(DeleteAdress.fulfilled, (state, action) => {
                state.status = action.payload
                state.isloadingdelete = false
                // state.Address = action.payload.data
            })
            .addCase(DeleteAdress.rejected, (state, action) => {
                state.error = action.payload.message
                state.isloadingdelete = false
            })

            // Get Specifice Addresss
            .addCase(GetSpecificeAddresss.pending, (state) => {
                state.isloading = true
            })
            .addCase(GetSpecificeAddresss.fulfilled, (state, action) => {
                state.SpecificAddress = action.payload.data
                state.isloading = false
            })
            .addCase(GetSpecificeAddresss.rejected, (state, action) => {
                state.error = action.payload.message
                state.isloading = false
            })

            // update address
            .addCase(UpdateAddress.pending, (state) => {
                state.isloading = true
            })
            .addCase(UpdateAddress.fulfilled, (state, action) => {
                state.Address = action.payload.data.data
                state.status = action.payload.status
                state.isloading = false
            })
            .addCase(UpdateAddress.rejected, (state, action) => {
                state.error = action.payload.message
                state.isloading = false
            })
    }
})
export default AddressSlice.reducer