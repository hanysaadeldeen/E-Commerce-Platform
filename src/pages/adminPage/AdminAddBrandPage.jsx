import { ToastContainer } from "react-toastify"
import AdminAddBrandhook from "../../Hook/admin/AdminAddBrandhook"
import AdminSidePare from "./AdminSidePare"

const AdminAddBrandPage = () => {

    const [image, changeImage, getBrandName, brandName, onSave] = AdminAddBrandhook()
    return (
        <div className='py-20 relative'>
            <div className="container">
                <div className=" flex max-lg:flex-col gap-4 ">
                    <AdminSidePare addBrand={"addBrand"} />
                    <div className="lg:w-3/4 max-lg:pl-2">
                        <h1 className="max-lg:hidden mb-5 text-xl font-semibold">add brand</h1>
                        <h1 className="mb-1 text-[#888] pl-5 text-md font-semibold">Brand Image</h1>
                        <div className="w-fit">
                            <label htmlFor="addCategroy" className=" ">
                                <img src={image}
                                    className="my-3 w-28 cursor-pointer " alt="upload img" />
                            </label>
                            <input type="file" name="" id="addCategroy" className="hidden" onChange={changeImage} />
                        </div>
                        <input type="text" name="" id="" value={brandName} placeholder="category Name" className=" py-2 px-3 w-3/5 max-md:w-full rounded-sm border border-[#c0c0c0]"
                            onChange={getBrandName}
                        />
                        <div className="mt-5 border border-[#bbb]  uppercase 
                                    w-fit leading-9 py-1 px-5 text-center tracking-wide 
                                    bg-black text-white cursor-pointer max-md:w-full 
                                    " onClick={onSave}>
                            save Brand
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
                transition:Bounce
            />
        </div>
    )
}

export default AdminAddBrandPage