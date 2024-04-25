import { useEffect, useState } from 'react'
import heart from "../../assets/image/heart.png"
import faOff from "../../assets/image/fav-off.png"
import toast from 'react-hot-toast'
import { useDispatch } from 'react-redux'
import { AddProductToFav, DeleteProductFav } from '../../reduxTool/WishlistSlice'
import { GetProductFav } from '../../reduxTool/WishlistSlice'

const ProductCardWishLIst = (id, wishLish) => {
    const [favType, setFavType] = useState(faOff)
    const dispatch = useDispatch()
    let isfavee = false
    if (wishLish.some((item) => item._id === id)) {
        isfavee = true
    } else {
        isfavee = false
    }

    let local = JSON.parse(localStorage.getItem("user"))

    const GetWishLishProduct = async () => {
        await dispatch(GetProductFav())
    }

    const handelFav = async () => {
        if (local !== null) {
            if (local.role !== "admin") {
                if (favType === heart) {
                    setFavType(faOff)
                    await dispatch(DeleteProductFav(id))
                    GetWishLishProduct()
                    toast.success("removed from wish list ")
                } else {
                    setFavType(heart)
                    await dispatch(AddProductToFav({
                        "productId": id
                    }))
                    GetWishLishProduct()
                    toast.success("added to wish list ")
                }
            } else {
                toast.error("admin can't add to favorite")
            }
        } else {
            toast.error("login first")
        }
    }


    useEffect(() => {
        if (local !== null) {
            if (isfavee === true) {
                setFavType(heart)
            }
            if (isfavee === false) {
                setFavType(faOff)
            }
        } else {
            setFavType(faOff)
        }


    }, [isfavee, local]);



    return [favType, handelFav]
}

export default ProductCardWishLIst