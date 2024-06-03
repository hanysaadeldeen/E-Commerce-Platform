import { useDispatch, useSelector } from "react-redux"
import { Alladress, GetSpecificeAddresss } from "../../reduxTool/AddressSlice"
import { useEffect, useState } from "react"
import { ApplyCouponOnProduct, MakeOrderCash, MakeOrderVisa } from "../../reduxTool/CheckOutslice"
import toast from "react-hot-toast"
import { GetUserCart } from "../../reduxTool/CartSlice"
import { useNavigate } from "react-router-dom"

const CheckoutOrderhook = (id) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [openOrders, setOpenOrder] = useState(false)

    const { Address, SpecificAddress } = useSelector((state) => state.Address)
    const checkOut = useSelector((state) => state.checkout.checkOut)
    const coupones = useSelector((state) => state.checkout.coupon)
    const { error } = useSelector((state) => state.checkout)

    const [location, setChoosenLocation] = useState("")

    const [loadingCoupon, setLoadingCoupon] = useState(true)
    const [lod, setLod] = useState(true);
    const [lodCheck, setLodCheck] = useState(true);
    const [lodCheckVisa, setLodCheckVisa] = useState(true);
    const [city, setAlias] = useState("");
    const [phone, setPhone] = useState("");
    const [details, setDetails] = useState("");
    const [deliveryMethod, setDeliveryMethod] = useState("")

    const [coupon, setCoupon] = useState("")

    const GetAllAdress = async () => {
        await dispatch(Alladress())
    }


    useEffect(() => {
        GetAllAdress()
    }, [])


    const getMainLocation = async (id) => {
        if (id.target.value !== " " && id.target.value !== 0) {
            setChoosenLocation(id.target.value)
            setLod(true)
            await dispatch(GetSpecificeAddresss(id.target.value))
            setLod(false)
        } else {

            setChoosenLocation("")
            setLod(true)
            await dispatch(GetSpecificeAddresss())
            setLod(false)
        }
    }

    useEffect(() => {
        if (!lod) {
            setDetails(SpecificAddress.details);
            setPhone(SpecificAddress.phone);
            setAlias(SpecificAddress.alias);
        }
    }, [lod])





    const sumbmitCoupon = async () => {
        setLoadingCoupon(true)
        await dispatch(ApplyCouponOnProduct({
            "couponName": coupon
        }))
        setLoadingCoupon(false)
    }

    useEffect(() => {
        if (!loadingCoupon) {
            if (error === null) {
                if (coupones) {
                    if (coupones.status === "success") {
                        toast.success('coupon is applayed')
                    }
                }
            } else {
                console.log(error);
                if (error.message === "Coupon is invalid or has expired") {
                    toast.error("Coupon is invalid or has expired")
                    setCoupon("")
                }
            }
        }
    }, [loadingCoupon])





    const BuyNow = async () => {
        if (location === "") {
            toast.error('Choose location')
        } else {
            if (deliveryMethod !== "") {
                setLodCheckVisa(false)
                if (deliveryMethod === "Cash") {
                    setLodCheck(true)
                    await dispatch(MakeOrderCash({
                        id,
                        datails: {
                            shippingAddress: {
                                details,
                                phone,
                                city,
                            },
                        }
                    }))
                    setLodCheck(false)
                } else {
                    setLodCheckVisa(true)
                    await dispatch(MakeOrderVisa({
                        id,
                        datails: {
                            shippingAddress: {
                                details,
                                phone,
                                city,
                            },
                        }
                    }))
                    setLodCheckVisa(false)
                }
            } else {
                toast.error('Choose Delivery method')
            }
        }
    }

    const GetUserCartProduct = async () => {
        await dispatch(GetUserCart())
    }


    useEffect(() => {
        if (!lodCheck, !lodCheckVisa) {
            if (checkOut) {
                if (checkOut.length !== 0) {
                    if (checkOut.status === "success") {
                        if (deliveryMethod === "visa") {
                            window.open(checkOut.session.url)

                        }
                        setOpenOrder(false)
                        toast.success('order has been created successfully');
                    } else {
                        toast.error('some thing went wrong try later');
                    }
                }
            }
        }
    }, [lodCheck, lodCheckVisa])

    useEffect(() => {
        if (!lodCheck) {
            if (checkOut.status === "success") {
                setTimeout(() => {
                    GetUserCartProduct()
                }, 100)

                if (deliveryMethod === "Cash") {
                    setTimeout(() => {
                        navigate("/user/order")
                    }, 1500)
                }
            }
        }
    }, [lodCheck])





    return [Address, getMainLocation, BuyNow, setDeliveryMethod, openOrders, setOpenOrder, setCoupon, coupon, sumbmitCoupon, coupones]


}

export default CheckoutOrderhook