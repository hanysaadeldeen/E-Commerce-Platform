/* eslint-disable react/prop-types */

const CardProdctInfo = ({ info }) => {

    return (
        <div className=" my-4 border-b  border-[#d9d9d9] pb-2 px-1   flex items-center  ">
            <div className="relative img_section w-fit mr-3">
                <div className="w-16 h-16 overflow-hidden">
                    <img src={info.product.imageCover} alt="" />
                </div>
                <span className="absolute -top-3 bg-red left-14 bg-[#7c7c7c] w-5 h-5 text-xs rounded-full  text-center leading-5 text-white ">{info.count}</span>
            </div>
            <div className="grow  info   mr-1 name_order_now">
                <h1 className="font-semibold text-base  mb-1">{info.product.title}</h1>
                <div className='flex '>
                    <span className="w-5 h-5  rounded-full mr-1 mt-0.5 border-2" style={{ backgroundColor: `${info.color}` }}></span>
                    <span className='text-lg'>/ M</span>
                </div>
            </div>
            <div className="price w-24 flex items-center gap-2 flex-wrap justify-center " >
                <h1 > LE {info.price} EGP</h1>
            </div>
        </div>
    )
}

export default CardProdctInfo