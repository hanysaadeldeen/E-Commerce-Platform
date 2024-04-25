import { useState } from "react";
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from "react-redux";
import { AddToCart, GetUserCart } from "../../reduxTool/CartSlice";
import { useEffect } from "react";

const AddProductToCart = () => {


    const dispatch = useDispatch()

    const { Cart, isLoaing, error } = useSelector((state) => state.Cart)

    const [lo, setLog] = useState(true)
    const [color, setColor] = useState("")


    const getFinalColor = (e) => {
        setColor(e);
    }


    const userId = JSON.parse(localStorage.getItem("user"))

    const AddtoCart = async (id) => {

        if (userId !== null) {
            if (color === "") {
                toast.error('choose One Color')
            } else {
                setLog(true)
                await dispatch(AddToCart({ color, productId: id }))
                setLog(false)
            }
        } else {
            toast.error('Login first')
        }

    }


    const GetUserCartProduct = async () => {
        await dispatch(GetUserCart())
    }



    useEffect(() => {
        if (!lo) {
            if (!isLoaing) {
                if (error === null) {
                    if (Cart.status === 200) {
                        toast.success("added successfully")
                        GetUserCartProduct()

                    }
                } else {
                    if (error.message ===
                        "You are not allowed to perform this action") {
                        toast.error("Admin are not allowed to perform this action")
                    }
                }
            }
        }
    }, [lo])

    return [AddtoCart, getFinalColor]
}

export default AddProductToCart