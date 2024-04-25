import { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faXmark, faBars } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";
const AdminSidePare = ({ allProducts, allOrders, addProduct, addBrand, addCategory, addSubcategory, addCoupon }) => {

    const [isOpen, setOpen] = useState("full");
    const [isFilter, setIsFilter] = useState("[calc(100%+32px)]");

    // toogle for drop down slider
    const btnref = useRef()
    useEffect(() => {
        let handler = (event) => {
            if (!btnref.current.contains(event.target)) {
                setOpen("full")
            }
        }
        document.addEventListener("mousedown", handler)
        return () => {
            document.removeEventListener("mousedown", handler)
        }
    }, [])
    const btnrefIlter = useRef()
    useEffect(() => {
        let handlerFilter = (event) => {
            if (!btnrefIlter.current.contains(event.target)) {
                setIsFilter("[calc(100%+32px)]")
            }
        }
        document.addEventListener("mousedown", handlerFilter)
        return () => {
            document.removeEventListener("mousedown", handlerFilter)
        }
    }, [])
    return (
        <>
            {
                isOpen === 0 || isFilter === 0 ?
                    <div className="fixed  top-0 left-0  bg-[#232323cc] h-screen duration-150  ease-in-out
                            w-full z-40 cursor-pointer"></div>
                    : null
            }
            <div ref={btnrefIlter} className={"max-w-[200px] lg:w-[210px]  lg:max-h-[80vh]  lg:h-[80vh] rounded-sm  bg-[#F9F9F9] max-lg:w-3/5 max-lg:max-w-[300px] max-lg:z-50  max-lg:pl-2 max-lg:pt-1 max-lg:fixed max-lg:left-0 max-lg:bottom-0 max-lg:top-0 max-lg:duration-[.6s] max-lg:ease-in-out " +
                (isFilter !== 0 ? "max-lg:-translate-x-[calc(100%+32px)]" : "max-lg:-translate-x-0")}>
                <div className="w-full">
                    <div className="lg:hidden w-full relative slider_name mt-2">
                        <div className={"absolute -right-8 -top-3 w-8 h-8  text-center p-1  duration-75 mt-2 " +
                            (isFilter !== 0 ? "bg-[#5e5e5e]" : "bg-[#353434]")} >
                            <FontAwesomeIcon icon={faXmark} className={"text-2xl  cursor-pointer duration-75  text-white " +
                                (isFilter !== 0 && "opacity-20")}
                                onClick={() => setIsFilter("[calc(100%+32px)]")} />
                        </div>
                    </div>
                    <div className="max-lg:h-screen  max-lg:overflow-y-auto  max-lg:pb-24 max-lg:pr-3">
                        <div className="allProducts">
                            <Link to="/admin/Allproduct">
                                <h1 className={"font-bold p-5  uppercase border-b text-center  border-[#787878] " +
                                    (allProducts !== undefined ? "bg-[#eee]" : "hover:bg-[#eee] duration-300 ease-in-out")}>all Products</h1>
                            </Link>
                        </div>
                        <div className="allorder">
                            <Link to="/admin/Allorder">
                                <h1 className={"font-bold p-5 text-center uppercase border-b rounded-t-md  border-[#787878] " +
                                    (allOrders !== undefined ? "bg-[#eee]" : "hover:bg-[#eee] duration-300 ease-in-out")} >All orders</h1>
                            </Link>
                        </div>
                        <div className="addProduct ">
                            <Link to="/admin/addProduct">
                                <h1 className={"font-bold p-5  uppercase border-b  text-center border-[#787878] " +
                                    (addProduct !== undefined ? "bg-[#eee]" : "hover:bg-[#eee] duration-300 ease-in-out")}>add product </h1>
                            </Link>
                        </div>
                        <div className="addBrand ">
                            <Link to="/admin/addBrand">
                                <h1 className={"font-bold p-5  uppercase border-b  text-center border-[#787878] " +
                                    (addBrand !== undefined ? "bg-[#eee]" : "hover:bg-[#eee] duration-300 ease-in-out")}>add Brand </h1>
                            </Link>
                        </div>
                        <div className="addCategory">
                            <Link to="/admin/Addcategory">
                                <h1 className={"font-bold p-5  uppercase border-b  text-center border-[#787878] "
                                    + (addCategory !== undefined ? "bg-[#eee]" : "hover:bg-[#eee] duration-300 ease-in-out")}>add Category</h1>
                            </Link>
                        </div>
                        <div className="addSubcategory">
                            <Link to="/admin/AddSubCategoy">
                                <h1 className={"font-bold p-5  uppercase border-b  text-center border-[#787878] "
                                    + (addSubcategory !== undefined ? "bg-[#eee]" : "hover:bg-[#eee] duration-300 ease-in-out")}>add Subcategory </h1>
                            </Link>
                        </div>
                        <div className="addCoupon">
                            <Link to="/admin/AddCoupon">
                                <h1 className={"font-bold p-5  uppercase border-b  text-center border-[#787878] "
                                    + (addCoupon !== undefined ? "bg-[#eee]" : "hover:bg-[#eee] duration-300 ease-in-out")}>add Coupon </h1>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="lg:hidden max-lg:pl-2 mb-3" >
                <div onClick={() => setIsFilter(prev => prev === "[calc(100%+32px)]" ? 0 : "[calc(100%+32px)]")} className="cursor-pointer w-fit flex items-center ">
                    <FontAwesomeIcon icon={faBars} className='mr-5  text-2xl cursor-pointer' />
                    {
                        allProducts !== undefined ?
                            <h1 className="text-xl font-bold tracking-wide ">all Products</h1>
                            : null
                    }
                    {
                        allOrders !== undefined ?
                            <h1 className="text-xl font-bold tracking-wide ">all Orders</h1>
                            : null
                    }
                    {
                        addProduct !== undefined ?
                            <h1 className="text-xl font-bold tracking-wide ">add Product</h1>
                            : null
                    }
                    {
                        addBrand !== undefined ?
                            <h1 className="text-xl font-bold tracking-wide ">add Brand</h1>
                            : null
                    }
                    {
                        addCategory !== undefined ?
                            <h1 className="text-xl font-bold tracking-wide ">add Category</h1>
                            : null
                    }
                    {
                        addSubcategory !== undefined ?
                            <h1 className="text-xl font-bold tracking-wide ">add Subcategory</h1>
                            : null
                    }
                    {
                        addCoupon !== undefined ?
                            <h1 className="text-xl font-bold tracking-wide ">add Coupon</h1>
                            : null
                    }
                </div>
            </div>
        </>
    )
}

export default AdminSidePare