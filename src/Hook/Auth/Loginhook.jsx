import { useDispatch, useSelector } from "react-redux"
import { LoginPage } from "../../reduxTool/AuthSlice"
import { useEffect, useState } from "react"
import toast from 'react-hot-toast';



const Loginhook = () => {



    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const [lo, setLog] = useState(true)
    const { user, error } = useSelector((state) => state.Auth)
    const dispatch = useDispatch()


    const submitData = async (e) => {
        e.preventDefault()

        if (password !== "" && email !== "") {

            setLog(true)
            await dispatch(LoginPage({
                email,
                password
            }))
            setLog(false)

        } else {
            toast.error('fill the blank input')
        }
    }

    const getLoginInfo = (info) => (e) => {
        info(e.target.value)
    }



    useEffect(() => {
        if (!lo) {
            if (user.length !== 0) {
                toast.success('login success')
                setEmail("")
                setPassword("")
                localStorage.setItem("user", JSON.stringify(user.data))
                localStorage.setItem("token", user.token)
                setTimeout(() => {
                    window.location.href = "/"
                }, 1000)
            } else {
                if (error !== null) {
                    if (error.errors && error.errors[0].msg === "Invalid email formate") {
                        toast.error('Invalid email formate!')
                        setLog(false)

                    }
                    if (error.message === "Incorrect email or password") {
                        toast.error('Incorrect email or password')
                        setLog(false)

                    }
                }
            }
        }
    }, [lo, user])





    return [submitData, getLoginInfo, setEmail, setPassword, lo]
}

export default Loginhook