import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBagShopping } from "@fortawesome/free-solid-svg-icons"
import { faClose } from "@fortawesome/free-solid-svg-icons"
import CardProdctInfo from "./CardProdctInfo"
import { Link } from "react-router-dom"
import CheckoutOrderhook from "../../Hook/Cart/CheckoutOrderhook";



/* eslint-disable react/prop-types */
const CartProductInfo = ({ Allproduct, DeleteUserAllCart, price }) => {



    const [Address, getMainLocation, BuyNow, setDeliveryMethod, openOrders, setOpenOrder, setCoupon, coupon, sumbmitCoupon, coupones] = CheckoutOrderhook(Allproduct._id)

    if (openOrders === true) {
        document.body.style.overflow = "hidden"
    } else {
        document.body.style.overflow = "auto"
    }

    return (
        <>
            <div className="mt-10">
                <Link to="/ShopProductPage">
                    <h1 className="text-center text-black tracking-wide cursor-pointer"> Continue shopping</h1>
                </Link>
                <h1 className="mt-4"
                    onClick={DeleteUserAllCart}>
                    <h1 className="text-center  text-red-500 text-lg tracking-wide cursor-pointer">Delete All Cart</h1>
                </h1>
            </div>
            <div className=" mt-5 border-y border-black px-1  py-4 flex justify-between items-center">
                <h1 className="font-extrabold text-xl">subtotal</h1>
                <h1 className="font-extrabold text-xl">LE {price}</h1>
            </div>
            <div className="my-3 mb-4 text-center px-2 ">
                <a href="#">
                    <h1 className=" text-sm  text-black tracking-wide cursor-pointer"> ADD A NOTE TO YOUR ORDER</h1>
                </a>
                <textarea name="" id="" className="text-sm resize-none border border-slate-400 rounded-sm h-36 mt-3 w-full sm:w-[445px] p-3"></textarea>
                <h1 className=" text-sm  mt-4 text-black tracking-wide cursor-pointer">Taxes and <span className="underline underline-offset-4" > shipping </span> calculated at checkout</h1>
            </div>
            <div
                onClick={() => setOpenOrder(!openOrders)}
                className=" mx-auto order_now mt-3 border border-[#bbb]  uppercase 
                    w-full lg:max-w-[90%]  leading-9 py-2 tracking-wide text-center
                    bg-black text-white cursor-pointer max-sm:text-sm rounded-sm
                    ">
                <FontAwesomeIcon icon={faBagShopping} className='mr-3  text-white  text-lg  cursor-pointer' />
                Order Now
            </div>

            {
                (openOrders ? <div className={"Order_now fixed  bottom-0 right-0 block w-full h-full bg-[rgba(0,0,0,0.46)] left-0 top-0 z-40 "
                }>
                    <div className="w-[600px] max-md:w-[95%]  mx-auto font-bold  rounded-lg pt-2 pb-6  px-5 bg-white z-50 mt-5 h-[95%] overflow-auto
                        flex flex-col justify-between">
                        <div className="border-b border-[#d9d9d9] flex justify-between items-center pb-3 pt-1 text-base font-extrabold ">
                            <h1>Please fill in the form to order</h1>
                            <FontAwesomeIcon icon={faClose} className='text-2xl text-slate-600 cursor-pointer' onClick={() => setOpenOrder(!openOrders)} />
                        </div>
                        <div className="mb-2 product_details">
                            {Allproduct.products.map((item) => {
                                return (
                                    <CardProdctInfo key={item._id
                                    } info={item} />
                                )
                            })}
                        </div>
                        <div className="price_&_subtotal border mb-2 border-[#d3d3d3] rounded-md bg-[#f9f9f9] p-2">
                            <div className="subtotal flex justify-between items-center">
                                <h1 className="font-medium text-[#555]">subtotal</h1>
                                <h1 className="font-bold">LE {price} EGP</h1>
                            </div>
                            <div className="subtotal flex justify-between items-center my-2">
                                <h1 className="font-medium text-[#555]">SALE <span className="text-[#f44336]"> Discount</span>  </h1>
                                <h1 className="font-bold text-[#f44336]">{coupones && coupones.data ? (coupones.data.totalCartPrice - coupones.data.totalAfterDiscount) + " LE" : "??"}  </h1>
                            </div>
                            <div className="Shipping flex justify-between items-center  mb-1">
                                <h1 className="font-medium text-[#555]">Shipping</h1>
                                <h1 className="font-bold">free</h1>
                            </div>
                            <div className="total border-t py-1 flex justify-between items-center">
                                <h1>total</h1>
                                <h1 className="font-extrabold">LE {coupones && coupones.data ? coupones.data.totalAfterDiscount : price} EGP</h1>
                            </div>
                        </div>
                        <div className="userInfo mt-2">

                            <div className="address my-3 flex max-sm:flex-col sm:items-center">
                                <div className="w-1/4 ">
                                    <div className="w-fit">
                                        <h1 className="font-medium relative  text-xl 
                                    after:absolute after:content-['*'] after:-top-0.5 after:text-sm after:-right-3 after:text-[#DC4732] max-sm:ml-1 max-sm:mb-2">location</h1>
                                    </div>
                                </div>
                                <div className="max-sm:w-full w-3/4 ">
                                    <div className=" ">

                                        {Address.length > 0 ?
                                            <select
                                                name="languages"
                                                id="lang"
                                                className="select mt-3 px-2 "
                                                onChange={getMainLocation}
                                            >
                                                <option value={"0"}>
                                                    choose location
                                                </option>
                                                {
                                                    Address.map((item) => {
                                                        return (
                                                            <option key={item._id} value={item._id}>
                                                                {item.alias}
                                                            </option>
                                                        )
                                                    })
                                                }
                                            </select> :
                                            <Link to={"/user/location"}>
                                                <h1
                                                    className="order_now  rounded-sm
                                                            uppercase  w-full  px-4  py-3 tracking-wide
                                                        text-center bg-black text-white cursor-pointer text-base  "
                                                >Add Location First</h1>
                                            </Link>
                                        }
                                    </div>
                                </div>
                            </div>



                            <div className="coupon my-4 flex gap-3 sm:items-center">
                                <input type="text" name="" id="" onChange={(e) => setCoupon(e.target.value)} value={coupon} placeholder="Discount code" className=" px-2 py-3 w-full rounded-md border border-[#c0c0c0]" />
                                <h1 className="cursor-pointer duration-300 ease-linear hover:text-black  bg-[#E1E1E1] p-3 px-4 rounded text-[#666666]"
                                    onClick={sumbmitCoupon}>   apply  </h1>
                            </div>
                            <div className="payment my-4">
                                <h1 className="text-2xl mb-1">Payment </h1>
                                <p className="text-[#666666] text-sm"> All transactions are secure and encrypted.</p>

                                <div className="checkbox-wrapper-15 mt-4">
                                    <div className="border py-3 px-4  mb-3  rounded-md">
                                        <input className="inp-cbx hidden" onChange={() => setDeliveryMethod("Cash")} id="visa" name="payment" type="radio" />
                                        <label className="cbx" htmlFor="visa">
                                            <span>
                                                <svg width="12px" height="9px" viewBox="0 0 12 9">
                                                    <polyline points="1 5 4 8 11 1"></polyline>
                                                </svg>
                                            </span>
                                            <span className="font-bold text-lg">Pay via (Debit/Credit cards/Wallets/Installments)</span>
                                        </label>
                                    </div>
                                    <div className="border py-3 px-4  mb-5  rounded-md">
                                        <input className="inp-cbx hidden" onChange={() => setDeliveryMethod("visa")} id="Cash" name="payment" type="radio" />
                                        <label className="cbx" htmlFor="Cash">
                                            <span>
                                                <svg width="12px" height="9px" viewBox="0 0 12 9">
                                                    <polyline points="1 5 4 8 11 1"></polyline>
                                                </svg>
                                            </span>
                                            <span className="font-bold text-lg">Cash on Delivery (COD)</span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div
                                onClick={BuyNow}
                                className=" mx-auto order_now mt-4 rounded-sm   uppercase  w-full   leading-9 py-2 tracking-wide text-center bg-black text-white cursor-pointer max-sm:text-base  ">
                                BUY IT NOW - LE {price} EGP
                            </div>
                        </div>
                    </div>
                </div> : null)
            }
        </>
    )
}

export default CartProductInfo