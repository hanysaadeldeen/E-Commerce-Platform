import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductByFilterSearch, getSubProductFromProduct } from "../../reduxTool/ProdctSlice";
import { GetSpecificCategory } from "../../reduxTool/CategorySlice";
import { GetAllBrand } from "../../reduxTool/BrandSlice";
import Searchhook from "../Searchhook";
import { useNavigate } from "react-router-dom";

const ProuctByCategoryhook = (id) => {

    const dispatch = useDispatch()
    const Navigate = useNavigate()

    const navigateToCategory = () => {
        Navigate("/Category")
    }

    const [searchq, searchpricegte, searchpricelte, ,] = Searchhook()

    const [allBrand, setAllBrand] = useState([])
    const [allBrandChecked, setAllBrandChecked] = useState([])
    const [Product, setProduct] = useState([])
    const [Category, setCategory] = useState([])
    const [sort, setSort] = useState("")
    const [isOpen, setOpen] = useState("full");
    const [isFilter, setIsFilter] = useState("[calc(100%+32px)]");


    const [loadingProductF, setLoadingProductf] = useState(true)
    const [itemsPage, setItemPage] = useState(10)


    const { specificCat, isloading } = useSelector((state) => state.category)
    const { isLoading, error, paginationResult } = useSelector((state) => state.product)
    const relatedProduct = useSelector((state) => state.product.dataa)
    const Allbrand = useSelector((state) => state.brand.data)
    const loadingbrand = useSelector((state) => state.brand.isloading)


    // get all products with specific category
    useEffect(() => {
        dispatch(getSubProductFromProduct(id))
        dispatch(GetSpecificCategory(id))
    }, [dispatch, id])

    // get all brand
    useEffect(() => {
        if (!loadingbrand) {
            setAllBrand(Allbrand)
        }
    }, [loadingbrand, Allbrand])


    // ge all brand 
    useEffect(() => {
        if (window.location.pathname.startsWith(`/Category/`)) {
            dispatch(GetAllBrand())
        }
    }, [dispatch])



    // for related products in product page
    useEffect(() => {
        if (!isLoading) {
            setProduct(relatedProduct);
        }
    }, [relatedProduct, isLoading])

    // get specific category for load this name in page
    useEffect(() => {
        if (!isloading) {
            setCategory(specificCat);
        }
    }, [specificCat, isloading])


    // start toogle for drop down slider
    const btnref = useRef()
    useEffect(() => {
        let handler = (event) => {
            if (!btnref.current.contains(event.target)) {
                setOpen("full")
            }
        }
        document.addEventListener("mousedown", handler)
        return () => {
            document.removeEventListener("mousedown", handler)
        }
    }, [])
    const btnrefIlter = useRef()

    useEffect(() => {
        let handlerFilter = (event) => {
            if (!btnrefIlter.current.contains(event.target)) {
                setIsFilter("[calc(100%+32px)]")
            }
        }
        document.addEventListener("mousedown", handlerFilter)
        return () => {
            document.removeEventListener("mousedown", handlerFilter)
        }
    }, [])
    // end toogle for drop down slider



    // get brand by checkbox
    const getBrandCheck = (e) => {
        let value = e.target.value
        if (e.target.checked === true) {
            setAllBrandChecked([...allBrandChecked, value])
        } else {
            let removedbrand = allBrandChecked.filter((id) => id !== value)
            setAllBrandChecked(removedbrand)
        }
    }


    // start feature 
    const setOptionValue = (e) => {
        setSort(e);
        setOpen("full")
    }
    // end feature 
    // start  items per page
    const setItemsPerPage = (e) => {
        setItemPage(e[0].value);
    }
    // end items per pag



    const getProductFilter = async (numberPage) => {
        let brandApi = allBrandChecked.map((item) => "brand[in][]=" + item).join("&")
        if (searchq !== "" && searchq !== null && window.location.pathname.startsWith(`/Category/`)) {
            setLoadingProductf(true)
            await dispatch(getProductByFilterSearch(`keyword=${searchq}&limit=${itemsPage}&page=${numberPage}&sort=${sort}&${searchq}&category=${id}&${brandApi}&price[gte]=${searchpricegte}&price[lte]=${searchpricelte}`))
            setLoadingProductf(false)
        } else if (searchq === "" || searchq === null) {
            if (window.location.pathname.startsWith(`/Category/`)) {
                setLoadingProductf(true)
                await dispatch(getProductByFilterSearch(`keyword=&limit=${itemsPage}&page=${numberPage}&sort=${sort}&category=${id}&${brandApi}&price[gte]=${searchpricegte}&price[lte]=${searchpricelte}`))
                setLoadingProductf(false)
            }
        }
    }


    useEffect(() => {
        setTimeout(() => {
            getProductFilter()
        }, 1500)
    }, [allBrandChecked, searchq, searchpricelte, searchpricegte, itemsPage, sort])

    return [Product, isLoading, error, Category, allBrand, loadingbrand,
        getBrandCheck, navigateToCategory, setOptionValue, setItemsPerPage
        , isFilter, isOpen, btnrefIlter, setIsFilter, btnref, setOpen,
        paginationResult, getProductFilter, loadingProductF
    ]
}

export default ProuctByCategoryhook