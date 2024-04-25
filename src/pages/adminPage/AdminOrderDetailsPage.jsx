import Select from "react-dropdown-select"
import AdminOrderCard from "./AdminOrderCard"
import AdminSidePare from "./AdminSidePare"

const options1 = [
    {
        value: 1,
        label: "processed"
    },
    {
        value: 2,
        label: "finished"
    },
    {
        value: 3,
        label: "cancel"
    },

];
const AdminOrderDetailsPage = () => {
    const setValues = (e) => {
        console.log(e[0].label);
    }
    return (
        <div className='py-20 relative'>
            <div className="container">
                <div className=" flex max-lg:flex-col gap-4 ">
                    <AdminSidePare allOrders={"allOrders"} />
                    <div className=" lg:w-full  lg:ml-5">
                        <h1 className="max-lg:hidden mb-3 text-[#888] text-xl font-bold">order number details : #4245</h1>
                        <div className="">
                            <AdminOrderCard trash={"trash"} />
                            <AdminOrderCard trash={"trash"} />
                        </div>
                        <div className="mb-6 rounded-md  p-3 bg-[#F9F9F9] ">
                            <h1 className="mb-3 font-bold text-xl">user Details</h1>
                            <div className="flex  flex-1 max-sm:flex-col  max-sm:gap-3 ">
                                <div className=" grow text-left mr-6">
                                    <h1 className="text-base font-bold mb-3 max-sm:mb-1 ">name : <span className="text-[#6b6b6b]">  hany mohamed </span></h1>
                                    <h1 className="text-base font-bold mb-3 max-sm:mb-1">email : <span className="text-[#6b6b6b] lowercase">  hsss@gmail.com </span> </h1>
                                    <h1 className="text-base font-bold mb-3 max-sm:mb-1">phone : <span className="text-[#6b6b6b]">  01093720956 </span> </h1>
                                </div>
                            </div>
                            <div className="text-center flex justify-center gap-4">
                                <div className=" border border-[#bbb]    rounded-sm 
                            w-fit  leading-9 py-1 px-5 tracking-wider text-center font-semibold 
                            cursor-pointer ">
                                    Total: 4574 $
                                </div>
                                <div className=" border border-[#bbb]    rounded-md 
                            w-fit  leading-9 py-1 px-5 text-white bg-black tracking-wider text-center font-semibold 
                            cursor-pointer ">
                                    Save
                                </div>
                                <div className=" flex gap-2 items-center sort-by ">
                                    <Select
                                        placeholder={"Order type"}
                                        color={"#c7c7c7"}
                                        closeOnScroll={true}
                                        className={"text-black  "}
                                        clearOnBlur={true}
                                        dropdownPosition={"top"}
                                        options={options1} onChange={(values) => setValues(values)} />
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminOrderDetailsPage