

import { useEffect, useState } from "react"
import avatar from "../../assets/image/avatar.png"
import { useDispatch, useSelector } from "react-redux"
import { CreateCategory } from "../../reduxTool/CategorySlice"
import { toast } from 'react-toastify';

const AdminAddCategoryhook = () => {

    const [image, setImage] = useState(avatar)
    const [selectedFile, setSelectedFile] = useState(null)
    const [categoryName, setCategoryName] = useState("")


    const Newcategory = useSelector((state) => state.category.data)
    const Isloading = useSelector((state) => state.category.isloading)
    const error = useSelector((state) => state.category.error)
    const status = useSelector((state) => state.category.status)


    const dispatch = useDispatch()

    const changeImage = (event) => {
        if (event.target.files && event.target.files[0]) {
            setImage(URL.createObjectURL(event.target.files[0]));
            setSelectedFile(event.target.files[0]);
        }
    };
    const getCategoryName = (val) => {
        setCategoryName(val.target.value)
    }

    const onSave = async (e) => {
        e.preventDefault()
        if (categoryName !== "" && image !== avatar) {
            let formData = new FormData();
            formData.append('name', categoryName)
            formData.append('image', selectedFile)
            toast.info("Pending...")
            await dispatch(CreateCategory(formData))

        }

        if (categoryName === "" && image === avatar) {
            toast.error("Add Category Name and image!", {
                theme: "colored",
            });
        } else if (categoryName === "") {
            toast.error("Add Category Name!", {
                theme: "colored",
            });
        } else if (image === avatar) {
            toast.error("Add Category image!", {
                theme: "colored",
            });
        }


    }

    useEffect(() => {
        if (error === null) {
            if (!Isloading && status === 201) {
                toast.success("added  successfully!", {
                    theme: "colored",
                })
                setImage(avatar)
                setCategoryName("")
                setSelectedFile(null)
            }
        } else {
            toast.error("something went wrong try later", {
                theme: "colored",
            })
            setImage(avatar)
            setCategoryName("")
            setSelectedFile(null)
        }

    }, [Newcategory, Isloading, error, status])




    return [image, changeImage, getCategoryName, categoryName, onSave]

}

export default AdminAddCategoryhook