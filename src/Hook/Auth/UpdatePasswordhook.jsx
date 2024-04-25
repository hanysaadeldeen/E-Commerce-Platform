import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { LoginPage, ResetPassword } from '../../reduxTool/AuthSlice'
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
const UpdatePasswordhook = () => {

    const [email, setEmail] = useState("")
    const [newPassword, setNewPass] = useState("")

    const [isloading, setIsloading] = useState(true)
    const [lo, setLog] = useState(true)



    const { code, error, user } = useSelector((state) => state.Auth)

    const dispatch = useDispatch()

    const navigate = useNavigate()

    const GetUpdatedLogInUser = async () => {
        setLog(true)
        await dispatch(LoginPage({
            email,
            "password": newPassword
        }))
        setLog(false)
    }

    const submit = async (e) => {
        e.preventDefault()
        if (newPassword !== "" && email !== "") {
            setIsloading(true)
            await dispatch(ResetPassword({
                newPassword,
                email
            }))
            setIsloading(false)
        } else {
            if (newPassword === "" && email === "") {
                toast.error('Add Your Email and new password')
            }
            if (email === "") {

                toast.error('Add Your Email ')
            }
            if (newPassword === "") {

                toast.error('Add Your  new password')
            }
        }
    }



    useEffect(() => {
        if (!isloading) {
            if (error === null) {
                if (code.status === 200) {
                    GetUpdatedLogInUser()
                }
            } else {
                toast.error(error.message)
            }
        }
    }, [isloading])

    useEffect(() => {
        if (!lo) {
            if (user.length !== 0) {
                toast.success("updated successfully")
                localStorage.setItem("user", JSON.stringify(user.data))
                localStorage.setItem("token", user.token)
                setTimeout(() => {
                    navigate("/")
                }, 500);
            }
        }

    }, [lo, user])

    return [setEmail, setNewPass, submit]
}

export default UpdatePasswordhook