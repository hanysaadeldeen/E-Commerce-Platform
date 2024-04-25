import { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faXmark, faBars } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";
/* eslint-disable react/prop-types */
const UserSidePare = ({ location, profile, order }) => {

    const [isOpen, setOpen] = useState("full");
    const [isFilter, setIsFilter] = useState("[calc(100%+32px)]");

    // toogle for drop down slider
    const btnref = useRef()
    useEffect(() => {
        let handler = (event) => {
            if (!btnref.current.contains(event.target)) {
                setOpen("full")
            }
        }
        document.addEventListener("mousedown", handler)
        return () => {
            document.removeEventListener("mousedown", handler)
        }
    }, [])
    const btnrefIlter = useRef()
    useEffect(() => {
        let handlerFilter = (event) => {
            if (!btnrefIlter.current.contains(event.target)) {
                setIsFilter("[calc(100%+32px)]")
            }
        }
        document.addEventListener("mousedown", handlerFilter)
        return () => {
            document.removeEventListener("mousedown", handlerFilter)
        }
    }, [])
    return (
        <>
            {
                isOpen === 0 || isFilter === 0 ?
                    <div className="fixed  top-0 left-0  bg-[#232323cc] h-screen duration-150  ease-in-out
                            w-full z-40 cursor-pointer"></div>
                    : null
            }
            <div ref={btnrefIlter} className={"max-w-[200px] lg:w-[210px]  lg:max-h-[80vh]  lg:h-[80vh] rounded-md  bg-[#F9F9F9] max-lg:w-3/5 max-lg:max-w-[300px] max-lg:z-50  max-lg:pl-2 max-lg:pt-1 max-lg:fixed max-lg:left-0 max-lg:bottom-0 max-lg:top-0 max-lg:duration-[.6s] max-lg:ease-in-out " +
                (isFilter !== 0 ? "max-lg:-translate-x-[calc(100%+32px)]" : "max-lg:-translate-x-0")}>
                <div className="w-full">
                    <div className="lg:hidden w-full relative slider_name ">
                        <h1 className="font-extrabold text-2xl tracking-wider mt-2"></h1>
                        <div className={"absolute -right-8 -top-3 w-8 h-8  text-center p-1  duration-75 " +
                            (isFilter !== 0 ? "bg-[#5e5e5e]" : "bg-[#353434]")} >
                            <FontAwesomeIcon icon={faXmark} className={"text-2xl  cursor-pointer duration-75  text-white " +
                                (isFilter !== 0 && "opacity-20")}
                                onClick={() => setIsFilter("[calc(100%+32px)]")} />
                        </div>
                    </div>
                    <div className="max-lg:h-screen  max-lg:overflow-y-auto  max-lg:pb-24 max-lg:pr-3">
                        <div className="all_order   ">
                            <Link to="/user/order">
                                <h1 className={"font-extrabold p-5 text-center uppercase border-b rounded-t-md  border-[#787878] " + (order !== undefined ? "bg-[#eee]" : "hover:bg-[#eee] duration-300 ease-in-out")} >All orders</h1>
                            </Link>
                        </div>
                        <div className="location">
                            <Link to="/user/location">

                                <h1 className={"font-extrabold p-5  uppercase border-b text-center  border-[#787878] " + (location !== undefined ? "bg-[#eee]" : "hover:bg-[#eee] duration-300 ease-in-out")}>location</h1>
                            </Link>
                        </div>
                        <div className="profile    ">
                            <Link to="/user/profile">
                                <h1 className={"font-extrabold p-5  uppercase border-b  text-center border-[#787878] " + (profile !== undefined ? "bg-[#eee]" : "hover:bg-[#eee] duration-300 ease-in-out")}>profile </h1>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="lg:hidden pl-2" >
                <div onClick={() => setIsFilter(prev => prev === "[calc(100%+32px)]" ? 0 : "[calc(100%+32px)]")} className="cursor-pointer w-fit flex items-center ">
                    <FontAwesomeIcon icon={faBars} className='mr-5  text-2xl cursor-pointer' />
                    {
                        order !== undefined ?
                            <h1 className="text-xl font-bold tracking-wide ">all order</h1>
                            : null
                    }
                    {
                        location !== undefined ?
                            <h1 className="text-xl font-bold tracking-wide ">location</h1>
                            : null
                    }
                    {
                        profile !== undefined ?
                            <h1 className="text-xl font-bold tracking-wide ">profile</h1>
                            : null
                    }
                </div>
            </div>
        </>
    )
}

export default UserSidePare