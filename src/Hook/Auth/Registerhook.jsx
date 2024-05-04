




import { useDispatch, useSelector } from "react-redux"
import { RegisterPage } from "../../reduxTool/AuthSlice"
import { useEffect, useState } from "react"
import toast from 'react-hot-toast';
import { useNavigate } from "react-router-dom";



const Registerhook = () => {

    const Navigate = useNavigate()


    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [passwordConfirm, setPasswordConfirm] = useState("")
    const [phone, setPhone] = useState("")
    const [lo, setLog] = useState(true)

    const { Registeruser, error } = useSelector((state) => state.Auth)
    const dispatch = useDispatch()


    const submitData = async (e) => {
        e.preventDefault()
        if (name.length >= 3 && passwordConfirm !== "" && phone !== "" && password !== "" && email !== "") {
            if (password.length >= 6) {
                if (passwordConfirm === password) {
                    if (phone.length === 11) {
                        setLog(true)

                        await dispatch(RegisterPage({
                            name,
                            email,
                            password,
                            passwordConfirm,
                            phone
                        }))
                        setLog(false)

                    } else {
                        toast.error('phone must be 11 number ')
                    }
                }
            } else {
                toast.error('password must be at least 6 characters')
            }
        } else {
            if (name === "" || password == "" || email == "") {
                toast.error('fill the blank input')
            }
            if (name.length < 3) {
                toast.error('name must be at least 3 characters ')
            }
        }
    }

    const getLoginInfo = (info) => (e) => {
        info(e.target.value)
    }



    useEffect(() => {
        if (!lo) {
            if (Registeruser.length !== 0) {
                toast.success('register  success')
                setEmail("")
                setPassword("")
                setTimeout(() => {
                    Navigate("/loginPage")
                }, 1000)
            } else {
                if (error !== null) {
                    if (error.errors && error.errors[0].msg === "Invalid email formate") {
                        toast.error('Invalid email formate!')
                    }
                    if (error.message === "Incorrect email or password") {
                        toast.error('Incorrect email or password')
                    }
                }
            }
        }
    }, [lo])




    return [submitData, getLoginInfo, setName, setEmail, setPassword, setPasswordConfirm, setPhone]
}

export default Registerhook