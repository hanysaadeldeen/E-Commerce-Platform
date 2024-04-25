
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { GetAllCategory } from "../../reduxTool/CategorySlice"
import { toast } from 'react-toastify';
import { CreateSubCategory } from "../../reduxTool/SubCategorySlice";


const AdminAddSubCategoryhook = () => {
    const [category, setCategory] = useState([])
    const [mainCategory, setMainCategory] = useState("")
    const [SubCategory, setSubCategory] = useState("")


    const { data, isloading } = useSelector((state) => state.category)
    const { subCategoyData, isloadingSub, error, status } = useSelector((state) => state.subCategory)
    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(GetAllCategory())
    }, [dispatch])
    useEffect(() => {
        if (!isloading) {
            if (data.length > 0) {
                setCategory(data)
            }
        }
    }, [isloading, data])

    const getMainCategory = (e) => {
        setMainCategory(e);
    }
    const getSubCategory = (e) => {
        setSubCategory(e.target.value);
    }

    const onSave = async (e) => {
        e.preventDefault()

        if (SubCategory !== "" && mainCategory !== "") {
            await dispatch(CreateSubCategory({
                name: SubCategory,
                category: mainCategory
            }))
        } else {
            if (SubCategory === "" && mainCategory === "") {
                toast.error("Add Category and subCategory", {
                    theme: "colored",
                });
            } else if (SubCategory === "") {
                toast.error("Add SubCategory!", {
                    theme: "colored",
                });
            } else if (mainCategory === "") {
                toast.error("Add main Category  !", {
                    theme: "colored",
                });
            }
        }
    }



    useEffect(() => {
        if (error === null) {
            if (status !== 1) {
                if (!isloadingSub) {
                    toast.success("successfully add subCategory ", {
                        theme: "colored",
                    })
                    setSubCategory("")
                    setMainCategory("")
                }
            }
        }
        else {
            toast.error("something went wrong try later", {
                theme: "colored",
            });
        }
    }, [subCategoyData, isloadingSub, error, status])


    return [category, getMainCategory, getSubCategory, onSave, mainCategory, SubCategory]
}


export default AdminAddSubCategoryhook