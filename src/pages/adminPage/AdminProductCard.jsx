import { Link } from "react-router-dom"

/* eslint-disable react/prop-types */
const AdminProductCard = ({ item, DeleteProduct }) => {
    return (
        <div className="relative">
            <h1 className="absolute top-2 left-3 text-[#7a7979]  font-bold cursor-pointer">
                <Link to={`/admin/EditProduct/${item._id}`}> edit</Link>
            </h1>
            <h1 onClick={() => DeleteProduct(item._id)} className="absolute top-2 text-red-600 font-bold cursor-pointer right-3">
                delete
            </h1>
            <Link to={`/Product/${item._id}`}>
                <div className="cursor-pointer mb-5 max-md:mb-3    pb-2 ">
                    <img src={item.imageCover} className="max-w-full " alt="one" />
                    <h2 className="capitalize font-bold pl-1 mt-4 mb-1"> {item.title} </h2>
                    <div className="flex gap-2 pl-1 text-lg">
                        {
                            item.priceAfterDiscount ? <>
                                <h1 className=" "> ${item.priceAfterDiscount} </h1>
                                <del className="text-[#6F6F6F]"> ${item.price} </del>
                            </> : <h1 className=" "> ${item.price} </h1>
                        }
                    </div>

                </div>
            </Link>
        </div>

    )
}

export default AdminProductCard