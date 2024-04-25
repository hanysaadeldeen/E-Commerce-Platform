
import { Link } from "react-router-dom";
import UserCardLocation from "./UserCardLocation";
import UserSidePare from "./UserSidePare";
import { Toaster } from 'react-hot-toast';
import GetAllAddresshook from "../../Hook/user/GetAllAddresshook";
import { SpinnerDiamond } from "spinners-react";
// import { SpinnerDiamond } from "spinners-react";

const UserLocationPage = () => {


    const [allAddress, isloading] = GetAllAddresshook()
    return (
        <div className='py-20 relative'>
            <div className="container">
                <div className=" flex max-lg:flex-col gap-4 ">
                    <UserSidePare location={"location"} />
                    <div className="lg:w-3/4">

                        {
                            !isloading ?
                                allAddress && allAddress.length > 0 ? allAddress.map(((item) => {
                                    return (
                                        <UserCardLocation
                                            key={item._id}
                                            info={item}
                                        />
                                    )

                                })) : <h1 className="text-center w-full text-2xl mb-20 mt-20  ">there is no Address  </h1>
                                :
                                <div className="flex items-center justify-center w-full">
                                    <SpinnerDiamond speed={150} secondaryColor={"#ddd"} />
                                </div>
                        }


                        <div className="flex justify-center items-center">
                            <Link to={"/user/AddNewAddress"} className="border border-[#bbb]  uppercase 
                            leading-9 py-2 tracking-wide text-center  px-6 rounded-sm
                        hover:bg-black duration-300 ease-in-out hover:text-white cursor-pointer ">
                                add new address
                            </Link>
                        </div>

                    </div>
                </div>
            </div>
            <Toaster
                position="top-center"
                reverseOrder={false}
                duration={2000}
            />
        </div>
    )
}


export default UserLocationPage