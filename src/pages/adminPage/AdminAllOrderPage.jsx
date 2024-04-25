
import AdminSidePare from "./AdminSidePare"
import AdminGetAllOrderhook from "../../Hook/admin/AdminGetAllOrderhook"
import { SpinnerDiamond } from "spinners-react"
import { Link } from "react-router-dom"

const AdminAllOrderPage = () => {

    const [AllOrder, isLoading] = AdminGetAllOrderhook()

    return (
        <div className='py-20 relative'>
            <div className="container">
                <div className=" flex max-lg:flex-col gap-4 ">
                    <AdminSidePare allOrders={"allOrders"} />
                    <div className=" lg:w-full  lg:ml-5">
                        <h1 className="max-lg:hidden mb-3 text-xl font-semibold">All Orders</h1>
                        {
                            !isLoading ?
                                AllOrder && AllOrder.map((info) => {
                                    return (
                                        <Link to={`/admin/orderId/${info._id}`} key={info._id} >
                                            <div className="mb-4 bg-[#F9F9F9] p-3 rounded-md">
                                                <h1 className="p-3 mb-2 "> order number: #{info.id}</h1>
                                                <h1 className="my-3 px-3 text-xl">user name: <span className="font-bold text-[#426EB8]"> {info.user.name}</span> &nbsp;&nbsp;&&&nbsp;&nbsp;Email: <span className="font-bold text-[#FFAC00]">{info.user.email}</span>  </h1>
                                                <div className="flex gap-3 flex-wrap justify-between max-sm:justify-center items-center font-semibold  pb-2 px-3">
                                                    <h1 className="">Total-Price : <span className="text-[#426EB8] font-bold text-lg"> {info.totalOrderPrice}</span> </h1>
                                                    <h1 className="">IsDelivered : <span className="text-[#426EB8] font-bold text-lg"> {!info.isDelivered ? "No" : "Yes"}</span></h1>
                                                    <h1 className="">IsPaid :<span className="text-[#426EB8] font-bold text-lg"> {!info.isPaid ? "No" : "Yes"}</span> </h1>
                                                    <h1 className="">Payment-Method :<span className="text-[#426EB8] font-bold text-lg"> {info.paymentMethodType}</span> </h1>
                                                </div>
                                            </div>
                                        </Link>
                                    )
                                })
                                : <div className="flex items-center justify-center w-full">
                                    <SpinnerDiamond speed={150} secondaryColor={"#ddd"} />
                                </div>
                        }
                    </div>

                </div>
            </div>
        </div>
    )
}

export default AdminAllOrderPage