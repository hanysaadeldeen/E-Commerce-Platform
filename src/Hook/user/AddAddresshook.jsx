import { useEffect, useState } from 'react'

import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom"

import { toast } from "react-hot-toast"
import { AddAdress } from '../../reduxTool/AddressSlice';
const AddAddresshook = () => {

    const [lo, setlo] = useState(true)

    const Navigate = useNavigate()

    const dispatch = useDispatch()
    const { NewAddress, status } = useSelector((state) => state.Address)

    const [details, setDetails] = useState("")
    const [phone, setPhone] = useState("")
    const [alias, setAlias] = useState("")





    const getInputInfo = (type) => (val) => {
        type(val.target.value)
    }

    const AddProduct = async () => {
        let data = {
            details,
            phone,
            alias,
        }
        if (phone.length === 11) {
            setlo(true)
            await dispatch(AddAdress(data))
            setlo(false)
        } else {
            toast.error("phone mush be egpytion number with 11 numbers", {
                duration: 1500,
            })
        }
    }



    useEffect(() => {
        if (!lo) {
            if (NewAddress !== "") {
                if (status === 200) {
                    toast.success("added successfully", {
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



    return [AddProduct, setAlias, setPhone, setDetails, getInputInfo]


}

export default AddAddresshook