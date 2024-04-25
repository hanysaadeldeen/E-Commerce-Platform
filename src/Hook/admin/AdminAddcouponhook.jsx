import { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { AddCoupon, DeleteCoupon, GetAllCoupon } from '../../reduxTool/CouponSlice';
import toast from 'react-hot-toast';



function AdminAddcouponhook() {

    const dateRef = useRef();
    const [name, setName] = useState("");
    const [expire, setExpire] = useState("");
    const [discount, setdiscount] = useState("");
    const [loading, setLoading] = useState(true);
    const [deleteLoading, setDeleteLoading] = useState(true);
    const [showModal, setShowModal] = useState(false)

    const dispatch = useDispatch();

    const getDataCoupone = (state) => (val) => {
        state(val.target.value);
    };


    const { Allcoupon, NewCoupon, isloading, error } = useSelector((state) => state.Coupon)



    const GetAllCoupons = async () => {
        await dispatch(GetAllCoupon())
    }


    useEffect(() => {
        GetAllCoupons()
    }, [])

    const onSave = async () => {


        if (name !== "" && expire !== "" && discount !== "") {
            setLoading(true)
            await dispatch(AddCoupon({
                name,
                expire,
                discount
            }))
            setLoading(false)
        } else {
            toast.error("fill all inputs")
        }

    }

    useEffect(() => {
        if (!loading) {
            if (!isloading) {
                if (error === null) {
                    if (NewCoupon.status === 201) {
                        toast.success("added success")
                        setExpire("");
                        setdiscount("");
                        setName("");
                        GetAllCoupons()
                    }
                } else {
                    console.log(error);
                }
            }
        }
    }, [loading])



    const DeleteOneCoupon = async (id) => {
        setDeleteLoading(true)
        await dispatch(DeleteCoupon(id))
        setDeleteLoading(false)
    }

    useEffect(() => {
        if (!deleteLoading) {
            setShowModal(false)
            GetAllCoupons()
            toast.success("delete success")
        }
    }, [deleteLoading])


    return [Allcoupon, isloading, getDataCoupone, setName, setExpire, setdiscount,
        discount, expire, name, dateRef, onSave, DeleteOneCoupon, setShowModal, showModal]
}

export default AdminAddcouponhook