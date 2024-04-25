import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { ForgetPass } from '../../reduxTool/AuthSlice'
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const Forgethook = () => {



    const [email, setEmail] = useState("")


    const navigate = useNavigate()

    const [isloading, setIsloading] = useState(true)

    const { forgetNumber, error } = useSelector((state) => state.Auth)


    const dispatch = useDispatch()
    const submit = async (e) => {
        e.preventDefault()
        if (email !== "") {
            setIsloading(true)
            await dispatch(ForgetPass({ email }))
            setIsloading(false)
        } else {
            toast.error('add Your Email')
        }
    }



    useEffect(() => {
        if (!isloading) {
            if (error === null) {
                if (forgetNumber.status === "Success") {
                    toast.success('code was sent to your email ')
                    setTimeout(() => {
                        navigate("/CodeVerify")
                    }, 1000);
                }
                console.log();
            } else {
                toast.error(error.message)
            }
        }
    }, [isloading])


    return [setEmail, submit]

}

export default Forgethook