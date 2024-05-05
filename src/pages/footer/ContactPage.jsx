
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { useEffect } from "react";

const ContactPage = () => {
    const ScrollToTop = () => {
        useEffect(() => {
            window.scrollTo(0, 0);
        }, []);

        return null;
    };
    ScrollToTop()
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
                            leading-9 py-2 px-7 mt-5 tracking-wide  w-full text-center 
                            bg-black text-white duration-300  ease-in-out hover:text-black hover:bg-white cursor-pointer">
                                submit contact
                            </h1>
                        </div>
                        <div className="md:ml-20 p-6">
                            <h1 className="mb-14 text-3xl text-center font-medium">contact us directly</h1>
                            <div className="flex  items-center gap-8 justify-center">
                                <a href="tel:+201093720956" title="Call us" >
                                    <FontAwesomeIcon icon={faPhone} className="text-3xl  " />
                                </a>
                                <a href="http://wa.me/+201093720956" title="our whatsApp ">
                                    <FontAwesomeIcon icon={faWhatsapp} className="text-4xl text-green-500" />
                                </a>
                                <a href="mailto:saaddeenhany@gmail.com" title="our gmail">
                                    <FontAwesomeIcon icon={faEnvelope} className="text-4xl text-[#3e65cf]" />
                                </a>
                            </div>
                            <div className="mt-12 text-center">
                                <h1 className="font-medium text-xl   mb-2"> Opening Hours:</h1>
                                <h1 className="font-normal text-lg"> Saturday to Thursday: from 9 AM to 5 PM</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactPage