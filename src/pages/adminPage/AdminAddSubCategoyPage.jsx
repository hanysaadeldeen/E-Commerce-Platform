
import AdminSidePare from "./AdminSidePare"
// import Select from "react-dropdown-select";
import AdminAddSubCategoryhook from "../../Hook/admin/AdminAddSubCategoryhook";
import { ToastContainer } from "react-toastify";

const AdminAddSubCategoyPage = () => {

    const [category, getMainCategory, getSubCategory, onSave, mainCategory, SubCategory] = AdminAddSubCategoryhook()

    return (
        <div className='py-20 relative'>
            <div className="container">
                <div className=" flex max-lg:flex-col gap-4 ">
                    <AdminSidePare addSubcategory={"addSubcategory"} />
                    <div className="lg:w-3/4 max-lg:pl-2">
                        <h1 className="max-lg:hidden mb-5 text-xl font-semibold">add subCategory</h1>
                        <div className=" w-3/5 max-md:w-full">
                            <input type="text" name="" id=""
                                value={SubCategory}
                                placeholder="SubCategory Name"
                                onChange={getSubCategory}
                                className=" py-2 mb-3 px-3  w-full rounded-sm border border-[#c0c0c0]" />
                            {/* <Select
                                placeholder={"Main Catoegory"}
                                closeOnScroll={true}
                                clearOnBlur={true}
                                options={AllCatoegory}
                                onChange={(values) => SetCatoegory(values)} /> */}

                            <select
                                name="languages"
                                id="lang"
                                className="select mt-3 px-2 "
                                onChange={(e) => getMainCategory(e.target.value)}
                                value={mainCategory}
                            >
                                <option >
                                    Main Category
                                </option>
                                {category
                                    ? category.map((e) => {
                                        return (
                                            <option value={e._id} key={e._id}
                                            >
                                                {e.name}
                                            </option>
                                        );
                                    })
                                    : null}
                            </select>
                        </div>
                        <div className="mt-5 border border-[#bbb]  uppercase 
                                    w-fit leading-9 py-1 px-5 text-center tracking-wide 
                                    bg-black text-white cursor-pointer max-md:w-full 
                                    " onClick={onSave}>
                            save SubCategory
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

export default AdminAddSubCategoyPage