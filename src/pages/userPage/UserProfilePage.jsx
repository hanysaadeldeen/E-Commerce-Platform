import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEdit } from '@fortawesome/free-solid-svg-icons'
import UserSidePare from "./UserSidePare"
import { Toaster } from 'react-hot-toast';
import GetLogedUserhook from "../../Hook/user/GetLogedUserhook";
import { SpinnerDiamond } from "spinners-react";
import UpdateUserPasshook from "../../Hook/user/UpdateUserPasshook";

const UserProfilePage = () => {


    const [user, isloading] = GetLogedUserhook()


    const [updatePassword, getInputInfo, setPasswordConfirm, setPassword,
        setCurrentPassword, UpdateINfo, nameUser, phoneUser, setNameUser,
        setPhoneuser, updateNameAndPhone, open, onOpenModal, onCloseModal] = UpdateUserPasshook()


    return (
        <div className='py-20 relative'>

            <div className="container">

                {
                    open &&
                    <div className="fixed  top-0 left-0  bg-[#535353cc] h-screen duration-150  ease-in-out
                        w-full z-40 cursor-pointer">
                    </div>
                }
                {
                    open && <div
                        className="z-50 absolute top-7 -translate-x-[50%] left-1/2 bg-[#fff]  max-md:w-4/5 md:w-[600px] p-4 rounded-lg ">
                        <h1 className="text-center mb-3 text-xl font-bold ">change your information</h1>
                        <input type="test" name="" id="" placeholder="Change Name" className="p-2
                                w-full  rounded-md mb-4 border border-[#c0c0c0]"
                            value={nameUser}
                            onChange={updateNameAndPhone(setNameUser)}

                        />
                        <input type="test" name="" id="" placeholder="Change Phone" className="p-2
                                w-full  rounded-md  border border-[#c0c0c0]"
                            value={phoneUser}
                            onChange={updateNameAndPhone(setPhoneuser)}
                        />
                        <div className="flex gap-5 mt-4"
                        >
                            <button

                                className="text-white rounded-md bg-green-400 test-xl p-2 font-bold  w-1/2" onClick={onCloseModal}>Close</button>
                            <button onClick={UpdateINfo} className="text-white rounded-md bg-red-600 test-xl p-2  font-bold w-1/2">Update</button>
                        </div>
                    </div>
                }



                <div className=" flex max-lg:flex-col gap-4 ">
                    <UserSidePare profile={"profile"} />
                    {
                        !isloading && user ?
                            <div className="lg:w-3/4 max-lg:pl-2">
                                <h1 className="font-bold text-xl tracking-wide ml-2 mb-2">main profile </h1>
                                <div className="mb-6 rounded-md flex  bg-[#F9F9F9] ">
                                    <div className="flex  p-3 flex-1 max-sm:flex-col  max-sm:gap-3 ">
                                        <div className=" grow text-left mr-6">
                                            <h1 className="text-base font-bold mb-3 max-sm:mb-1 ">name : <span className="text-[#6b6b6b]">  {user.name}</span></h1>
                                            <h1 className="text-base font-bold mb-3 max-sm:mb-1">email : <span className="text-[#6b6b6b] lowercase">  {user.email}</span> </h1>
                                            <h1 className="text-base font-bold mb-3 max-sm:mb-1">phone : <span className="text-[#6b6b6b]">  {user.phone} </span> </h1>
                                        </div>
                                        <div className="">

                                            <h1
                                                onClick={onOpenModal}
                                                className="cursor-pointer font-bold text-[#6b6b6b]"
                                            >edit <FontAwesomeIcon icon={faEdit} className="ml-1" /></h1>
                                        </div>
                                    </div>
                                </div>


                                <div className="password gap-4 flex flex-col">
                                    <input type="password"
                                        onChange={getInputInfo(setCurrentPassword)}
                                        name="" id="" placeholder="old password" className="p-2
                                w-full  rounded-md  border border-[#c0c0c0]" />
                                    <input type="password"
                                        onChange={getInputInfo(setPassword)}
                                        name="" id="" placeholder="new Password" className="p-2
                                w-full  rounded-md  border border-[#c0c0c0]" />
                                    <input type="password"
                                        onChange={getInputInfo(setPasswordConfirm)}
                                        name="" id="" placeholder="Confirm password " className="p-2
                                w-full  rounded-md  border border-[#c0c0c0]" />
                                </div>
                                <h1
                                    onClick={updatePassword}
                                    className="border border-[#bbb]  uppercase
                                leading-9 py-1 px-4 tracking-wide text-center w-fit  rounded-sm mt-4
                                bg-black text-white   cursor-pointer ">
                                    Update password
                                </h1>
                            </div> :
                            <div className="flex items-center justify-center w-full">
                                <SpinnerDiamond speed={150} secondaryColor={"#ddd"} />
                            </div>
                    }



                </div>
            </div>
            <Toaster
                position="top-center"
                reverseOrder={false}
            />
        </div>
    )
}

export default UserProfilePage