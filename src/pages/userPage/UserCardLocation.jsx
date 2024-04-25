import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom"
import DeleteAddresshook from "../../Hook/user/DeleteAddresshook"


/* eslint-disable react/prop-types */

const UserCardLocation = ({ info }) => {
    const [DeleteAddress, showModal, setShowModal] = DeleteAddresshook()
    return (
        <div className="mb-6 rounded-md flex  bg-[#F9F9F9] ">
            <div className="flex  p-3 flex-1 max-sm:flex-col  max-sm:gap-4 ">
                <div className=" grow text-left mr-6">
                    <h1 className="text-base font-bold mb-3 max-sm:mb-1 ">location: <span className="text-[#6b6b6b]"> {info.alias}  </span></h1>
                    <h1 className="text-base font-bold mb-3 max-sm:mb-1">deatails: <span className="text-[#6b6b6b]">{info.details}   </span> </h1>
                    <h1 className="text-base font-bold mb-3 max-sm:mb-1">phone: <span className="text-[#6b6b6b]">{info.phone}   </span> </h1>
                </div>
                <div className="flex gap-4">
                    <Link to={`/user/editAdress/${info._id}`}>
                        <h1 className="cursor-pointer font-bold text-[#6b6b6b]">edit <FontAwesomeIcon icon={faEdit} className="ml-1" /></h1>
                    </Link>
                    <h1 className="cursor-pointer font-bold text-[#6b6b6b]"
                        onClick={() => setShowModal(true)}
                    >
                        delete <FontAwesomeIcon icon={faTrash} className="text-red-500 ml-1" />
                    </h1>
                </div>
            </div>
            {showModal &&
                <>
                    <div
                        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                    >
                        <div className="relative w-auto my-6 mx-auto max-w-3xl">
                            {/*content*/}
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                {/*body*/}
                                <div className="relative p-6 flex-auto">
                                    <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
                                        Are You sure To Delete This Address
                                    </p>
                                </div>
                                {/*footer*/}
                                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                                    <button
                                        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={() => setShowModal(false)}
                                    >
                                        Keep it
                                    </button>
                                    <button
                                        className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={() => DeleteAddress(info._id)}
                                    >
                                        Delete
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            }
        </div>

    )
}

export default UserCardLocation