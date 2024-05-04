
import { SpinnerDiamond } from "spinners-react"
import GetUserProductCart from "../Hook/Cart/GetUserProductCart"
import CardProduct from "../components/Cart/CardProduct"
import CartProductInfo from "../components/Cart/CartProductInfo"
import { Toaster } from "react-hot-toast"
import { Link } from "react-router-dom"
const CartPage = () => {


    const [AllCart, isLoaing, DeleteOneProduct, DeleteUserAllCart, UpdateCartQuantity] = GetUserProductCart()




    return (
        <div className="py-20 cart_Page">
            <div className="container">
                <h1 className="text-center font-extrabold max-sm:text-xl text-2xl ">Shopping cart</h1>
                {!isLoaing ?
                    AllCart.data && AllCart.data.products.length !== 0 ?
                        <div className=" md:mt-6 max-w-[900px] mx-auto py-2 md:px-8">
                            <div className=" flex flex-1 text-right py-3   border-b  max-md:hidden">
                                <div className="w-16 mr-6">
                                    <h1>Product</h1>
                                </div>
                                <div className="desc grow  text-left mr-6">
                                </div>
                                <div className="price w-28">
                                    <h1>price</h1>
                                </div>
                                <div className="quantity mx-6 text-center w-32">
                                    <h1>  quantity</h1>
                                </div>
                                <div className="quantity mx-6 text-center w-24">
                                    <h1>total</h1>
                                </div>
                            </div>
                            {
                                AllCart && AllCart.data && AllCart.data.products.map((item) => {
                                    return (
                                        <CardProduct
                                            UpdateCartQuantity={UpdateCartQuantity}
                                            DeleteOneProduct={DeleteOneProduct}
                                            product={item}
                                            key={item._id} />
                                    )
                                })
                            }
                            {
                                AllCart && AllCart.data &&
                                <CartProductInfo Allproduct={AllCart.data} DeleteUserAllCart={DeleteUserAllCart} price={AllCart.data.totalCartPrice} />
                            }
                        </div> :
                        <>
                            <h1 className="text-center w-full text-2xl mb-10 mt-10  ">there is no product in your cart  </h1>
                            <Link to="/ShopProductPage">
                                <h1 className="text-center text-xl text-red-500  font-bold tracking-wide cursor-pointer"> Continue shopping</h1>
                            </Link>
                        </>

                    : <div className="flex items-center justify-center w-full">
                        <SpinnerDiamond speed={150} secondaryColor={"#ddd"} />
                    </div>
                }

            </div>
            <Toaster
                position="top-center"
                reverseOrder={false}
            />
        </div>
    )
}

export default CartPage