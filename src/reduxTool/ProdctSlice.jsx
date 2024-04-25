import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { usePostDataWithImage } from "../hooks/usePostDate"
import { UseGetDataToken } from "../hooks/useGetData"
import DeleteData from "../hooks/useDeleteData"
import { useUpdateDataWithImage } from "../hooks/useUpdateDate"
// import { useUpdateDataWithImage } from "../hooks/useUpdateDate"

const initialState = {
    dataa: [],
    mostSale: [],
    isLoading: false,
    relatedProduct: [],
    updatedProduct: [],
    error: null,
    status: 1,
    paginationResult: "",
}



export const creatProdct = createAsyncThunk(
    "createProduct",
    async (product, thunkAPI) => {
        try {
            const resp = await usePostDataWithImage("/api/v1/products", product)
            return resp
        } catch (error) {
            return thunkAPI.rejectWithValue(error);

        }
    }
)
export const getAllProduct = createAsyncThunk(
    "getAllProduct",
    async (page, thunkAPI) => {
        try {
            const resp = await UseGetDataToken(`/api/v1/products?&page=${page}`)
            return resp
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
)
export const getAllProductCollection = createAsyncThunk(
    "getAllProductCollection",
    async (sort, thunkAPI) => {
        try {
            const resp = await UseGetDataToken(`/api/v1/products?limit=12`)
            return resp
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
)
export const getProductMostSale = createAsyncThunk(
    "getProductMostSale",
    async (thunkAPI) => {
        try {
            const resp = await UseGetDataToken(`/api/v1/products?limit=8&sort=-price`)
            return resp
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
)

export const getProductByFilterSearch = createAsyncThunk(
    "getProductByFilterSearch",
    async (queryString, thunkAPI) => {
        try {
            const resp = await UseGetDataToken(`/api/v1/products?${queryString}`)
            return resp
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
)


export const getSpecificProduct = createAsyncThunk(
    "getSpecificProduct",
    async (id, thunkAPI) => {
        try {
            const resp = await UseGetDataToken(`/api/v1/products/${id}`)
            return resp
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
)
export const getSubProductFromProduct = createAsyncThunk(
    "getSubProductFromProduct",
    async (id, thunkAPI) => {
        try {
            const resp = await UseGetDataToken(`/api/v1/products?category=${id}`)
            return resp
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
)



export const deleteProduct = createAsyncThunk(
    "deleteProduct",
    async (id, thunkAPI) => {
        try {
            const resp = await DeleteData(`/api/v1/products/${id}`)
            return resp
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
)


export const updateOneProduct = createAsyncThunk(
    "updateProduct",
    async (data, thunkAPI) => {
        try {
            const res = await useUpdateDataWithImage(`/api/v1/products/${data.id}`, data.format)
            console.log(res);
            return res
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
)


const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder
            // admin create product
            .addCase(creatProdct.pending, (state) => {
                state.isLoading = true
            })
            .addCase(creatProdct.fulfilled, (state, action) => {
                state.status = action.payload.status
                state.dataa = action.payload.data.data
                state.isLoading = false
            })
            .addCase(creatProdct.rejected, (state, action) => {
                state.error = action.payload
                state.isLoading = false

            })


            // this is all product you have 
            .addCase(getAllProduct.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getAllProduct.fulfilled, (state, action) => {
                state.dataa = action.payload.data
                state.isLoading = false
            })
            .addCase(getAllProduct.rejected, (state, action) => {
                state.error = action.payload
                state.isLoading = false
            })

            // this is All Product Collection
            .addCase(getAllProductCollection.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getAllProductCollection.fulfilled, (state, action) => {
                state.status = action.payload.status
                state.dataa = action.payload.data
                state.paginationResult = action.payload.paginationResult
                state.isLoading = false
            })
            .addCase(getAllProductCollection.rejected, (state, action) => {
                state.error = action.payload
                state.isLoading = false
            })

            //get product most Sale
            .addCase(getProductMostSale.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getProductMostSale.fulfilled, (state, action) => {
                state.status = action.payload.status
                state.mostSale = action.payload.data
                state.paginationResult = action.payload.paginationResult
                state.isLoading = false
            })
            .addCase(getProductMostSale.rejected, (state, action) => {
                state.error = action.payload
                state.isLoading = false
            })


            // git specific product (one item per page)
            .addCase(getSpecificProduct.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getSpecificProduct.fulfilled, (state, action) => {
                state.status = action.payload.status
                state.dataa = action.payload.data
                state.paginationResult = action.payload.paginationResult
                state.isLoading = false
            })
            .addCase(getSpecificProduct.rejected, (state, action) => {
                state.error = action.payload
                state.isLoading = false
            })

            // this is for recommended product
            .addCase(getSubProductFromProduct.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getSubProductFromProduct.fulfilled, (state, action) => {
                state.status = action.payload.status
                state.relatedProduct = action.payload.data
                state.paginationResult = action.payload.paginationResult
                state.isLoading = false
                state.error = null

            })
            .addCase(getSubProductFromProduct.rejected, (state, action) => {
                state.error = action.payload
                state.isLoading = false
            })


            // get filteration products
            .addCase(getProductByFilterSearch.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getProductByFilterSearch.fulfilled, (state, action) => {
                state.status = action.payload.status
                state.dataa = action.payload.data
                state.paginationResult = action.payload.paginationResult
                state.isLoading = false
                state.error = null
            })
            .addCase(getProductByFilterSearch.rejected, (state, action) => {
                state.error = action.payload
                state.isLoading = false
            })

            // delete product
            .addCase(deleteProduct.pending, (state) => {
                state.isLoading = true
            })
            .addCase(deleteProduct.fulfilled, (state, action) => {
                state.isLoading = false
                state.status = action.payload.status
            })
            .addCase(deleteProduct.rejected, (state, action) => {
                state.error = action.payload
                state.isLoading = false
            })

            // update Product
            .addCase(updateOneProduct.pending, (state) => {
                state.isLoading = true
            })
            .addCase(updateOneProduct.fulfilled, (state, action) => {
                state.status = action.payload.status
                state.updatedProduct = action.payload.data
                state.paginationResult = action.payload.paginationResult
                state.isLoading = false
                state.error = null
            })
            .addCase(updateOneProduct.rejected, (state, action) => {
                state.error = action.payload
                state.isLoading = false
            })


    }
})


export default productSlice.reducer