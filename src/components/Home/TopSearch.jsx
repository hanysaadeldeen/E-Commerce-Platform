
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'

import img6 from "../../assets/image/6.png"
import img7 from "../../assets/image/7.png"
import img8 from "../../assets/image/8.jpeg"
const TopSearch = () => {
    return (
        <div className='md:py-10'>
            <div className="TopSearch container  max-sm:mb-5 mb-10  ">
                <div className="flex gap-5  max-md:flex-col ">
                    <div className="max-md:w-full  w-2/3  gap-2">
                        <div className="flex mb-1 items-center justify-between px-10 pt-4 cursor-pointer bg-[#DC4732] ">
                            <h1 className="text-white text-4xl font-bold"> On Sale</h1>
                            <img src={img6} className="max-sm:w-[100px] w-[170px]" alt="on sale" />
                        </div>
                        <div className="gap-1 flex w-full ">
                            <div className="bg-[#9f9fa294] cursor-pointer py-4 flex flex-col items-center justify-between w-1/2 ">
                                <img src={img7} className="w-[200px] mx-md:w-[250px] ml-20" alt="on sale" />
                                <h1 className="text-white max-sm:text-xl text-2xl mt-3 "> Clothes</h1>
                            </div>
                            <div className=" bg-[#9f9fa1] cursor-pointer py-4 flex flex-col items-center  justify-between w-1/2">
                                <img src={img8} className="w-full   mt-7" alt="on sale" />
                                <h1 className="text-white  max-sm:text-xl text-2xl mt-3 "> Accessories</h1>
                            </div>
                        </div>
                    </div>
                    <div className="max-md:w-full pt-2  w-2/3">
                        <h1 className="capitalize text-xl font-semibold mb-10 ">top search</h1>
                        <div className="type flex justify-between items-center border-b-2 font-semibold border-slate-200 mb-7 cursor-pointer capitalize text-xl px-1 pb-5">
                            <h2>denail</h2>
                            <FontAwesomeIcon icon={faAngleRight} />
                        </div>
                        <div className="type flex justify-between items-center border-b-2 font-semibold border-slate-200 mb-7 capitalize text-xl px-1 pb-5">
                            <h2 className=''>casual shoes</h2>
                            <FontAwesomeIcon icon={faAngleRight} />
                        </div>
                        <div className="type flex justify-between items-center border-b-2 font-semibold border-slate-200 mb-7 capitalize text-xl px-1 pb-5">
                            <h2>dress</h2>
                            <FontAwesomeIcon icon={faAngleRight} />
                        </div>
                        <div className="type flex justify-between items-center border-b-2 font-semibold border-slate-200 mb-7 capitalize text-xl px-1 pb-5">
                            <h2>minimalist</h2>
                            <FontAwesomeIcon icon={faAngleRight} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopSearch