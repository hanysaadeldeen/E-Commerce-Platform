
import { CirclePicker } from 'react-color'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStar } from "@fortawesome/free-solid-svg-icons"
// import { faMinus } from "@fortawesome/free-solid-svg-icons"
import { faBagShopping } from "@fortawesome/free-solid-svg-icons"
import AddProductToCart from '../../Hook/Cart/AddProductToCart'
import { Toaster } from 'react-hot-toast';

const ProductInfo = (info) => {




    const colors = info.info.availableColors

    // const size = [
    //     {
    //         value: "S"
    //     },
    //     {
    //         value: "M"
    //     },
    //     {
    //         value: "LG"
    //     },
    // ]

    const [AddtoCart, getFinalColor] = AddProductToCart()

    return (
        <div className="max-sm:mt-4">
            <h2 className="text-xl tracking-wide font-extrabold leading-9 text-black">{info.info.title}</h2>
            <div className="rating flex gap-2 items-center  mb-4 mt-2 ">
                {
                    info.info.ratingsQuantity > 0 ? <>
                        <h1 className="font-bold mt-1">{info.info.ratingsAverage}</h1>
                        <FontAwesomeIcon icon={faStar} className=' text-yellow-400   text-lg  cursor-pointer' />
                    </>
                        : <p className="font-medium text-base pt-1">no reivews</p>
                }
            </div>
            <h2 className="stock font-medium text-base  mt-5">
                Availability: {info.info.quantity} In Stock
            </h2>
            <div className="price font-extrabold text-xl mt-4 ">
                <span className="mr-3 line-through text-slate-500">
                    LE {info.info.price}
                </span>
                <span className="text-[#e95144]">LE {info.info.priceAfterDiscount}
                </span>
            </div>
            <div className='colors flex items-center mt-5 '>
                <h1 className='font-semibold text-base mr-2'>colors:</h1>
                <CirclePicker width=""
                    circleSpacing={8}
                    colors={colors}
                    onChangeComplete={(e, colors) => getFinalColor(colors.target.title)}
                />
            </div>
            {/* <div className="size mt-5 ">
                <h1 className="font-extrabold text-sm uppercase  pb-2">size <span className="text-lg text-red-400"> soon</span></h1>
                <div style={{ backgroundColor: "rgb(218 218 218 / 49%)" }} className="w-fit flex child:border
                                child:border-[#fff] p-1
                                    child:py-1 child:px-3 child:min-w-[45px] child:font-medium
                                    child:my-1 child:mr-2 flex-wrap child:text-center cursor-no-drop
                                    
                                    ">
                    {size.map((e) => {
                        return (
                            <div key={e.value} >{e.value}</div>
                        )
                    })}
                </div>
            </div> */}
            <div className="quantity_and_order mt-5 " >
                <h1 className="my-3 text-base font-normal italic"><a href="#" className="underline pb-2 ">Shipping</a>  calculated at checkout</h1>
                <div className=" mb-4 border border-[#bbb]  uppercase 
                    w-full lg:max-w-[90%]  leading-9 py-2 tracking-wide text-center
                    bg-black text-white font-serif">
                    free shipping on order over <span className="text-[#e95144]"> 750 </span>l.e
                </div>
                <div className="max-sm:w-full lg:max-w-[90%] lg:flex gap-2">
                    {/* <div className="quantity max-lg:my-3">

                        <div className="w-32 border border-[#bbb]  py-3 justify-between flex items-center ">
                            <h1 className="w-2/5 text-center pt-1 " >
                                <FontAwesomeIcon icon={faMinus} className='mr-1  text-[#6b6b6b]   text-lg  cursor-pointer' />
                            </h1>
                            <h1 className="text-lg font-medium  text-[#6b6b6b] text-center">{1}</h1>
                            <h1 className="w-2/5 text-center pt-1 " >
                                <FontAwesomeIcon icon={faPlus} className='mr-1  text-[#6b6b6b]  font-medium  text-lg cursor-pointer' />
                            </h1>
                        </div>

                    </div> */}
                    <div
                        onClick={() => AddtoCart(info.idProd)}
                        className="add_to_cart border border-[#bbb]  uppercase grow
                    w-full  leading-9 py-2 tracking-wide text-center
                    hover:bg-black duration-300 ease-in-out hover:text-white cursor-pointer ">
                        add to cart
                    </div>
                </div>
                <div className="
                order_now mt-2 border border-[#bbb]  uppercase 
                    w-full lg:max-w-[90%]  leading-9 py-2 tracking-wide text-center
                    bg-black text-white cursor-no-drop
                    ">
                    <FontAwesomeIcon icon={faBagShopping} className='mr-3  text-white  text-lg  cursor-pointer' />
                    Order Now - Cash on Delivery
                </div>
            </div>
            <div>
            </div>
            <Toaster
                position="top-center"
                reverseOrder={false}
            />
        </div>
    )
}

export default ProductInfo