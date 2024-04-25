import ProductCard from "../subComponents/ProductCard"
// import { Link } from "react-router-dom"

import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProductMostSale } from "../../reduxTool/ProdctSlice";
import { SpinnerDiamond } from "spinners-react";
import WishListehook from "../../Hook/wishLish/WishListehook";
const FollowingAndStaff = () => {


    const { mostSale, isLoading } = useSelector((state) => state.product)

    const [, wishLish] = WishListehook()

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getProductMostSale())
    }, [dispatch])

    return (
        <div className="container  mb-10">

            <h2 className="font-semibold text-3xl tracking-wider  max-sm:text-2xl  mb-5   capitalize  w-fit mx-auto">
                picked by staff
            </h2>

            <>
                {
                    !isLoading ?

                        <div className="grid grid-cols-4 max-lg:grid-cols-3  max-md:grid-cols-2  gap-3 ">
                            {
                                mostSale && mostSale.map((item) => {
                                    return (
                                        <ProductCard wishLish={wishLish} item={item} key={item._id} />
                                    )
                                })
                            }
                        </div>
                        :
                        <div className="flex items-center justify-center w-full">
                            <SpinnerDiamond speed={150} secondaryColor={"#ddd"} />
                        </div>
                }

            </>
        </div>
    )
}

export default FollowingAndStaff