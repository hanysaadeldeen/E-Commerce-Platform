
import { SpinnerDiamond } from "spinners-react";
import AllOrderhook from "../../Hook/user/AllOrderhook";
import UserCardOrder from "./UserCardOrder";
import UserSidePare from "./UserSidePare";
const UserAllOrdersPage = () => {
    const [order, isloading] = AllOrderhook()
    return (
        <div className='py-20 relative'>
            <div className="container">
                <div className=" flex gap-4 max-lg:flex-col">
                    <UserSidePare order={"order"} />
                    <div className="lg:w-3/4">
                        {
                            !isloading ?
                                order && order.data && order.data.length > 0 ? order.data.map((item) => {
                                    return (<UserCardOrder info={item} key={item._id} />
                                    )
                                }) :
                                    <h1 className="text-center  text-2xl  w-full">{"You don't have any order"}</h1>
                                :
                                <div className="flex items-center justify-center w-full">
                                    <SpinnerDiamond speed={150} secondaryColor={"#ddd"} />
                                </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserAllOrdersPage