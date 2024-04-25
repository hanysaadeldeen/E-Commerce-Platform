import { useEffect, useState } from 'react'
import { UpdateUserInform } from '../../reduxTool/UserInfoSlice'
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-hot-toast"

const UpdateUserInformation = () => {

    const dispatch = useDispatch()
    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")

    const [lo, setLo] = useState(true)

    const { isloading, status } = useSelector((state) => state.Address)


    const updateNameAndPhone = (type) => (val) => {
        type(val.target.value)
    }




    const UpdateINfo = async () => {
        if (name !== "" && phone !== "") {
            setLo(true)
            await dispatch(UpdateUserInform({ name, phone }))
            setLo(false)
        } else {
            toast.error("fill inputs", {
                duration: 1500,
            })
        }
    }


    useEffect(() => {
        if (!lo) {
            console.log(isloading);
            console.log(status);

        }
    }, [lo])






    return [updateNameAndPhone, setName, setPhone, UpdateINfo]
}

export default UpdateUserInformation