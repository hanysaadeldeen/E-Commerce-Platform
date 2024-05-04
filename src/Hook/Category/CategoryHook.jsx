

import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'


import { GetAllCategory } from "../../reduxTool/CategorySlice"
import { useState } from 'react'

const CategoryHook = () => {
    const [category, setCategory] = useState([])
    const dispatch = useDispatch()

    const ScrollToTop = () => {
        console.log("top");
        useEffect(() => {
            window.scrollTo(0, 0);
        }, []);

        return null;
    };
    ScrollToTop()

    const { data, isloading, error } = useSelector((state) => state.category)

    useEffect(() => {
        dispatch(GetAllCategory())
    }, [])

    useEffect(() => {
        if (!isloading) {
            setCategory(data)
        }
    }, [isloading])

    return [category, error, isloading]

}

export default CategoryHook