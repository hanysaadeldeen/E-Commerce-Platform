import { useEffect } from 'react'
import { GetLogedUserOrder } from '../../reduxTool/UserInfoSlice'
import { useDispatch, useSelector } from 'react-redux'

const AllOrderhook = () => {
    const dispatch = useDispatch()
    const { order, isloading } = useSelector((state) => state.UserInfo)
    const GetAllOrder = async () => {
        await dispatch(GetLogedUserOrder())
    }
    useEffect(() => {
        GetAllOrder()
    }, [])
    return [order, isloading]
}

export default AllOrderhook