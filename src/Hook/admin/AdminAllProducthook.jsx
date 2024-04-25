import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteProduct, getAllProduct } from '../../reduxTool/ProdctSlice'

const AdminAllProducthook = () => {



    const [Allproducts, setAllProducts] = useState("")
    const [page, setPage] = useState("")
    const { dataa, isLoading, error, status, paginationResult } = useSelector((state) => state.product)
    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(getAllProduct(page))
    }, [page, dispatch])


    useEffect(() => {
        if (!isLoading) {
            setAllProducts(dataa)
        }

    }, [dataa, isLoading, error, status, paginationResult])

    const getProductFilter = (e) => {
        setPage(e)
    }




    const deletespecificProduct = async (id) => {
        await dispatch(deleteProduct(id))
        await dispatch(getAllProduct(page))
    }





    return [Allproducts, isLoading, error, paginationResult, getProductFilter, deletespecificProduct]

}

export default AdminAllProducthook