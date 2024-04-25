import { SpinnerDiamond } from "spinners-react"
import WishListehook from "../Hook/wishLish/WishListehook"
import { Toaster } from "react-hot-toast"
import ProductCard from "../components/subComponents/ProductCard"

const UserFavoritePage = () => {

    const [isLoading, wishLish] = WishListehook()

    return (
        <div className='pt-20 '>
            <div className="container">
                <div className="flex  items-center pb-3 md:mt-4 child:text-[#999999] gap-1">
                    <span className=" cursor-pointer">home </span>
                    <span className="  text-2xl font-semibold "> {`>`}</span>
                    <span className=" cursor-pointer">Wishlist
                    </span>
                </div>
                <div className="max-md:hidden w-full h-[1px] bg-[#dedede]"></div>
                <div className="py-5">
                    {
                        !isLoading ?
                            <>
                                {
                                    wishLish && wishLish.length > 0 ?
                                        <div className="grid pb-10 grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-3 ">
                                            {
                                                wishLish.map((item) => {
                                                    return (
                                                        <ProductCard wishLish={wishLish} item={item} key={item._id} />
                                                    )
                                                })}
                                        </div>
                                        :
                                        <h1 className="text-center mx-full  text-2xl mb-10 mt-10  ">there is no product in wish liste </h1>
                                }
                            </> : <div className="flex items-center justify-center w-full">
                                <SpinnerDiamond speed={150} secondaryColor={"#ddd"} />
                            </div>
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

export default UserFavoritePage