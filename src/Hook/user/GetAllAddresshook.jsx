import { useEffect, useState } from 'react'

import { useDispatch, useSelector } from "react-redux";

import { Alladress } from '../../reduxTool/AddressSlice'
const GetAllAddresshook = () => {


    const [allAddress, setallAdress] = useState([])


    const { Address, isloading } = useSelector((state) => state.Address)
    const dispatch = useDispatch()

    const ScrollToTop = () => {
        useEffect(() => {
            window.scrollTo(0, 0);
        }, []);

        return null;
    };
    ScrollToTop()

    const GetAllAddress = async () => {
        await dispatch(Alladress())
    }

    useEffect(() => {
        GetAllAddress()
    }, [])


    useEffect(() => {
        if (!isloading) {
            if (Address.length > 0) {
                setallAdress(Address)
            } else {
                setallAdress([])
            }
        }
    }, [isloading])



    return [allAddress, isloading, GetAllAddress]
}

export default GetAllAddresshook