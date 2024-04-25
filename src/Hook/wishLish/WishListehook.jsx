
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GetProductFav } from '../../reduxTool/WishlistSlice'

const WishListehook = () => {



    const dispatch = useDispatch()

    const {
        wishLish,
        isLoading,
    } = useSelector((state) => state.wishLish)

    const GetWishLishProduct = async () => {
        await dispatch(GetProductFav())
    }

    let local = JSON.parse(localStorage.getItem("user"))

    useEffect(() => {
        if (local !== null) {
            GetWishLishProduct()
        }
    }, [])



    return [isLoading, wishLish]
}

export default WishListehook