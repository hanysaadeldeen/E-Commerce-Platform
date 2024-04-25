import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetLogedUser } from '../../reduxTool/UserInfoSlice';

const ProtecetedRouterHook = () => {

    // const [islogin, setIslogin] = useState(JSON.parse(localStorage.getItem("user")));

    const [isUser, setIsUser] = useState(false);
    const [isAdmin, setIsAdmin] = useState(false);
    const [islod, setIsLod] = useState(true)

    const dispatch = useDispatch()

    const { userInfo, isloading } = useSelector((state) => state.UserInfo)


    const GetUser = async () => {
        setIsLod(true)
        await dispatch(GetLogedUser())
        setIsLod(false)
    }
    useEffect(() => {
        GetUser()
    }, [])



    useEffect(() => {
        if (!islod) {
            if (!isloading) {
                if (userInfo.role === "admin") {
                    setIsAdmin(true);
                    setIsUser(false);
                }
                if (userInfo.role === "user") {
                    setIsAdmin(false);
                    setIsUser(true);
                }
            }

        }
    }, [islod, isloading]);

    return [isUser, isAdmin];
};

export default ProtecetedRouterHook