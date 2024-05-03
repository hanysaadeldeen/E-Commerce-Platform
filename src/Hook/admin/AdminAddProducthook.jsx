

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetAllCategory } from "../../reduxTool/CategorySlice";
import { GetSubCategoryONCategory } from "../../reduxTool/SubCategorySlice";
import { GetAllBrand } from "../../reduxTool/BrandSlice";
import { toast } from 'react-toastify';
import { creatProdct } from "../../reduxTool/ProdctSlice";
import { useNavigate } from "react-router-dom";
// import { GetSubCategoryONCategory } from "../../reduxTool/SubCatOnCateSlice";

const AdminAddProducthook = () => {


    const Navigate = useNavigate()

    const [images, setImages] = useState([]);


    const [productName, setProductName] = useState("")
    const [description, setDescription] = useState("")
    const [quantity, setProductQuantity] = useState("")
    const [productPriceBefore, setProductPriceBefore] = useState("")
    const [productPriceAfter, setProductPriceAfter] = useState("")

    // *choosen category and all category
    const [allCategroy, setAllCategroy] = useState('')
    const [choosenCat, setChoosenCat] = useState("")

    // *choosen subcategory and all subcategory
    const [SubCatoegory, setSubCatoegory] = useState([])
    const [choosenSubCatoegory, setchoosenSubCatoegory] = useState("")

    const [allBrand, setAllBrand] = useState('')
    const [choosenBrand, setchoosenBrand] = useState("")




    // * choosen  color and picker
    const [ChoosenColor, getChoosedColor] = useState([]);
    const [ShowColorPicker, setShowColorPicker] = useState(false);

    // add product loading
    const [loadingAddProduct, setLoadingAddProduct] = useState(true)

    // *category action
    const { data, isloading } = useSelector((state) => state.category)

    // * subcategroy action
    const subCat = useSelector((state) => state.subCategory.data)
    const loading = useSelector((state) => state.subCategory.isloading)

    //* brand action 
    const brandData = useSelector((state) => state.brand.data)
    const loadingbrand = useSelector((state) => state.brand.isloading)

    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(GetAllCategory())
        dispatch(GetAllBrand())
        // dispatch(GetAllSubCate())
    }, [dispatch])



    const { dataa, error, status } = useSelector((state) => state.product)
    const isLoadingProduct = useSelector((state) => state.product.isLoading)



    // get product information (title , description, price)
    const getProductInfo = (type) => (e) => {
        type(e.target.value)
    }

    // get main category information and send for subCategory
    const getMainCategory = (id) => {
        if (id.target.value !== " " && id.target.value !== 0) {
            setChoosenCat(id.target.value)
            dispatch(GetSubCategoryONCategory(id.target.value))
        } else {
            setChoosenCat("")
        }
    }

    // useEffect(() => {
    //     getMainCategory()
    // }, [choosenCat])

    // when is loadin all category
    useEffect(() => {
        if (!isloading) {
            setAllCategroy(data);
        }
    }, [isloading, data])

    // get subcategory
    useEffect(() => {
        if (!loading) {
            setSubCatoegory(subCat);
        }
    }, [loading, subCat])

    // if we doesn't choose subcategory
    useEffect(() => {
        if (subCat !== "0") {
            if (subCat) setSubCatoegory(subCat);
        }
        if (subCat === "0") {
            if (subCat) setSubCatoegory([]);
        }
    }, [subCat]);




    // get all brand and save it data
    useEffect(() => {
        if (!loadingbrand) {
            setAllBrand(brandData);
        }
    }, [loadingbrand, brandData])


    // muilty select input onSelect and onRemove
    const onRemove = (item) => {
        setchoosenSubCatoegory(item);
    };
    const onSelect = (item) => {
        setchoosenSubCatoegory(item);
    };

    // for images 
    // const onDrop = (pictureFiles) => {
    //     setImages(pictureFiles);
    // };

    // select colors and handel It Select and Remove
    const GetProductColors = (e) => {
        if (!ChoosenColor.find((color) => color === e)) {
            getChoosedColor([...ChoosenColor, e]);
        } else {
            setShowColorPicker(!ShowColorPicker)
        }
    }
    const remoreColor = (color) => {
        const test = ChoosenColor.filter((item) => item !== color)
        getChoosedColor(test)
    }

    // submit Product
    const onSave = async (e) => {
        e.preventDefault();
        if (images.length > 1 && productName !== "" && description !== "" && quantity !== "" && productPriceAfter !== "" &&
            productPriceBefore !== "" && choosenCat !== "" &&
            ChoosenColor.length !== 0 && choosenBrand !== ""
        ) {
            const format = new FormData();
            const itemsImgae = Array.from(
                Array(Object.keys(images).length).keys()
            ).map((items, index) => {
                return images[index];
            });
            format.append("imageCover", images[0]);
            itemsImgae.map((item) => format.append("images", item));
            format.append("title", productName)
            format.append("description", description)
            format.append("quantity", quantity);
            format.append("price", productPriceBefore);
            format.append("priceAfterDiscount", productPriceAfter);
            format.append("category", choosenCat);
            if (choosenSubCatoegory !== "") {
                choosenSubCatoegory.map((subCat) => format.append("subcategory", subCat._id))
            }
            ChoosenColor.map((color) => format.append("availableColors", color));
            format.append("brand", choosenBrand);
            toast.info("Pending...")

            setLoadingAddProduct(true)
            await dispatch(creatProdct(format))
            setLoadingAddProduct(false)

        }
        if (images.length <= 1 && productName === "" && description === "" && quantity === "" && productPriceAfter === "" &&
            productPriceBefore === "" && choosenCat === "" &&
            ChoosenColor.length === 0 && choosenBrand === ""
        ) {
            toast.error("fill the blank input!", {
                theme: "colored",
            });
        } else if (images.length < 1) {
            toast.error("you should add more than one image !", {
                theme: "colored",
            });
        }
        else if (choosenCat === "") {
            toast.error("you should choose category !", {
                theme: "colored",
            });
        }
        else if (choosenBrand === "") {
            toast.error("you should choose brand !", {
                theme: "colored",
            });
        }
        else if (ChoosenColor.length < 1) {
            toast.error("you should add at least one color !", {
                theme: "colored",
            });
        }
    }



    useEffect(() => {
        if (!loadingAddProduct) {
            if (!isLoadingProduct && dataa !== "" && status !== 1 && error === null) {
                toast.success("added  successfully", {
                    theme: "colored",
                })

                setProductName("")
                setDescription("")
                setProductQuantity("")
                setProductPriceBefore("")
                setProductPriceAfter("")
                getChoosedColor([])
                setShowColorPicker(false)
                setTimeout(() => {
                    Navigate("/admin/Allproduct")
                }, 1000);
            } else if (error !== null) {
                toast.error("some thing went wrong try later ", {
                    theme: "colored",
                });
            }
        }

    }, [loadingAddProduct])







    return [onSave, getProductInfo, setProductName, setDescription,
        setProductPriceAfter, setProductPriceBefore,
        allCategroy, SubCatoegory, allBrand
        , setchoosenBrand, onRemove, onSelect, GetProductColors,
        ChoosenColor, setShowColorPicker, ShowColorPicker,
        getMainCategory, remoreColor, setProductQuantity,
        productName, description, quantity, productPriceAfter, productPriceBefore
    ]
}

export default AdminAddProducthook