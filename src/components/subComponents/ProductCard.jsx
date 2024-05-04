import { Link, useLocation } from "react-router-dom";
import ProductCardWishLIst from "../../Hook/wishLish/ProductCardWishLIst";

/* eslint-disable react/prop-types */
const ProductCard = ({ item, wishLish }) => {

    const url = useLocation();
    const segments = url.pathname.split('/');
    const title = segments[1]
    let baseUrl = ""
    if (title === "FavoritePage") {
        baseUrl = "https://backend-for-ecommerce-plateform2.onrender.com/products/"
    } else {
        baseUrl = ""
    }

    const [favType, handelFav] = ProductCardWishLIst(item._id, wishLish)

    return (
        <div className="relative mb-5 max-md:mb-3  pb-2 ">
            <Link to={`/Product/${item._id}`} className="" >
                <img src={`${baseUrl}${item.imageCover}`} className="max-h-[430px] " alt={item.title} />
            </Link>

            <Link to={`/Product/${item._id}`} >

                <h2 className="capitalize  w-[90%] font-bold pl-1 mt-4 mb-1">{item.title}  </h2>
                <div className="flex gap-2  pl-1 text-lg">
                    {
                        item.priceAfterDiscount ? <>
                            <h1 className=" "> ${item.priceAfterDiscount} </h1>
                            <del className="text-[#6F6F6F]"> ${item.price} </del>
                        </> : <h1 className=" "> ${item.price} </h1>
                    }
                </div>
            </Link>
            <div className="absolute left-3 top-2">
                <img
                    src={favType}
                    alt="one"
                    className='p-1 h-10 w-10  bg-red cursor-pointer  rounded-full bg-[#dcdcdc] '
                    onClick={() => handelFav()} />
            </div>
        </div>
    )
}

export default ProductCard