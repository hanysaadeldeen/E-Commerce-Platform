
import { Toaster } from 'react-hot-toast'
import Codehook from '../../Hook/Auth/Codehook'
import { Link } from 'react-router-dom'

const CodeVerify = () => {
    const [setResetCode, submit] = Codehook()

    return (
        <div className='py-20'>
            <div className="container  ">
                <div className="w-full text-center py-14 max-sm:py-7">
                    <h1 className='text-2xl font-extrabold tracking-wide  w-fit mx-auto px-3 border-black rounded-sm'>Inter the code </h1>
                    <h1 className='text-base  mt-5  tracking-wide  w-fit mx-auto '>code was sent to your email to reset your password.</h1>
                    <input type="number"
                        onChange={(e) => setResetCode(e.target.value)}
                        name="" id=""
                        placeholder="code"
                        className=" mt-6 mb-7  py-3 px-5 w-[500px] max-w-full mx-auto   rounded-sm border  border-[#c0c0c0]" />
                    <div className="">
                        <div onClick={submit} className="rounded-sm  uppercase  mb-4  w-[500px] max-w-full mx-auto  leading-9 py-2 tracking-wider text-center bg-black text-white cursor-pointer   ">
                            send code
                        </div>
                        <Link to="/loginPage">
                            <h1 className="text-md underline font-light underline-offset-2">cancel</h1>
                        </Link>
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

export default CodeVerify