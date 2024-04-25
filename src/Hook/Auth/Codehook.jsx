import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { VerifyResetCode } from '../../reduxTool/AuthSlice'
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const Codehook = () => {


    const [resetCode, setResetCode] = useState("")
    const [isloading, setIsloading] = useState(true)


    const navigate = useNavigate()


    const { code, error } = useSelector((state) => state.Auth)


    const dispatch = useDispatch()
    const submit = async (e) => {
        e.preventDefault()
        if (resetCode !== "") {
            setIsloading(true)
            await dispatch(VerifyResetCode({
                resetCode
            }))
            setIsloading(false)

        } else {
            toast.error('add Your Email')
        }
    }



    useEffect(() => {
        if (!isloading) {
            if (error === null) {
                if (code.status === "Success") {
                    toast.success('code is true')
                    setTimeout(() => {
                        navigate("/UpdatePassword")
                    }, 1000);
                }
            } else {
                toast.error(error.message)
            }
        }
    }, [isloading])


    return [setResetCode, submit]
}

export default Codehook