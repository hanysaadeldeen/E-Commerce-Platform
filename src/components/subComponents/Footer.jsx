import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
{/* <FontAwesomeIcon icon="fa-brands fa-facebook" /> */ }
// import { fafacebook } from '@fortawesome/free--svg-icons'
import { faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faTiktok } from '@fortawesome/free-brands-svg-icons'
import { faPinterestP } from '@fortawesome/free-brands-svg-icons'
import { faYoutube } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom'

import visa from "../../assets/image/visa.png"
import master from "../../assets/image/masterCard.png"
import value from "../../assets/image/valu.png"
import cash from "../../assets/image/cashOndelivery.png"
const Footer = () => {
    return (
        // <div className='footer max-md:pb-14 mt-5  w-full bottom-0'>
        <footer className='max-md:pb-14 mt-5'>


            <div className=" bg-black    w-full " >
                <div className="container py-4">
                    <div className="grid  max-sm:gap-7 sm:gap-10 md:gap-7 lg:gap-5 max-lg:px-8 px-5 py-8 text-center max-sm:grid-cols-1  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
                        <div className="Privacy ">
                            <h1 className="text-white text-lg tracking-wider font-bold">Conditions</h1>
                            <Link to={"/Privacy-Policy"}>
                                <h1 className="text-[#B0B4B6] hover:text-white duration-100 ease-in-out cursor-pointer mt-3">Privacy Policy</h1>
                            </Link>
                            <Link to={"/Return-Product"}>
                                <h1 className="text-[#B0B4B6] hover:text-white duration-100 ease-in-out cursor-pointer mt-3">Returns Policy</h1>
                            </Link>
                            <Link to={"/Contact"}>
                                <h1 className="text-[#B0B4B6] hover:text-white duration-100 ease-in-out cursor-pointer mt-3">Call us</h1>
                            </Link>
                            <h1 className="text-[#B0B4B6] hover:text-white duration-100 ease-in-out cursor-no-drop mt-3">Branches</h1>
                        </div>
                        <div className="keep in touch">
                            <h1 className="text-white text-lg tracking-wider font-bold">keep in touch</h1>
                            <div className="flex gap-6 items-center justify-center mt-7 child-hover:text-[#B0B4B6]">
                                <FontAwesomeIcon icon={faFacebookF} className='text-white font-bolder text-xl cursor-pointer    duration-150 ease-in-out' />
                                <FontAwesomeIcon icon={faInstagram} className='text-white font-bolder text-xl cursor-pointer  duration-150 ease-in-out' />
                                <FontAwesomeIcon icon={faTiktok} className='text-white font-bolder text-xl cursor-pointer  duration-150 ease-in-out' />
                                <FontAwesomeIcon icon={faPinterestP} className='text-white font-bolder text-xl cursor-pointer  duration-150 ease-in-out' />
                                <FontAwesomeIcon icon={faYoutube} className='text-white font-bolder text-xl cursor-pointer  duration-150 ease-in-out' />
                            </div>
                        </div>
                        <div className="Contact Us ">
                            <h1 className="text-white text-lg tracking-wider font-bold">Contact Us</h1>
                            <Link to={"/Contact"}>
                                <h1 className="text-[#B0B4B6] hover:text-white duration-100 ease-in-out cursor-pointer mt-3">Contact Us</h1>
                            </Link>
                        </div>
                        <div className="PAYMENT ACCEPT">
                            <h1 className="text-white text-lg tracking-wider font-bold">PAYMENT ACCEPT</h1>
                            <div className='flex flex-wrap items-center justify-center gap-4  mt-7'>
                                <img src={visa} className='w-16' alt="visa" />
                                <img src={master} className='w-12' alt="master cart" />
                                <img src={value} className='w-14' alt="value" />
                                <img src={cash} className='w-16' alt="cash" />
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <h1 className='w-full bg-white font-light  tracking-wider  text-center pt-6 pb-7 '>&#169; Made by hany mohamed</h1>
        </footer >

    )
}

export default Footer