import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTrash } from "@fortawesome/free-solid-svg-icons"
import AdminOrderCard from "./AdminOrderCard"
const AdminOrderContainerCard = () => {
    return (
        <div className="cursor-pointer mb-6 rounded-md  relative max-sm:p-3 bg-[#F9F9F9] ">
            <div className="absolute top-2 right-2 flex items-center gap-1">
                <h1 className="text-[#DC4732] font-bold">delete</h1>
                <FontAwesomeIcon icon={faTrash} className="text-[#DC4732] " />
            </div>
            <h1 className="pt-2 pl-3 font-bold mb-3 text-[#888]">order:#313</h1>
            <Link to={"/admin/orderInfo"}>
                <AdminOrderCard />
                <AdminOrderCard />
            </Link>


        </div>
    )
}

export default AdminOrderContainerCard