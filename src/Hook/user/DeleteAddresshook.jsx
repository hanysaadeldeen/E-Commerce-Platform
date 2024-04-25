import { useEffect, useState } from 'react'

import { useDispatch, useSelector } from "react-redux";

import { Alladress, DeleteAdress } from '../../reduxTool/AddressSlice'
import { toast } from "react-hot-toast"
const DeleteAddresshook = () => {

    const [showModal, setShowModal] = useState(false)
    const [lo, setlo] = useState(true)
    const { status } = useSelector((state) => state.Address)
    const dispatch = useDispatch()


    const DeleteAddress = async (id) => {
        setlo(true)
        await dispatch(DeleteAdress(id))
        setlo(false)
        setShowModal(false)
    }

    const GetAllAddress = async () => {
        await dispatch(Alladress())
    }

    useEffect(() => {
        if (!lo) {
            if (status) {
                toast.success("deleted  successfully")
                setTimeout(() => {
                    GetAllAddress()
                }, 500);
            }
        }
    }, [lo])

    return [DeleteAddress, showModal, setShowModal]






}

export default DeleteAddresshook