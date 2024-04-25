
import AdminSidePare from "./AdminSidePare"
import AdminGetAllOrderhook from "../../Hook/admin/AdminGetAllOrderhook"
import { SpinnerDiamond } from "spinners-react"
import { useParams } from "react-router-dom"
import AdminSpecifcOrderCard from "./AdminSpecifcOrderCard"
import Select from "react-dropdown-select"
import { Toaster } from "react-hot-toast"

const AdminSpecificOrderPage = () => {

    const { id } = useParams()
    const [, isLoading, SpecificOrder, setIsPaid, setIsDeliverd, Delivery, paid, ChangePaid, ChangeDelevery] = AdminGetAllOrderhook(id)

    return (
        <div className='py-20 relative'>
            <div className="container">
                <div className=" flex max-lg:flex-col gap-4 ">
                    <AdminSidePare allOrders={"allOrders"} />
                    <div className=" lg:w-full  lg:ml-5">
                        <h1 className="max-lg:hidden mb-3 text-xl font-semibold">Details Order number #{SpecificOrder.id}</h1>
                        {
                            !isLoading ?
                                SpecificOrder && SpecificOrder.cartItems && SpecificOrder.cartItems.map((info) => {
                                    return (
                                        <AdminSpecifcOrderCard info={info} key={info._id} />
                                    )
                                })
                                : <div className="flex items-center justify-center w-full">
                                    <SpinnerDiamond speed={150} secondaryColor={"#ddd"} />
                                </div>
                        }

                        {
                            !isLoading &&
                            SpecificOrder && SpecificOrder.user &&
                            <div className="rounded-md  p-3 bg-[#F9F9F9]">
                                <h1 className="text-lg font-bold">user details</h1>
                                <h1 className="my-2 font-medium text-lg">User Name: {SpecificOrder.user.name}</h1>
                                <h1 className="my-2 font-medium text-lg">User Phone: {SpecificOrder.user.phone}</h1>
                                <h1 className="my-2 font-medium text-lg">User email: {SpecificOrder.user.email}</h1>
                                <div className="flex gap-3 my-5 flex-wrap justify-between max-sm:justify-center items-center font-semibold  pb-2 ">
                                    <h1 className="border-[#bbb]  uppercase 
                                        w-fit  leading-9 py-1.5 px-7 rounded-md tracking-wide text-center
                                        bg-black text-white ">Total  Price : LE {SpecificOrder.totalOrderPrice}
                                    </h1>
                                    <div className="flex gap-3 items-center">
                                        <Select
                                            placeholder={"isPaid"}
                                            color={"#c7c7c7"}
                                            closeOnScroll={true}
                                            className={"text-black  "}
                                            clearOnBlur={true}
                                            labelField={"value"}
                                            options={paid}
                                            onChange={(values) => setIsPaid(values)} />
                                        <h1 onClick={ChangePaid} className="border-[#bbb]  uppercase 
                                        w-fit  leading-9 py-1 px-7 rounded-md tracking-wide text-center cursor-pointer
                                        bg-black text-white ">Change
                                        </h1>
                                    </div>

                                    <div className="flex gap-3 items-center">
                                        <Select
                                            placeholder={"Delivery"}
                                            color={"#c7c7c7"}
                                            closeOnScroll={true}
                                            className={"text-black  "}
                                            clearOnBlur={true}
                                            labelField={"value"}
                                            options={Delivery}
                                            onChange={(values) => setIsDeliverd(values)} />
                                        <h1 onClick={ChangeDelevery} className="border-[#bbb]  uppercase 
                                        w-fit  leading-9 py-1 px-7 rounded-md tracking-wide text-center cursor-pointer
                                        bg-black text-white ">Change
                                        </h1>
                                    </div>
                                </div>
                            </div>
                        }
                    </div>
                </div>
            </div>
            <Toaster
                position="top-center"
                reverseOrder={false}
            />
        </div>
    )
}

export default AdminSpecificOrderPage