import { Link } from "react-router-dom"
import { SliderImg } from "../subComponents/SliderImg"

import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProductCollection } from "../../reduxTool/ProdctSlice"
import { Toaster } from "react-hot-toast"
const Collection = () => {


    const { dataa, isLoading } = useSelector((state) => state.product)
    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(getAllProductCollection())
    }, [dispatch])

    return (
        <div className="max-sm:pt-7 pt-10  Collection">
            <div className="container">
                <h2 className="font-semibold text-3xl tracking-wider  max-sm:text-2xl  mb-3  capitalize  w-fit mx-auto">
                    New for you
                </h2>
                <Link to={"/ShopProductPage"}>
                    <h1 className=" border border-[#bbb]  mb-3 uppercase grow
                    leading-9 py-2 px-7 mx-auto tracking-wide  w-fit 
                    hover:bg-black duration-300 ease-in-out hover:text-white cursor-pointer">
                        Show all product
                    </h1>
                </Link>
                <div className="flex items-center justify-center border-b-2  border-slate-200 w-[40%] mx-auto  max-sm:w-full ">
                    {/* <div className="py-3 px-5 cat-type cursor-pointer w-1/3  hover:font-semibold  relative">
                        <h1 className=" text-center ">Women</h1>
                    </div>
                    <div className="px-5 py-3 cat-type cursor-pointer  hover:font-semibold  w-1/3 relative">
                        <h1 className=" text-center">Man</h1>
                    </div>
                    <div className="px-5 py-3 cat-type cursor-pointer hover:font-semibold   w-1/3 relative">
                        <h1 className=" text-center">Couple</h1>
                    </div> */}
                </div>
                <div className="mb-10 md:pl-9 md:pr-7 ">
                    {
                        !isLoading &&
                            dataa.length > 0 ? <SliderImg products={dataa} /> : null
                    }

                </div>
            </div>
            <Toaster
                position="top-center"
                reverseOrder={false}
            />
        </div>
    )
}

export default Collection