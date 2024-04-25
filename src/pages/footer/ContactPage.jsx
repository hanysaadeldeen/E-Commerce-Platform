import { faPhone } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import whatsApp from "../../assets/image/whatsApp.png"

const ContactPage = () => {
    return (
        <div className="py-20 bg-[#F7F8FA]">
            <div className="container ">
                <div className="mt-10">
                    <h1 className="text-center text-2xl  uppercase  font-semibold tracking-wide mb-12">Contact us</h1>
                    <h1 className="text-center max-sm:text-2xl text-3xl uppercase  font-extrabold tracking-tight  mb-16">GET IN TOUCH</h1>
                    <div className="grid grid-col-1 md:grid-cols-2 ">
                        <div className="">
                            <h1 className="font-bold text-xl mb-3">Send us an email </h1>
                            <p className="font-medium mb-7"> Ask us anything! We are here to help.</p>
                            <label htmlFor="Name" className="ml-1 tracking-wider ">Name</label>
                            <input type="text" name="" id="Name" placeholder="Your Name" className=" py-2 px-3 mt-2 mb-6   w-full rounded-sm border border-[#c0c0c0]" />
                            <label htmlFor="PhoneNumber" className="ml-1 tracking-wider ">Phone Number</label>
                            <input type="number" name="" id="PhoneNumber" placeholder="Your Phone" className=" py-2 px-3 mt-2  mb-6   w-full rounded-sm border border-[#c0c0c0]" />
                            <label htmlFor="email" className="ml-1 tracking-wider ">Email</label>
                            <input type="email" name="" id="email" placeholder="Your Email" className=" py-2 px-3 mt-2  mb-6   w-full rounded-sm border border-[#c0c0c0]" />
                            <label htmlFor="comment" className="ml-1 tracking-wider ">Comment</label>
                            <textarea name="" id="" placeholder="Add Comment" cols="30" rows="10" className="py-2 px-3 rounded-sm border border-[#c0c0c0] mt-2 w-full"></textarea>
                            <h1 className=" border border-[#bbb]  mb-3 uppercase 
                            leading-9 py-2 px-7 mt-5 tracking-wide  w-fit 
                            bg-black text-white duration-300  ease-in-out hover:text-black hover:bg-white cursor-pointer">
                                submit contact
                            </h1>
                        </div>
                        <div className="md:ml-20 p-6">
                            <div className="flex gap-3 items-center">
                                <FontAwesomeIcon icon={faPhone} className="text-lg " />
                                <a href="tel:+201093720956" >
                                    <span className="font-semibold">CALL US  </span>
                                    : 01093720956
                                </a>
                            </div>
                            <div className=" mt-5 flex gap-2 items-center">
                                <a href="http://wa.me/+201093720956" >
                                    <img src={whatsApp} className="w-12" />

                                </a>
                                <h1 className="text-lg">: send message</h1>
                            </div>
                            <div className=" mt-5 flex gap-2 items-center">
                                <a href="mailto:saaddeenhany@gmail.com" >
                                    <span className="font-semibold">saaddeenhany@gmail.com</span>
                                </a>
                                <h1 className="text-xl font-normal">: our email</h1>
                            </div>
                            <div className="mt-10">
                                <h1 className="font-medium  mb-1"> Opening Hours:</h1>
                                <h1 className="font-normal "> Saturday to Thursday: from 9 AM to 5 PM</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactPage