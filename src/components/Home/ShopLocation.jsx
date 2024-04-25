

import img from "../../assets/image/14.jpeg"

const ShopLocation = () => {
    return (
        <div className="container  mb-24">
            <div className="relative">
                <div className="">
                    <div className="mx-auto max-md:w-full max-lg:w-9/12  w-1/2">
                        <img src={img} className="  " alt="location" />
                    </div>
                </div>
                <div className="w-max flex flex-col items-center justify-center absolute bottom-[-74px] bg-white py-[25px] px-[30px]  left-1/2 translate-x-[-50%]">
                    <h1 className="text-2xl max-md:text-xl capitalize font-semibold">Shop directly at store</h1>
                    <h1 className="capitalize text-[#DC4732] cursor-pointer">explore location</h1>
                </div>
            </div>
        </div>
    )
}


export default ShopLocation