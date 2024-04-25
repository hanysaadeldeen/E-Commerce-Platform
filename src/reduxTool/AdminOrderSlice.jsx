import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { UseGetDataToken } from "../hooks/useGetData";
import { useUpdateData } from "../hooks/useUpdateDate";


const initialState = {

    AllOrder: [],
    SpecificOrder: [],
    isLoading: false,
    error: null,
    status: "null"

}

export const AdminGelAllOrder = createAsyncThunk(
    "AdminGelAllOrder",
    async (thunkAPI) => {
        try {
            const resp = await UseGetDataToken("/api/v1/orders")
            return resp
        } catch (error) {
            return thunkAPI.rejectWithValue('something went wrong');
        }
    })

export const AdminGetSpecificeOrder = createAsyncThunk(
    "AdminGetSpecificeOrders",
    async (id, thunkAPI) => {
        try {
            const resp = await UseGetDataToken(`/api/v1/orders/${id}`)
            return resp
        } catch (error) {
            return thunkAPI.rejectWithValue('something went wrong');
        }
    })
export const UpdateOrderToPaid = createAsyncThunk(
    "UpdateOrderToPaid",
    async (id, thunkAPI) => {
        try {
            const resp = await useUpdateData(`/api/v1/orders/${id}/pay`)
            return resp
        } catch (error) {
            return thunkAPI.rejectWithValue('something went wrong');
        }
    })
export const UpdateOrderToDeliverd = createAsyncThunk(
    "UpdateOrderToDeliverd",
    async (id, thunkAPI) => {
        try {
            const resp = await useUpdateData(`/api/v1/orders/${id}/deliver`)
            return resp
        } catch (error) {
            return thunkAPI.rejectWithValue('something went wrong');
        }
    })




const AdminAllOrder = createSlice({

    name: "AdminAllOrder",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            // get All Order
            .addCase(AdminGelAllOrder.pending, (state) => {
                state.isLoading = true
            })
            .addCase(AdminGelAllOrder.fulfilled, (state, action) => {
                state.AllOrder = action.payload.data
                state.isLoading = false
            })
            .addCase(AdminGelAllOrder.rejected, (state, action) => {
                state.isLoading = false
                state.error = action
            })

            //  Get Specified Order
            .addCase(AdminGetSpecificeOrder.pending, (state) => {
                state.isLoading = true
            })
            .addCase(AdminGetSpecificeOrder.fulfilled, (state, action) => {
                state.SpecificOrder = action.payload.data
                state.isLoading = false
            })
            .addCase(AdminGetSpecificeOrder.rejected, (state, action) => {
                state.isLoading = false
                state.error = action
            })

            //  Update Order To Deliverd
            .addCase(UpdateOrderToDeliverd.pending, (state) => {
                state.isLoading = true
            })
            .addCase(UpdateOrderToDeliverd.fulfilled, (state, action) => {
                state.SpecificOrder = action.payload.data.data
                state.status = action.payload.data.status
                state.isLoading = false
            })
            .addCase(UpdateOrderToDeliverd.rejected, (state, action) => {
                state.isLoading = false
                state.error = action
            })

            //  Update Order To Paid
            .addCase(UpdateOrderToPaid.pending, (state) => {
                state.isLoading = true
            })
            .addCase(UpdateOrderToPaid.fulfilled, (state, action) => {
                state.SpecificOrder = action.payload.data.data
                state.status = action.payload.data.status
                state.isLoading = false
            })
            .addCase(UpdateOrderToPaid.rejected, (state, action) => {
                state.isLoading = false
                state.error = action
            })
    }
})


export default AdminAllOrder.reducer