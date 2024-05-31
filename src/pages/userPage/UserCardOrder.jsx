
import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const UserCardOrder = ({ info }) => {
    let baseUrl = "https://backend-for-ecommerce-plateform2.onrender.com/products/"
    return (
        <div className="cursor-pointer mb-6 rounded-md   bg-[#F9F9F9] ">
            <h1 className="p-2 "> order number: #{info.id}</h1>
            <div className="flex flex-col">
                {
                    info.cartItems && info.cartItems.map((item) => {

                        return (
                            <div className="flex mb-5" key={item._id}>
                                {
                                    item.product &&
                                    <Link to={`/Product/${item.product._id}`}>
                                        <div className="w-32 max-[400px]:mx-auto   cursor-pointer mr-6">
                                            <img src={`${baseUrl}${item.product.imageCover}`} className="max-sm:rounded-md  rounded-tl-md" alt="" />
                                        </div>
                                    </Link>
                                }
                                {
                                    item.product &&
                                    <div className="flex pr-3 flex-1 max-md:flex-col max-md:text-left text-right">
                                        <div className="desc grow  text-left mr-6">
                                            <h1 className="text-base font-bold mb-2 max-sm:mb-1 ">{item.product.title}</h1>
                                            <div className='flex mb-2'>
                                                <span className="w-5 h-5  rounded-full mr-1 mt-0.5 border-2" style={{ backgroundColor: `${item.color}` }}></span>
                                                <span className='text-lg'>/ M</span>
                                            </div>
                                            <h1 className='text-lg  mb-2'>Quantity: <span className="font-bold">{item.count}</span> </h1>
                                            <h1 className='text-lg mb-2'>Rating:  <span className="font-bold">{item.product.ratingsQuantity}</span></h1>
                                            <h1 className='text-lg '>Price:  <span className="font-bold">{item.price}</span></h1>
                                        </div>
                                    </div>
                                }
                            </div>
                        )
                    })
                }
            </div>
            {
                console.log(info.paymentMethodType)
            }
            <div className="flex gap-3 flex-wrap justify-between max-sm:justify-center items-center font-semibold  pb-2 px-3">
                <h1 className="">Total-Price: {info.totalOrderPrice}</h1>
                <h1 className="">IsDelivered: {!info.isDelivered ? "No" : "Yes"}</h1>
                <h1 className="">IsPaid: {!info.isPaid ? "No" : "Yes"}</h1>
                <h1 className="">Payment-Method: {info.paymentMethodType}</h1>
            </div>
        </div>
    )
}

export default UserCardOrder