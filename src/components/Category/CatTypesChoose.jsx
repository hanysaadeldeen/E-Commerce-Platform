import { useEffect, useState } from "react"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleDown } from "@fortawesome/free-solid-svg-icons"
import { faFilter } from "@fortawesome/free-solid-svg-icons"
import { faXmark } from '@fortawesome/free-solid-svg-icons'

import { CirclePicker } from 'react-color'
import RangeSlider from 'react-range-slider-input';
import 'react-range-slider-input/dist/style.css';
import Select from "react-dropdown-select";
import ProductCard from "../subComponents/ProductCard"
import Bagination from "../subComponents/Bagination"
import { useParams } from "react-router-dom"
import ProuctByCategoryhook from "../../Hook/Category/ProuctByCategoryhook"
import { SpinnerDiamond } from "spinners-react"
import Searchhook from "../../Hook/Searchhook"
import WishListehook from "../../Hook/wishLish/WishListehook"
import { Toaster } from "react-hot-toast"


const CatTypesChoosePage = () => {

  const { id } = useParams()
  const [Product, isLoading, error, Category, allBrand, loadingbrand,
    getBrandCheck, navigateToCategory, setOptionValue, setItemsPerPage
    , isFilter, isOpen, btnrefIlter, setIsFilter, btnref, setOpen,
    paginationResult, getProductFilter, loadingProductF] = ProuctByCategoryhook(id)

  const [, wishLish] = WishListehook()


  // for searching 
  const [searchq, searchpricegte, searchpricelte, setSearchParams, clearAll] = Searchhook()
  const [valuePrice, setValuePrice] = useState([searchpricegte, searchpricelte]);

  useEffect(() => {
    setSearchParams({ q: searchq, priceGte: valuePrice[0], priceLte: valuePrice[1] });
  }, [valuePrice])

  useEffect(() => {
    setValuePrice([searchpricegte, searchpricelte])
  }, [searchpricegte, searchpricelte])


  const options1 = [
    {
      value: "",
      label: "Feature"
    },
    {
      value: "+price",
      label: "Price, low to high"
    },
    {
      value: "-price",
      label: "Price, high to low"
    },
    {
      value: "sealing",
      label: "Best Selling"
    },
    {
      value: "-ratingsAverage",
      label: "Best rating"
    },

  ];
  const items_per_page = [

    {
      value: 10,
    },
    {
      value: 15,
    },
    {
      value: 20,
    },
    {
      value: 30,
    }

  ];
  const size = [
    {
      value: "S"
    },
    {
      value: "M"
    },
    {
      value: "LG"
    },
    {
      value: "XL"
    },
    {
      value: "2XL"
    },
    {
      value: "3XL"
    },
    {
      value: "5XL"
    },
  ]
  const colors = [
    '#fff', '#D9E3F0', '#F47373',
    '#697689', '#37D67A', '#2CCCE4',
    '#000', '#dce775', '#ff8a65', '#ba68c8'
  ]




  return (

    <div className={` pt-20 relative `}>
      {
        isOpen === 0 || isFilter === 0 ?
          <div className="fixed  top-0 left-0 lg:hidden  bg-[#232323cc] h-screen duration-150  ease-in-out
            w-full z-40 cursor-pointer"></div>
          : null
      }
      <div className="container ">
        {/* header for show */}
        {

          <div className="flex max-md:pb-2  max-lg:pb-4 lg:pb-7 items-center pl-2 text-lg font-semibold child:text-[#707070] gap-1">
            <span className=" cursor-pointer"><span onClick={navigateToCategory}> category</span>  {Product.length > 0 &&
              <>
                {`>`} show  <span className=" ml-1">{Product.length} product </span>
              </>
            }   </span>
          </div>
        }
        {
        }
        {
          Category &&
          <h1 className="mx-auto uppercase text-xl sm:text-2xl mt-5  text-center border-b-2 pb-2 font-light w-2/3 font-serif tracking-wide">{Category.name}</h1>
        }

        <div className="flex gap-4 ">
          {/* slider for all screen */}
          <div ref={btnrefIlter} className={"max-w-[200px] lg:w-[210px] pl-2  md:mb-6 bg-white max-lg:w-3/5 max-lg:max-w-[300px] max-lg:z-50  max-lg:pl-4 max-lg:pt-1 max-lg:fixed max-lg:left-0 max-lg:bottom-0 max-lg:top-0 max-lg:duration-[.6s] max-lg:ease-in-out " +
            (isFilter !== 0 ? "max-lg:-translate-x-[calc(100%+32px)]" : "max-lg:-translate-x-0")}>

            <div className="w-full">
              <div className="lg:hidden w-full relative slider_name ">
                <h1 className="font-extrabold text-2xl tracking-wider mt-2">slider</h1>
                <div className={"absolute -right-8 -top-3 w-8 h-8  text-center p-1  duration-75 " +
                  (isFilter !== 0 ? "bg-[#5e5e5e]" : "bg-[#353434]")} >
                  <FontAwesomeIcon icon={faXmark} className={"text-2xl  cursor-pointer duration-75  text-white " +
                    (isFilter !== 0 && "opacity-20")}
                    onClick={() => setIsFilter("[calc(100%+32px)]")} />
                </div>
              </div>
              <div className="max-lg:h-screen max-lg:overflow-y-auto  max-lg:pb-24 max-lg:pr-3">
                <div className="AVAILABILITY   mt-5 ">
                  <h1 className="font-extrabold  uppercase border-b  border-[#787878] pb-2 mb-6">AVAILABILITY  <span className="text-lg text-red-400"> soon</span> </h1>
                  <div style={{ backgroundColor: "rgb(218 218 218 / 49%)" }} className="cursor-no-drop p-2 ">
                    <div className="control mb-1 cursor-no-drop ">
                      <input type="checkbox" id="" />
                      <label htmlFor="" className="  hover:cursor-no-drop ">In Stock  (63)</label>
                    </div>
                    <div className="control  cursor-no-drop ">
                      <input type="checkbox" id="" />
                      <label htmlFor="" className="  hover:cursor-no-drop ">Out Of Stock (57)</label>
                    </div>
                  </div>
                </div>

                <div className="brand mt-8">
                  <h1 className="font-extrabold text-sm uppercase border-b  border-[#787878] pb-2 mb-6">brand</h1>
                  {
                    !loadingbrand && allBrand && allBrand.map((item) => {
                      return (
                        <div className="control mb-1" key={item._id}>
                          <input type="checkbox"
                            onChange={getBrandCheck}
                            value={item._id} id={item._id} />
                          <label htmlFor={item._id}>{item.name}</label>
                        </div>
                      )
                    })
                  }


                </div>
                <div className="size mt-7 ">
                  <h1 className="font-extrabold text-sm uppercase border-b  border-[#787878] pb-2 mb-2">filter by size <span className="text-lg text-red-400">soon</span></h1>
                  <div style={{ backgroundColor: "rgb(218 218 218 / 49%)" }} className="flex child:border child:border-[#fff] p-1
                                    child:py-1 child:px-3 child:min-w-[45px] child:font-medium
                                    child:my-1 child:mr-2 flex-wrap child:text-center cursor-no-drop
                                    
                                    ">
                    {size.map((e) => {
                      return (
                        <div key={e.value} >{e.value}</div>
                      )
                    })}
                  </div>
                </div>
                <div className="color mt-7 ">
                  <h1 className="font-extrabold text-sm uppercase border-b  border-[#787878] pb-2 mb-6">filter by Color <span className="text-lg text-red-400">soon</span></h1>
                  <div style={{ backgroundColor: "rgb(218 218 218 / 49%)" }} className="soon cursor-no-drop p-2" >
                    <CirclePicker width=""
                      circleSpacing={8}
                      colors={colors}
                    />
                  </div>
                </div>
                <div className="price mt-10">
                  <h1 className="font-extrabold uppercase border-b  border-[#787878] pb-2 mb-6">price</h1>
                  <RangeSlider
                    min={0} max={1500} step={200}
                    value={valuePrice}
                    onInput={setValuePrice}
                  />

                  <div className="mt-6 flex justify-between items-center px-1">
                    <h1 className="font-semibold">range</h1>
                    <div className="child:text-[#6F6F6F] child:font-semibold">
                      <span> ${valuePrice[0]}</span>
                      <span>--${valuePrice[1]}</span>
                    </div>
                  </div>
                </div>
                <div className="
                                    border border-[#bbb]  mt-5 uppercase grow
                                    w-full  leading-9 py-2 tracking-wide text-center
                                    hover:bg-black duration-300 ease-in-out hover:text-white cursor-pointer"
                  onClick={clearAll}>clear All</div>
              </div>
            </div>
          </div>

          <div className="max-lg:w-full w-[calc(100%-210px)] " >
            <div className="flex items-center justify-between lg:gap-5 lg:justify-end px-2 py-5 ">
              {/* start sort for large screen  */}
              <div className="max-lg:hidden flex gap-2 items-center ">
                <h1 className="uppercase font-medium tracking-wide">ITEMS PER PAGE </h1>
                <Select
                  placeholder={"10"}
                  color={"#c7c7c7"}
                  closeOnScroll={true}
                  className={"text-black  "}
                  clearOnBlur={true}
                  labelField={"value"}
                  options={items_per_page}
                  onChange={(values) => setItemsPerPage(values)} />
              </div>
              <div className="max-lg:hidden flex gap-2 items-center sort-by ">
                <h1 className="uppercase font-medium tracking-wide">sort by </h1>
                <Select
                  placeholder={"feature"}
                  color={"#c7c7c7"}
                  closeOnScroll={true}
                  className={"text-black  "}
                  clearOnBlur={true}
                  options={options1}
                  onChange={(values) => setOptionValue(values[0].value)} />
              </div>
              {/* end sort for large screen  */}

              {/* filter icon for smole  screen */}
              <div className="lg:hidden" >
                <div onClick={() => setIsFilter(prev => prev === "[calc(100%+32px)]" ? 0 : "[calc(100%+32px)]")} className="cursor-pointer">
                  <FontAwesomeIcon icon={faFilter} className='mr-1 text-red-500  cursor-pointer' />
                  <span className="cursor-pointer  font-light  font-serif tracking-wider">filter</span>
                </div>
              </div>

              {/* sort product in smole  screen */}
              <div className=" gap-1 lg:hidden" ref={btnref} >
                <div className="cursor-pointer flex items-center "
                  onClick={() => setOpen(prev => prev === "full" ? 0 : "full")}>
                  <h1 className="font-semibold">Sort</h1>
                  <FontAwesomeIcon icon={faAngleDown} className=' mt-1 ml-1 text-[#878787]' />
                </div>
                <div className={"dropdown-menu-body fixed bottom-0 left-0 w-full h-2/5 z-50  bg-white  translate-y-0 duration-300 ease-in-out " +
                  (isOpen === 0 ? "translate-y-0" : "translate-y-full")}
                >
                  <div className="flex justify-between items-center border-b h-[57px]  py-2 px-5 border-[#ddd]">
                    <h1 className="uppercase tracking-wide font-bold text-xl ">sort by :</h1>
                    <FontAwesomeIcon icon={faXmark} className='text-3xl text-[#606060] cursor-pointer'
                      onClick={() => setOpen(prev => prev === "full" ? 0 : "full")}
                    />
                  </div>
                  <div className="dropdown-menu-body-sort overflow-auto">
                    {
                      options1.map((e) => {
                        return (
                          <div key={e.value} className="hover:bg-[#f8f8f8] py-[10px] px-[20px] cursor-pointer"
                            onClick={() => setOptionValue(e.value)}>
                            <h2 className="font-semibold  text-lg" >{e.label}</h2>
                          </div>
                        )
                      })
                    }
                  </div>
                </div>

              </div>
            </div>
            {
              !loadingProductF ?
                <>
                  {
                    Product.length > 0 ?
                      <div className="grid  pb-5 grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                        {
                          Product.map((item) => {
                            return (
                              <ProductCard wishLish={wishLish} key={item._id} item={item} />
                            )
                          })
                        }
                      </div>
                      : <h1 className="text-center w-full text-2xl mb-80 mt-10  ">there is no product {searchq !== "" && `with name ${searchq}`}  </h1>
                  }
                </>
                :
                <div className="flex items-center justify-center w-full">
                  <SpinnerDiamond speed={150} secondaryColor={"#ddd"} />
                </div>
            }
            {
              paginationResult && Product.length > 0 &&
              paginationResult.numberOfPages > 1 &&
              <Bagination
                PagesCound={paginationResult.numberOfPages}
                getPage={getProductFilter} />
            }
          </div>
        </div>
      </div>
      {
        error !== null && !isLoading &&
        <>
          <h1 className="text-center  text-2xl  w-full">Connetion faild </h1>
          <div className="flex items-center justify-center w-full">
            <SpinnerDiamond speed={150} secondaryColor={"#ddd"} />
          </div>
        </>
      }
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
    </div >

  )
}

export default CatTypesChoosePage