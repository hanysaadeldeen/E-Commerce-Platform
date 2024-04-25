import { useEffect, useRef, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
// import { getAllProduct } from "../../reduxTool/ProdctSlice"
import { getProductByFilterSearch } from "../../reduxTool/ProdctSlice"
import { GetAllCategory } from "../../reduxTool/CategorySlice"
import { GetAllBrand } from "../../reduxTool/BrandSlice"
import Searchhook from "../Searchhook"
import { useNavigate } from "react-router-dom"

const ShopProductPagehook = () => {

    const Navigate = useNavigate()
    const dispatch = useDispatch()


    const navigateToHome = () => {
        Navigate("/")
    }


    const [searchq, searchpricegte, searchpricelte, ,] = Searchhook()


    const { dataa, isLoading, error, paginationResult } = useSelector((state) => state.product)
    const Allcategory = useSelector((state) => state.category.data)
    const loadingCategory = useSelector((state) => state.category.isloading)
    const Allbrand = useSelector((state) => state.brand.data)
    const loadingbrand = useSelector((state) => state.brand.isloading)


    const [loadingProductF, setLoadingProductf] = useState(true)


    const [Allproduct, setAllProduct] = useState([])
    const [allCategory, setAllCategory] = useState([])
    const [allBrand, setAllBrand] = useState([])
    const [sort, setSort] = useState("")
    // const [numberPage, setNumberPage] = useState(1)

    // start for search 
    const [allcategoryChecked, setAllcategoryChecked] = useState([])
    const [allBrandChecked, setAllBrandChecked] = useState([])
    // end for search

    // for featur
    const [isOpen, setOpen] = useState("full");
    const [isFilter, setIsFilter] = useState("[calc(100%+32px)]");
    // end for featur


    const [itemsPage, setItemPage] = useState(10)


    // excute when page loaded
    useEffect(() => {
        if (location.pathname === "/ShopProductPage") {
            // dispatch(getAllProduct())
            dispatch(GetAllCategory())
            dispatch(GetAllBrand())
        }
    }, [dispatch])

    // when all products loaded
    useEffect(() => {
        if (!isLoading) {
            setAllProduct(dataa);
        }
    }, [dataa, isLoading])

    // when we get all category
    useEffect(() => {
        if (!loadingCategory) {
            setAllCategory(Allcategory)
        }
    }, [loadingCategory, Allcategory])

    // when we get all brand
    useEffect(() => {
        if (!loadingbrand) {
            setAllBrand(Allbrand)
        }
    }, [loadingbrand, Allbrand])






    // get category by checkbox 
    const getcategoryCheck = (e) => {
        let value = e.target.value
        if (e.target.checked === true) {
            setAllcategoryChecked([...allcategoryChecked, value])
        } else {
            let removedCat = allcategoryChecked.filter((id) => id !== value)
            setAllcategoryChecked(removedCat)
        }
    }
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

    // get feature check
    const setOptionValue = (e) => {
        setSort(e);
        setOpen("full")
    }
    // end feature check

    //start item pre page
    const setItemsPerPage = (e) => {
        setItemPage(e[0].value);
    }
    //end item pre page

    // number page
    // const pageNumberPage = (e) => {
    //     setItemPage(e)
    // }


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


    const getProductFilter = async (numberPage) => {
        let categoryApi = allcategoryChecked.map((item) => "category[in][]=" + item).join("&")
        let brandApi = allBrandChecked.map((item) => "brand[in][]=" + item).join("&")
        if (searchq !== "" && searchq !== null && location.pathname === "/ShopProductPage") {
            console.log(itemsPage);
            setLoadingProductf(true)
            await dispatch(getProductByFilterSearch(`keyword=${searchq}&limit=${itemsPage}&page=${numberPage}&sort=${sort}&${categoryApi}&${brandApi}&price[gte]=${searchpricegte}&price[lte]=${searchpricelte}`))
            setLoadingProductf(false)
        } else if (searchq === "" || searchq === null) {
            if (location.pathname === "/ShopProductPage") {
                setLoadingProductf(true)
                await dispatch(getProductByFilterSearch(`keyword=&limit=${itemsPage}&page=${numberPage}&sort=${sort}&${categoryApi}&${brandApi}&price[gte]=${searchpricegte}&price[lte]=${searchpricelte}`))
                setLoadingProductf(false)
            }
        }
    }




    useEffect(() => {
        setTimeout(() => {
            getProductFilter()
        }, 1500)
    }, [allcategoryChecked, allBrandChecked, searchq, searchpricelte, searchpricegte, itemsPage, sort])

    return [Allproduct, isLoading, paginationResult, error, allCategory, loadingCategory,
        allBrand, loadingbrand, getcategoryCheck, getBrandCheck, setOptionValue,
        setIsFilter, setOpen, isFilter, isOpen, setItemsPerPage, navigateToHome,
        btnrefIlter, btnref, getProductFilter, loadingProductF
    ]
}

export default ShopProductPagehook