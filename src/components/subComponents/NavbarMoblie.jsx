// import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faUser } from '@fortawesome/free-regular-svg-icons'
import { Link, useLocation } from 'react-router-dom'
import GetUserProductCart from '../../Hook/Cart/GetUserProductCart'
import { useState } from 'react'

const NavbarMoblie = () => {

    const [AllCart, isLoaing] = GetUserProductCart()
    const [showDropDown, setShowDropDown] = useState(false)

    const userr = JSON.parse(localStorage.getItem("user")) || []

    const url = useLocation();
    const segments = url.pathname.split('/');
    const title = segments[1]
    const title2 = segments[2]

    const removeUser = async () => {
        localStorage.removeItem("user")
        localStorage.removeItem("token")
        setShowDropDown(false)
    }


    return (
        <div className='border-t-2 bg-white border-slate-100  md:hidden  bottom-0   w-full z-30 fixed'>
            <div className='container '>
                <div className='px-5 pb-4  pt-3 flex justify-between items-center'>
                    {/* home page */}
                    <div className=' relative flex  hover:scale-105 duration-100 ease-in-out'
                        onClick={() => setShowDropDown(false)}>
                        <Link to="/">
                            <img src="/src/assets/image/house.png" className="w-[22px] " alt="" />
                            {
                                title === "" &&
                                <span className='absolute w-1.5 h-1.5 rounded-full bg-red-600 left-1/2 translate-x-[-50%] -bottom-[11px]'></span>
                            }
                        </Link>
                    </div>
                    {/* category */}
                    <div className=' relative flex hover:scale-105 duration-100 ease-in-out'>
                        <Link to="/Category">
                            <img src="/src/assets/image/menu.png" className="w-[22px]" alt="" />
                            {
                                title === "Category" &&
                                <span className='absolute w-1.5 h-1.5 rounded-full bg-red-600 left-1/2 translate-x-[-50%] -bottom-[11px]'></span>
                            }
                        </Link>
                    </div>
                    {/* cart */}
                    <div className='relative flex  hover:scale-105 duration-100 ease-in-out'>
                        {!isLoaing && AllCart.length !== 0 ?
                            <Link to="/CartPage">
                                <img src="/src/assets/image/shopping-cart.png" alt="" className='w-[24px]' />
                                <span className="absolute -top-3 text-center -right-3 w-6 h-6 rounded-full text-white font-bold bg-red-500">{AllCart.numOfCartItems}</span>
                                {
                                    title === "CartPage" &&
                                    <span className='absolute w-1.5 h-1.5 rounded-full bg-red-600 left-1/2 translate-x-[-50%] -bottom-[12px]'></span>
                                }
                            </Link> :
                            <Link to="/CartPage">
                                <img src="/src/assets/image/shopping-cart.png" alt="" className='w-[24px]' />
                                {
                                    title === "CartPage" &&
                                    <span className='absolute w-1.5 h-1.5 rounded-full bg-red-600 left-1/2 translate-x-[-50%] -bottom-[12px]'></span>
                                }
                            </Link>}
                    </div>
                    {/* favorite */}
                    <div className='relative flex  hover:scale-105 duration-100 ease-in-out'>
                        <Link to="/FavoritePage">
                            <img src="/src/assets/image/fav-off.png" alt="" className='w-[30px]' />
                            {
                                title === "FavoritePage" &&
                                <span className='absolute w-1.5 h-1.5 rounded-full bg-red-600 left-1/2 translate-x-[-50%] -bottom-[8px]'></span>
                            }
                        </Link>
                    </div>
                    {/* profile */}
                    <div className=' relative flex  hover:scale-105 duration-100 ease-in-out'>
                        {
                            userr && userr.name ?
                                userr.role === "admin" ?
                                    <div className="relative">
                                        {
                                            title === "admin" &&
                                            <span className='absolute w-1.5 h-1.5 rounded-full bg-red-600 left-1/2 translate-x-[-50%] bottom-[-10px]'></span>
                                        }
                                        <FontAwesomeIcon
                                            onClick={() => setShowDropDown(!showDropDown)}
                                            icon={faUser} className='text-[#6F6F6F] font-bolder text-xl cursor-pointer' />
                                        {
                                            showDropDown &&
                                            <div className="absolute -top-36 right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-slate-50 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                                                role="menu" aria-orientation="vertical" aria-labelledby="menu-button" >
                                                <div className="py-1" role="none">
                                                    <Link
                                                        onClick={() => setShowDropDown(false)}
                                                        to={"/admin/Allproduct"} className={"hover:bg-gray-100 hover:text-gray-900 text-gray-700 block px-4 py-2 text-sm " +
                                                            (title2 === "Allproduct" && "bg-slate-100")} role="menuitem" id="menu-item-0">All Products</Link>
                                                    <Link
                                                        onClick={() => setShowDropDown(false)}
                                                        to={"/admin/Allorder"} className={"hover:bg-gray-100 hover:text-gray-900 text-gray-700 block px-4 py-2 text-sm " +
                                                            (title2 === "Allorder" && "bg-slate-100")} role="menuitem" id="menu-item-1">All orders</Link>
                                                    <Link
                                                        onClick={removeUser}
                                                        to={"/loginPage"} className={"hover:bg-gray-100 hover:text-gray-900 text-gray-700 block px-4 py-2 text-sm " +
                                                            (title2 === "loginPage" && "bg-slate-100")} role="menuitem" id="menu-item-2">LogOut</Link>
                                                </div>
                                            </div>
                                        }
                                    </div>
                                    :
                                    <div className='relative'>
                                        {
                                            title === "user" &&
                                            <span className='absolute w-1.5 h-1.5 rounded-full bg-red-600 left-1/2 translate-x-[-50%] bottom-[-10px]'></span>
                                        }
                                        <FontAwesomeIcon
                                            onClick={() => setShowDropDown(!showDropDown)}
                                            icon={faUser} className='text-[#6F6F6F] font-bolder text-xl cursor-pointer' />
                                        {
                                            showDropDown &&
                                            <div className="absolute -top-36 right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-slate-50 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                                                role="menu" aria-orientation="vertical" aria-labelledby="menu-button" >
                                                <div className="py-1" role="none">
                                                    <Link
                                                        onClick={() => setShowDropDown(false)}
                                                        to={"/user/order"} className={"hover:bg-gray-100 hover:text-gray-900 text-gray-700 block px-4 py-2 text-sm " +
                                                            (title2 === "order" && "bg-slate-100")
                                                        } role="menuitem" id="menu-item-0">All Orders</Link>
                                                    <Link
                                                        onClick={() => setShowDropDown(false)}
                                                        to={"/user/profile"} className={"hover:bg-gray-100 hover:text-gray-900 text-gray-700 block px-4 py-2 text-sm " +
                                                            (title2 === "profile" && "bg-slate-100")
                                                        } role="menuitem" id="menu-item-1">setting</Link>
                                                    <Link
                                                        onClick={removeUser}
                                                        to={"/loginPage"} className={"hover:bg-gray-100 hover:text-gray-900 text-gray-700 block px-4 py-2 text-sm " +
                                                            (title2 === "loginPage" && "bg-slate-100")
                                                        } role="menuitem" id="menu-item-2">LogOut</Link>
                                                </div>
                                            </div>
                                        }
                                    </div>
                                :
                                <Link to="/LoginPage">
                                    <span className='absolute w-1.5 h-1.5 rounded-full bg-red-600 left-1/2 translate-x-[-50%] bottom-[-10px]'></span>
                                    <FontAwesomeIcon icon={faUser} className='text-[#6F6F6F] font-bolder text-xl cursor-pointer' />
                                </Link>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavbarMoblie