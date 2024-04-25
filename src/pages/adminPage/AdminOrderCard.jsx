import { faTrash } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const AdminOrderCard = ({ trash }) => {
    return (
        <div className="flex max-sm:flex-col mb-3 relative bg-[#F9F9F9]">
            {
                trash !== undefined ? <div className="absolute bottom-2 right-2 flex items-center gap-1 cursor-pointer">
                    <h1 className="text-[#DC4732] font-bold">delete</h1>
                    <FontAwesomeIcon icon={faTrash} className="text-[#DC4732] " />
                </div> : null
            }

            <div className="w-32 max-[400px]:mx-auto  mr-6">
                <img src="/src/assets/image/product details/2.png" className="max-sm:rounded-md  rounded-l-md" alt="" />
            </div>
            <div className="flex  py-3 pr-3 flex-1 max-md:flex-col max-md:text-left text-right">
                <div className="desc grow  text-left mr-6">
                    <div className="">
                        <h1 className="text-base font-bold mb-3 max-sm:mb-1 ">The Joni High Rise Loose 29L</h1>
                        <h1 className="text-lg text-[#6b6b6b]  mb-3 max-sm:mb-1">Black / M</h1>
                        <h1 className="text-lg text-[#6b6b6b]  mb-3 max-sm:mb-1"><span className="text-black font-bold">Brand :</span> canva store</h1>
                        <h1 className="text-lg text-[#6b6b6b]  mb-3 max-sm:mb-1"><span className="text-black font-bold">quantity :</span> 2 </h1>
                    </div>
                </div>
                <div className="price font-bold   w-28 pt-1">
                    <h1>LE 600.34</h1>
                </div>
            </div>
        </div>
    )
}

export default AdminOrderCard