import { useEffect, useState } from 'react'

import { useDispatch, useSelector } from "react-redux";

import { GetLogedUser } from '../../reduxTool/UserInfoSlice';


const GetLogedUserhook = () => {

    const [user, setUser] = useState([])
    // const Navigate = useNavigate()

    const dispatch = useDispatch()

    const { userInfo, isloading } = useSelector((state) => state.UserInfo)
    const GetUser = async () => {
        await dispatch(GetLogedUser())
    }
    useEffect(() => {
        GetUser()
    }, [])


    useEffect(() => {
        if (!isloading) {
            if (userInfo.length !== 0) {
                setUser(userInfo)
            }
        }
    }, [isloading])

    return [user, isloading]
}

export default GetLogedUserhook