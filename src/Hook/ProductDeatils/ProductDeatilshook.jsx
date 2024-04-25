import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getSpecificProduct, getSubProductFromProduct } from "../../reduxTool/ProdctSlice"
const ProductDeatilshook = (id) => {
    const [reAndDes, setReAndDes] = useState("review")

    const [product, setProduct] = useState('')
    const { dataa, isLoading, relatedProduct } = useSelector((state) => state.product)
    // const relatedProduct = useSelector((state) => state.product.relatedProduct)



    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getSpecificProduct(id))
    }, [id])

    useEffect(() => {
        if (!isLoading) {
            setProduct(dataa)
        }
    }, [isLoading, dataa])

    useEffect(() => {
        if (dataa.length !== 0) {
            dispatch(getSubProductFromProduct(product.category))
        }
    }, [product])






    return [setReAndDes, reAndDes, product, isLoading, relatedProduct]
}

export default ProductDeatilshook