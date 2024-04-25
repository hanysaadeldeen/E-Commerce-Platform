
import { useEffect, useState } from 'react'

import { useDispatch, useSelector } from "react-redux";

import { toast } from "react-hot-toast"
import { GetLogedUser, UpdateCurrentPass, UpdateUserInform } from '../../reduxTool/UserInfoSlice';


const UpdateUserPasshook = () => {


    const [currentPassword, setCurrentPassword] = useState("")
    const [password, setPassword] = useState("")
    const [passwordConfirm, setPasswordConfirm] = useState("")

    const [nameUser, setNameUser] = useState("")
    const [phoneUser, setPhoneuser] = useState("")

    const [lo, isLod] = useState(true)
    const [lo2, isLod2] = useState(true)

    const dispatch = useDispatch()




    const [open, setOpen] = useState(false);

    const onOpenModal = () => setOpen(true);
    const onCloseModal = () => setOpen(false);

    const { status, error, userInfo } = useSelector((state) => state.UserInfo)

    const statusUpdate = useSelector((state) => state.UserInfo.status)





    const getInputInfo = (type) => (val) => {
        type(val.target.value)
    }



    const updatePassword = async () => {
        if (password.length >= 6) {
            if (password === passwordConfirm) {
                isLod(true)
                await dispatch(UpdateCurrentPass({
                    currentPassword,
                    password,
                    passwordConfirm,
                }))
                isLod(false)
            } else {
                toast.error("password and passwordConfirm are not the same", {
                    duration: 1500,
                })
            }
        }
        else {
            toast.error("password  mush be at least 6 characher ", {
                duration: 1500,
            })
        }
    }



    const GetUser = async () => {
        await dispatch(GetLogedUser())
    }

    useEffect(() => {
        if (!lo) {
            console.log(error);
            if (error !== null) {
                if (error.errors[0].msg === "Incorrect current password") {
                    toast.error("old pass  is false", {
                        duration: 2000,
                    })
                }
            }
            if (status && error === null) {
                if (status.status === 200) {
                    setPassword("");
                    setPasswordConfirm("");
                    setCurrentPassword("");
                    toast.success("updated successful", {
                        duration: 2000,
                    })
                    localStorage.setItem("token", status.data.token);
                    GetUser()
                }
            }
        }
    }, [lo])



    const updateNameAndPhone = (type) => (val) => {
        type(val.target.value)
    }


    const UpdateINfo = async () => {
        if (nameUser !== "" && phoneUser !== "") {
            isLod2(true)
            await dispatch(UpdateUserInform({ name: nameUser, phone: phoneUser, slug: nameUser }))
            isLod2(false)
        } else {
            toast.error("fill inputs", {
                duration: 1500,
            })
        }
    }


    useEffect(() => {
        if (userInfo.length !== 0) {
            if (userInfo) {
                setNameUser(userInfo.name)
                setPhoneuser(userInfo.phone)
            }
        }
    }, [userInfo])
    useEffect(() => {
        if (userInfo.length !== 0) {
            if (userInfo) {
                setNameUser(userInfo.name)
                setPhoneuser(userInfo.phone)
            }
        }
    }, [userInfo])
    useEffect(() => {
        if (!lo2) {
            if (statusUpdate.status === 200) {
                localStorage.setItem("user", JSON.stringify(statusUpdate.data.data.user));
                onCloseModal()
                GetUser()
                toast.success("updated success", {
                    duration: 1500,
                })
            }

        }
    }, [lo2])

    return [updatePassword, getInputInfo, setPasswordConfirm, setPassword,
        setCurrentPassword, UpdateINfo, nameUser, phoneUser, setNameUser,
        setPhoneuser, updateNameAndPhone, open, onOpenModal, onCloseModal]


}

export default UpdateUserPasshook