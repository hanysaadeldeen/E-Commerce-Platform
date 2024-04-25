
import AddAddresshook from "../../Hook/user/AddAddresshook";
import UserSidePare from "./UserSidePare"
import { Toaster } from 'react-hot-toast';

const UserAddNewAddressPage = () => {

    const [AddProduct, setAlias, setPhone, setDetails, getInputInfo] = AddAddresshook()
    return (
        <div className='py-20 relative'>
            <div className="container">
                <div className=" flex max-lg:flex-col gap-4 ">
                    <UserSidePare location={"location"} />
                    <div className="lg:w-3/4 max-lg:pl-2">
                        <h1 className="font-bold text-xl tracking-wide">add a new address</h1>
                        <div className=" max-sm:w-full w-3/4 mt-4 ">
                            <div className=" flex w-full flex-col gap-4  ">
                                <input type="text" name=""
                                    onChange={getInputInfo(setAlias)}
                                    id="" placeholder="Your Town" className="p-2
                                w-full  rounded-md  border border-[#c0c0c0]" />
                                <textarea name="" id=""
                                    onChange={getInputInfo(setDetails)}
                                    rows="4" className=" rounded-md  border border-[#c0c0c0] resize-none p-2" placeholder="Your address with more details like (cairo,damitta,elroda,elhesar)"></textarea>
                                <input type="number" name=""
                                    onChange={getInputInfo(setPhone)}
                                    id="" placeholder="Your Number" className="p-2
                                w-full  rounded-md  border border-[#c0c0c0]" />
                            </div>
                        </div>
                        <h1
                            onClick={AddProduct}
                            className="border border-[#bbb]  uppercase
                            leading-9 py-2 px-6 tracking-wide text-center w-fit mx-auto rounded-sm mt-4
                        hover:bg-black duration-300 ease-in-out hover:text-white cursor-pointer ">
                            add address
                        </h1>
                    </div>
                </div>
            </div>
            <Toaster
                position="top-center"
                reverseOrder={false}
            />
        </div>
    )
}

export default UserAddNewAddressPage