import { useEffect, useState } from 'react'

import { useDispatch, useSelector } from "react-redux";

import { GetSpecificeAddresss, UpdateAddress } from '../../reduxTool/AddressSlice'
import { toast } from "react-hot-toast"


import { useNavigate } from "react-router-dom"

const UpdateAddresshook = (id) => {
    const [lo, setlo] = useState(true)

    const Navigate = useNavigate()

    const dispatch = useDispatch()
    const { Address, isloading, status } = useSelector((state) => state.Address)

    const [details, setDetails] = useState("")
    const [phone, setPhone] = useState("")
    const [alias, setAlias] = useState("")

    useEffect(() => {
        dispatch(GetSpecificeAddresss(id))
    }, [])


    // getSpecific Address
    useEffect(() => {
        if (!isloading) {
            if (Address) {
                setAlias(Address.alias)
                setDetails(Address.details)
                setPhone(Address.phone)
            }
        }
    }, [isloading, Address])



    const getInputInfo = (type) => (val) => {
        type(val.target.value)
    }

    const UpdateProduct = async () => {
        setlo(true)
        let data = {
            details,
            phone,
            alias,
        }
        await dispatch(UpdateAddress({ id, data }))
        setlo(false)
    }



    useEffect(() => {
        if (!lo) {
            if (Address) {
                if (status === 200) {
                    toast.success("updated successfully", {
                        position: "top-right",
                        duration: 1500,
                    })
                    setAlias("")
                    setDetails("")
                    setPhone("")
                    setTimeout(() => {
                        Navigate("/user/location")
                    }, 1500);
                } else {
                    toast.error("some thing went wrong", {
                        duration: 1500,
                    })
                }
            }
        }
    }, [lo])



    return [alias, phone, details, UpdateProduct, setAlias, setPhone, setDetails, getInputInfo]
}

export default UpdateAddresshook
