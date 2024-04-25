// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { SpinnerDiamond } from "spinners-react"
import AdminAllProducthook from "../../Hook/admin/AdminAllProducthook"
import AdminProductCard from "./AdminProductCard"
import AdminSidePare from "./AdminSidePare"
// import { faEdit } from "@fortawesome/free-solid-svg-icons"

import Bagination from "../../components/subComponents/Bagination"
const AdminAllProductPage = () => {



    const [Allproducts, isLoading, error, paginationResult, getProductFilter, deletespecificProduct] = AdminAllProducthook()




    return (

        <div className='py-20 relative'>
            <div className="container ">
                <div className="flex max-lg:flex-col gap-4">
                    <AdminSidePare allProducts={"allProducts"} />
                    <div className=" lg:w-full  lg:ml-5">
                        <h1 className="max-lg:hidden mb-3 text-xl font-semibold">All Products</h1>
                        <div>
                            <div className="grid grid-cols-4 max-lg:grid-cols-3  max-md:grid-cols-2  gap-3">
                                {
                                    Allproducts.length > 0 && Allproducts.map((product) => {
                                        return (
                                            <AdminProductCard DeleteProduct={deletespecificProduct} key={product._id} item={product} />
                                        )
                                    })
                                }
                            </div>
                            {
                                paginationResult && Allproducts.length > 0 &&
                                <Bagination
                                    PagesCound={paginationResult.numberOfPages}
                                    getPage={getProductFilter} />
                            }
                        </div>


                        {
                            Allproducts.length == 0 && !isLoading &&
                            <h1 className="text-center  text-2xl  w-full">there is no product</h1>
                        }
                        {
                            error !== null && !isLoading &&
                            <>
                                <h1 className="text-center  text-2xl  w-full">Connetion faild </h1>
                                <div className="flex items-center justify-center w-full">
                                    <SpinnerDiamond speed={150} secondaryColor={"#ddd"} />
                                </div>
                            </>
                        }

                    </div>
                </div>



            </div>
        </div>
    )
}

export default AdminAllProductPage