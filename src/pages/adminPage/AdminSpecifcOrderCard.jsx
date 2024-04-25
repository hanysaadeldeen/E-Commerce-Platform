
import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const AdminSpecifcOrderCard = ({ info }) => {
    return (
        <div className="cursor-pointer mb-4 rounded-md   bg-[#F9F9F9] ">
            <div className="flex flex-col">
                <div className="flex " key={info._id}>
                    <Link to={`/Product/${info.product._id}`}>
                        <div className="w-32 max-[400px]:mx-auto   cursor-pointer mr-6">
                            <img src={info.product.imageCover} className="max-sm:rounded-md  rounded-tl-md" alt="" />
                        </div>
                    </Link>
                    <div className="flex pr-3 flex-1 max-md:flex-col max-md:text-left text-right">
                        <div className="desc grow  text-left mr-6">
                            <h1 className="text-base font-bold mb-2 max-sm:mb-1 ">{info.product.title}</h1>
                            <div className='flex mb-2'>
                                <span className="w-5 h-5  rounded-full mr-1 mt-0.5 border-2" style={{ backgroundColor: `${info.color}` }}></span>
                                <span className='text-lg'>/ M</span>
                            </div>
                            <h1 className='text-lg  mb-2'>Quantity: <span className="font-bold">{info.count}</span> </h1>
                            <h1 className='text-lg mb-2'>Rating:  <span className="font-bold">{info.product.ratingsQuantity}</span></h1>
                            <h1 className='text-lg '>Price:  <span className="font-bold">{info.price}</span></h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminSpecifcOrderCard