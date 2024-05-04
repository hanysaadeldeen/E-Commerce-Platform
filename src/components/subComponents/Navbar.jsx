import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Searchhook from "../../Hook/Searchhook";
import GetUserProductCart from "../../Hook/Cart/GetUserProductCart";

import logo from "../../assets/image/logo.png"
import searchL from "../../assets/image/search.png"
import cart from "../../assets/image/shopping-cart.png"
import { useDispatch } from "react-redux";
import { GetUserCart } from "../../reduxTool/CartSlice";

export default function Navbar() {
  const [search, setSearch] = useState(false)
  const [showDropDown, setShowDropDown] = useState(false)

  const [searchq, , , setSearchParams,] = Searchhook()


  const [AllCart, isLoaing] = GetUserProductCart()

  var prevScrollpos = window.pageYOffset;
  window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      setSearch(false)
    }
    prevScrollpos = currentScrollPos;
  }

  const Navigate = useNavigate()




  const SearchFun = () => {
    setSearch(!search)
    if (window.location.pathname !== "/ShopProductPage" &&
      !window.location.pathname.startsWith(`/Category/`)) {
      Navigate("/ShopProductPage")
    }
  }




  const userr = JSON.parse(localStorage.getItem("user")) || []

  const dispatch = useDispatch()

  const removeUser = async () => {
    localStorage.removeItem("user")
    localStorage.removeItem("token")
    setShowDropDown(false)

    await dispatch(GetUserCart())


  }
  const url = useLocation();
  const segments = url.pathname.split('/');
  const title = segments[1]
  const title2 = segments[2]

  return (
    <div className="navbar relative">

      <div className={"absolute  h-[60px] flex justify-center w-full items-center duration-300 ease-in-out    z-20  " +
        (search ? "translate-y-[60px]" : "top-0")
      }>

        <input type="search" name="" id=""
          placeholder="second search...."
          className="py-3 px-5  rounded-full border w-[700px]   bg-gray-50 border-[#c0c0c0]"
          onChange={e => setSearchParams(prev => {
            prev.set("q", e.target.value)
            return prev
          })}
          value={searchq}

        />


      </div>

      <div className='bg-gray-50  w-full   fixed z-30'>
        <div className="container">
          <div className="about    flex justify-between  items-center ">
            <Link to="/" className=' max-md:p-2' >
              <img
                onClick={() => setShowDropDown(false)}
                src={logo} alt="Logo" className="" />
            </Link>
            <ul className="flex  text-lg capitalize max-md:hidden ">
              {/* home page */}
              <Link to="/"
                onClick={() => setShowDropDown(false)}
              >
                <li className={"  hover:bg-slate-100 cursor-pointer transition  duration-300 ease-in-out   p-4 " +
                  (title === "" && "bg-slate-100")} >
                  home</li>
              </Link>
              {/* category page */}
              <Link to="/Category"
                onClick={() => setShowDropDown(false)}


              >
                <li className={" hover:bg-slate-100 cursor-pointer transition  duration-300 ease-in-out   p-4 " +
                  (title === "Category" && "bg-slate-100")}>
                  category</li>
              </Link>
              <Link to="/FavoritePage"
                onClick={() => setShowDropDown(false)}


              >
                <li className={" hover:bg-slate-100 cursor-pointer transition  duration-300 ease-in-out   p-4 " +
                  (title === "FavoritePage" && "bg-slate-100")}>
                  favorite</li>
              </Link>
              {
                userr && userr.name ?
                  userr.role === "admin" ?
                    <div className="relative">
                      <li
                        onClick={() => setShowDropDown(!showDropDown)}
                        className={" hover:bg-slate-100 cursor-pointer transition  duration-300 ease-in-out   p-4 " +
                          (title === "admin" && "bg-slate-100")}>
                        profile
                      </li>
                      {
                        showDropDown &&
                        <div className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-gray-50 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" >
                          <div className="py-1" role="none">
                            <Link
                              onClick={() => setShowDropDown(false)}
                              to={"/admin/Allproduct"} className={"hover:bg-slate-200 hover:text-gray-900 text-gray-700 block px-4 py-2 text-sm " +
                                (title2 === "Allproduct" && "bg-slate-100")
                              } role="menuitem" id="menu-item-0">All Products</Link>
                            <Link
                              onClick={() => setShowDropDown(false)}
                              to={"/admin/Allorder"} className={"hover:bg-slate-100 hover:text-gray-900 text-gray-700 block px-4 py-2 text-sm " +
                                (title2 === "Allorder" && "bg-slate-100")
                              } role="menuitem" id="menu-item-1">All orders</Link>
                            <Link
                              onClick={removeUser}
                              to={"/loginPage"} className={"hover:bg-slate-100 hover:text-gray-900 text-gray-700 block px-4 py-2 text-sm " +
                                (title2 === "loginPage" && "bg-slate-100")
                              } role="menuitem" id="menu-item-2">LogOut</Link>
                          </div>
                        </div>
                      }
                    </div>
                    :
                    <div className="relative">
                      <li
                        onClick={() => setShowDropDown(!showDropDown)}
                        className={" hover:bg-slate-100 cursor-pointer transition  duration-300 ease-in-out   p-4 " +
                          (title === "user" && "bg-slate-100")}>
                        profile
                      </li>
                      {
                        showDropDown &&
                        <div className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-gray-50 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" >
                          <div className="py-1" role="none">
                            <Link
                              onClick={() => setShowDropDown(false)}
                              to={"/user/order"} className={"hover:bg-slate-100 hover:text-gray-900 text-gray-700 block px-4 py-2 text-sm " +
                                (title2 === "order" && "bg-slate-100")
                              } role="menuitem" id="menu-item-0">All Orders</Link>
                            <Link
                              onClick={() => setShowDropDown(false)}
                              to={"/user/profile"} className={"hover:bg-slate-100 hover:text-gray-900 text-gray-700 block px-4 py-2 text-sm " +
                                (title2 === "profile" && "bg-slate-100")
                              } role="menuitem" id="menu-item-1">setting</Link>
                            <Link
                              onClick={removeUser}
                              to={"/loginPage"} className={"hover:bg-slate-100 hover:text-gray-900 text-gray-700 block px-4 py-2 text-sm " +
                                (title2 === "loginPage" && "bg-slate-100")
                              } role="menuitem" id="menu-item-2">LogOut</Link>
                          </div>
                        </div>
                      }
                    </div>
                  :
                  <Link to="/loginPage">
                    <li className=" hover:bg-slate-100 cursor-pointer transition  duration-300 ease-in-out   p-4 ">
                      login</li>
                  </Link>
              }

            </ul>
            <div className='flex gap-2 items-center'>
              <img src={searchL}
                onClick={() => SearchFun()}
                className='w-[22px] mr-2 md:mt-1 cursor-pointer' alt="" />

              {!isLoaing && AllCart.length !== 0 ?
                <Link to="/CartPage" className='relative mt-1 max-md:hidden'
                  onClick={() => setShowDropDown(false)}

                >
                  <img src={cart} className='w-[25px] cursor-pointer' alt="" />
                  <span className="absolute -top-3 text-center -right-3 w-6 h-6 rounded-full text-white font-bold bg-red-500">{AllCart.numOfCartItems}</span>
                </Link> :
                <Link to="/CartPage" className='relative mt-1 max-md:hidden'
                  onClick={() => setShowDropDown(false)}

                >
                  <img src={cart} className='w-[25px] cursor-pointer' alt="" />
                </Link>
              }


            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
