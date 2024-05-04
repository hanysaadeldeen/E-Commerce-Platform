
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlus } from "@fortawesome/free-solid-svg-icons"
import { faMinus } from "@fortawesome/free-solid-svg-icons"

/* eslint-disable react/prop-types */

const CardProduct = ({ DeleteOneProduct, product, UpdateCartQuantity }) => {



    let qtantity = product.count


    const updateQuantityINc = () => {
        updateqtn(qtantity + 1)
    }

    const updateQuantityDEC = () => {
        if (qtantity !== 1) {
            updateqtn(qtantity - 1)
        }
    }

    const updateqtn = (qtn) => {
        UpdateCartQuantity(product._id, { count: qtn })
    }

    let baseUrl = "https://backend-for-ecommerce-plateform2.onrender.com/products/"

    return (
        <div className=" mt-6 flex  ">
            {
                product && product.product &&
                <div className="w-20 mr-6">
                    <img src={`${baseUrl}${product.product.imageCover}`} className=" rounded-sm" alt="" />
                </div>
            }


            <div className="flex flex-1 max-md:flex-col max-md:text-left text-right">
                <div className="desc grow  text-left mr-6">

                    <h1 className="text-base font-bold mb-3 max-sm:mb-1 ">{product && product.product.title}</h1>
                    <div className='flex '>
                        <span className="w-5 h-5  rounded-full mr-1 mt-0.5 border-2" style={{ backgroundColor: `${product.color}` }}></span>
                        <span className='text-lg'>/ M</span>
                    </div>


                </div>
                <div className="price  w-28 pt-1">
                    <h1>LE {product.price}</h1>
                </div>
                <div className="quantity mx-6 max-md:mx-0 max-md:mt-2 pt-1 text-center  flex  flex-wrap  md:flex-col
                                gap-2 items-center  w-32 max-md:w-auto   ">
                    <div className="w-32 border border-[#bbb]  py-2 justify-between flex items-center ">
                        <h1 className="w-2/5 text-center pt-1 "
                            onClick={updateQuantityDEC}>
                            <FontAwesomeIcon icon={faMinus} className='mr-1  text-[#6b6b6b]   text-lg  cursor-pointer' />
                        </h1>

                        <h1 className="text-lg font-medium  text-[#6b6b6b] text-center">{qtantity}</h1>

                        <h1 className="w-2/5 text-center pt-1 "
                            onClick={updateQuantityINc}>
                            <FontAwesomeIcon icon={faPlus} className='mr-1  text-[#6b6b6b]  font-medium  text-lg cursor-pointer' />
                        </h1>
                    </div>
                    <h1
                        onClick={() => DeleteOneProduct(product._id)}
                        className="text-slate-500  underline underline-offset-4 text-xs duration-200 ease-in-out  cursor-pointer hover:text-red-500">
                        Remove</h1>
                </div>
                <div className="quantity mx-6 pt-1 text-center w-24 max-md:hidden">
                    <h1> LE {qtantity * product.price}</h1>
                </div>
            </div>
        </div>
    )
}

export default CardProduct