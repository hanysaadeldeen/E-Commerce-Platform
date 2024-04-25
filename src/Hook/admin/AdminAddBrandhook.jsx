
import { CreateBrand } from "../../reduxTool/BrandSlice"

import { useEffect, useState } from "react"
import avatar from "../../assets/image/avatar.png"
import { useDispatch, useSelector } from "react-redux"
import { toast } from 'react-toastify';



const AdminAddBrandhook = () => {

    const [image, setImage] = useState(avatar)
    const [BrandFile, setBranddFile] = useState(null)
    const [brandName, setBrandName] = useState("")


    const { data, isloading, error, status } = useSelector((state) => state.brand)


    const dispatch = useDispatch()

    const changeImage = (event) => {
        if (event.target.files && event.target.files[0]) {
            setImage(URL.createObjectURL(event.target.files[0]));
            setBranddFile(event.target.files[0]);
        }
    };
    const getBrandName = (val) => {
        setBrandName(val.target.value)
    }

    const onSave = async (e) => {
        e.preventDefault()
        if (brandName !== "" && image !== avatar) {
            let formData = new FormData();
            formData.append('name', brandName)
            formData.append('image', BrandFile)
            toast.info("Pending...")
            await dispatch(CreateBrand(formData))

        }

        if (brandName === "" && image === avatar) {
            toast.error("Add Brand Name and image!", {
                theme: "colored",
            });
        } else if (brandName === "") {
            toast.error("Add Brand Name!", {
                theme: "colored",
            });
        } else if (image === avatar) {
            toast.error("Add Brand image!", {
                theme: "colored",
            });
        }


    }


    useEffect(() => {
        if (error === null) {
            if (!isloading && status === 201) {
                toast.success("added  successfully!", {
                    theme: "colored",
                })
                setImage(avatar)
                setBrandName("")
                setBranddFile(null)
            }
        } else {
            toast.error("something went wrong try later", {
                theme: "colored",
            })
            setImage(avatar)
            setBrandName("")
            setBranddFile(null)
        }

    }, [data, isloading, error, status])



    return [image, changeImage, getBrandName, brandName, onSave]

}

export default AdminAddBrandhook