
import AdminSidePare from "./AdminSidePare"
// import Select from "react-dropdown-select";
import { GithubPicker } from 'react-color'
import { ToastContainer } from "react-toastify";
import Multiselect from "multiselect-react-dropdown";
import AdminEditProducthook from "../../Hook/admin/AdminEditproducthook";
import { useParams } from "react-router-dom";

// import ImageUploader from 'react-images-upload';
const AdminEditProductPage = () => {


    const { id } = useParams()

    const colors = ['#4D4D4D', '#999999', '#FFFFFF', '#F44E3B', '#FE9200',
        '#FCDC00', '#DBDF00', '#A4DD00', '#68CCCA', '#73D8FF', '#AEA1FF',
        '#FDA1FF', '#333333', '#808080', '#cccccc', '#D33115', '#E27300',
        '#FCC400', '#B0BC00', '#68BC00', '#16A5A5', '#009CE0', '#7B64FF',
        '#FA28FF', '#000000', '#666666', '#B3B3B3', '#9F0500', '#C45100',
        '#FB9E00', '#808900', '#194D33', '#0C797D', '#0062B1', '#653294',
        '#AB149E']



    const [submitEdit, getProductInfo, setProductName, setDescription,
        setProductPriceAfter, setProductPriceBefore,
        allCategroy, SubCatoegory, allBrand
        , setchoosenBrand, onRemove, onSelect, GetProductColors,
        ChoosenColor, setShowColorPicker, ShowColorPicker, remoreColor,
        setProductQuantity, editedProduct,

        productName, description, quantity, productPriceBefore,
        productPriceAfter, choosenCat, setChoosenCat, choosenBrand
    ] = AdminEditProducthook(id)


    return (
        <div className='py-20 relative'>
            <div className="container">
                <div className=" flex max-lg:flex-col gap-4 ">
                    <AdminSidePare addProduct={"addProduct"} />

                    {
                        editedProduct !== "" &&

                        <div className=" lg:w-full  lg:ml-5">
                            <h1 className="max-lg:hidden mb-3 text-xl font-semibold">Edit product</h1>
                            <div className="relative ">

                                <div className="flex gap-4">
                                    {
                                        editedProduct.images && editedProduct.images.map((img, index) => {
                                            return (
                                                <img src={img} className="w-24" alt="" key={index} />
                                            )
                                        })
                                    }
                                </div>


                                <h1 className="max-lg:hidden mt-6 text-xl font-semibold">Add new image</h1>
                                {/* <div className="w-3/5  max-lg:w-full">
                                    <ImageUploader
                                        withIcon={true}
                                        buttonText="Choose images"
                                        onChange={onDrop}
                                        imgExtension={['.jpg', '.gif', '.png', '.gif', '.jpeg']}
                                        maxFileSize={10000000}
                                        withPreview={true}
                                    />
                                </div> */}

                                <div className="inputs child:my-2 w-3/5 max-lg:w-full">
                                    <input type="text" name="" id="" placeholder="Prouct Name"
                                        className=" py-2 px-3 w-full rounded-sm border border-[#c0c0c0]"
                                        onChange={getProductInfo(setProductName)}
                                        value={productName}
                                    />
                                    <textarea name="" id="" placeholder="Product Description" cols="30" rows="3"
                                        className=" py-2 px-3  rounded-sm  w-full  border border-[#c0c0c0]"
                                        onChange={getProductInfo(setDescription)}
                                        value={description}
                                    />
                                    <input type="number" name="" id="" placeholder="Prouct Quantity"
                                        className=" py-2 px-3 w-full rounded-sm border border-[#c0c0c0]"
                                        onChange={getProductInfo(setProductQuantity)}
                                        value={quantity}
                                    />
                                    <input type="text" name="" id="" placeholder="Price Before Discount"
                                        onChange={getProductInfo(setProductPriceBefore)}
                                        value={productPriceBefore}
                                        className=" py-2 px-3    w-full rounded-sm border border-[#c0c0c0]" />
                                    <input type="text" name="" id="" placeholder="Price After Discount"
                                        onChange={getProductInfo(setProductPriceAfter)}
                                        value={productPriceAfter}
                                        className=" py-2 px-3    w-full rounded-sm border border-[#c0c0c0]" />
                                    <div className="child:mb-4">
                                        {/* Main Category */}
                                        <select
                                            name="languages"
                                            id="lang"
                                            className="select mt-3 px-2 "
                                            onChange={getProductInfo(setChoosenCat)}
                                            value={choosenCat}
                                        >
                                            <option value={0}>
                                                Main Category
                                            </option>
                                            {allCategroy
                                                ? allCategroy.map((e) => {
                                                    return (
                                                        <option value={e._id} key={e._id}
                                                        >
                                                            {e.name}
                                                        </option>
                                                    );
                                                })
                                                : null}
                                        </select>

                                        {/* sub Category */}
                                        <Multiselect
                                            options={SubCatoegory}
                                            className=""
                                            placeholder="Choose SubCatoegory"
                                            onSelect={onSelect}
                                            onRemove={onRemove}
                                            displayValue="name"
                                            style={{ color: "red" }}
                                        />

                                        {/* brand */}
                                        <select
                                            name="languages"
                                            id="lang"
                                            className="select mt-3 px-2 "
                                            onChange={getProductInfo(setchoosenBrand)}
                                            value={choosenBrand}
                                        >
                                            <option value={"0"} >
                                                Choose Brand
                                            </option>
                                            {allBrand
                                                ? allBrand.map((e) => {
                                                    return (
                                                        <option value={e._id} key={e._id}
                                                        >
                                                            {e.name}
                                                        </option>
                                                    );
                                                })
                                                : null}
                                        </select>


                                        {/* <Select
                                        placeholder={"Choose Brand"}
                                        closeOnScroll={true}
                                        clearOnBlur={true}
                                        options={Brand}
                                        onChange={(values) => GetBrand(values)} /> */}
                                    </div>
                                    <div className="Product_colors relative ">
                                        <h1 className="mb-2 pl-1 font-bold text-xl text-[#6F6F6F]">Choose Product Colors</h1>
                                        <div className="p-1 flex  items-center child:mr-3">
                                            {
                                                ChoosenColor && ChoosenColor.map((color, index) => {
                                                    return (
                                                        <div
                                                            className="w-8 h-8 rounded-full" id={color} key={index}
                                                            style={{ backgroundColor: color, border: "2px solid #6F6F6F", cursor: "pointer" }}
                                                            onClick={() => remoreColor(color)}
                                                        >
                                                        </div>
                                                    )
                                                })
                                            }
                                            <img src="/src/assets/image/add.png" className="w-8 cursor-pointer " alt=""
                                                onClick={() => setShowColorPicker(!ShowColorPicker)} />
                                        </div>
                                        {
                                            ShowColorPicker && <GithubPicker
                                                width={"300px "}
                                                colors={colors}
                                                triangle={"top-right"}
                                                onChange={(value) => GetProductColors(value.hex)}
                                            />
                                        }

                                    </div>
                                    <div className="mt-2 border border-[#bbb]  uppercase 
                                    w-fit leading-9 py-1 px-5 text-center tracking-wide 
                                    bg-black text-white cursor-pointer
                                    "
                                        onClick={submitEdit}>
                                        Edit product
                                    </div>
                                </div>
                            </div>
                        </div>
                    }
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

export default AdminEditProductPage