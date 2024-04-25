
import AdminSidePare from "./AdminSidePare"
import AdminAddcouponhook from '../../Hook/admin/AdminAddcouponhook'
import AdminCouponCard from './AdminCouponCard'
import { SpinnerDiamond } from 'spinners-react'
import { Toaster } from "react-hot-toast"




const AdminAddCouponpage = () => {

    const [Allcoupon, isloading, getDataCoupone, setName,
        setExpire, setdiscount, discount, expire,
        name, dateRef, onSave, DeleteOneCoupon, setShowModal, showModal] = AdminAddcouponhook()


    return (
        <div className='py-20 relative'>
            <div className="container">
                <div className=" flex max-lg:flex-col gap-4 ">
                    <AdminSidePare addCoupon={"addCoupon"} />

                    <div className="lg:w-3/4 child:mb-4 max-lg:pl-2">
                        <h1 className="max-lg:hidden mb-5 text-xl font-semibold">add coupon</h1>
                        <input
                            type="text"
                            placeholder="Coupon Name" className=" py-2 px-3 w-3/5 max-md:w-full rounded-sm border border-[#c0c0c0]"
                            onChange={getDataCoupone(setName)}
                            value={name}
                        />
                        <input
                            ref={dateRef}
                            type="text"
                            placeholder="Expire Date" className=" py-2 px-3 w-3/5 max-md:w-full rounded-sm border border-[#c0c0c0]"
                            onFocus={() => (dateRef.current.type = "date")}
                            onBlur={() => (dateRef.current.type = "text")}
                            onChange={getDataCoupone(setExpire)}
                            value={expire}
                        />
                        <input
                            type="number"
                            placeholder="Discount Amount" className=" py-2 px-3 w-3/5 max-md:w-full rounded-sm border border-[#c0c0c0]"
                            onChange={getDataCoupone(setdiscount)}
                            value={discount}
                        />

                        <div className="mt-5  border border-[#bbb]  uppercase  w-fit leading-9 py-1 px-5 text-center tracking-wide  bg-black text-white cursor-pointer max-md:w-full "
                            onClick={onSave}
                        >
                            add coupone
                        </div>
                        <div className='mt-10'>
                            {
                                !isloading ?
                                    Allcoupon.data &&
                                        Allcoupon.data.length > 0 ? Allcoupon.data.map((item) => {
                                            return (
                                                <AdminCouponCard
                                                    setShowModal={setShowModal}
                                                    showModal={showModal}
                                                    DeleteOneCoupon={DeleteOneCoupon} key={item._id} info={item} />
                                            )
                                        }) : <h1 className="text-center w-full text-2xl  mt-30">{"You don't have any coupon"}</h1>

                                    : <div className="flex items-center justify-center w-full">
                                        <SpinnerDiamond speed={150} secondaryColor={"#ddd"} />
                                    </div>

                            }
                        </div>

                    </div>
                </div>
                <Toaster
                    position="top-center"
                    reverseOrder={false}
                />
            </div>
        </div>
    )
}

export default AdminAddCouponpage