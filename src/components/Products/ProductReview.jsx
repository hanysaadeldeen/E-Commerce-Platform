import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStar } from "@fortawesome/free-solid-svg-icons"
import ReactStars from "react-rating-stars-component";
import { SpinnerDiamond } from "spinners-react"
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons'


import Reviewhook from "../../Hook/Cart/Reveiwhook"
import { useParams } from "react-router-dom";
/* eslint-disable react/prop-types */

const ProductReview = () => {

    const { id } = useParams()

    const [ratingChanged, isLoading, serReviewShow, reviewShow,
        AddNewReveiw, setReview, AllReviews,
        review, userId, DeleteReveiw, GetIdforDelete, setShowModal, showModal, UpdateReview] = Reviewhook(id)





    return (
        <div className="my-5">
            <h1 className="mx-4 mb-4 text-xl font-extrabold md:text-center" > {AllReviews && AllReviews.length} Review</h1>
            <h1 className=" border border-[#bbb]  uppercase grow
                    leading-9 py-2 px-7 mx-auto tracking-wide  w-fit 
                    hover:bg-black duration-300 ease-in-out hover:text-white cursor-pointer"
                onClick={() => serReviewShow(!reviewShow)}>
                write a review
            </h1>
            <div className={"add_review  bg-[#eeeeee54] px-4 rounded-xl py-4 mt-10 ease-in-out duration-500 " + (reviewShow ? "" : "hidden")}  >
                <div className=" mb-4   flex flex-col">
                    <label className="font-bold ml-1 capitalize" htmlFor="name"> add your Review (100)  </label>
                    <input
                        value={review}
                        onChange={(e) => setReview(e.target.value)}
                        type="text"
                        placeholder="Your Review"
                        className="rounded-md  py-2 px-2 border  mt-2 md:w-1/2 w-full " />
                </div>
                <div className="flex items-center gap-3 ">
                    <h1 className="font-bold text-xl ml-1 capitalize">rating </h1>
                    <ReactStars
                        count={5}
                        onChange={ratingChanged}
                        size={27}
                        isHalf={false}
                        emptyIcon={<i className="far fa-star"></i>}
                        fullIcon={<i className="fa fa-star"></i>}
                        activeColor="#ffd700"
                    />
                </div>
                <div
                    onClick={AddNewReveiw}
                    className="my-4 border border-[#bbb]  uppercase 
                    w-fit  leading-9 py-2 px-6  rounded-sm tracking-wide text-center
                    bg-black text-white cursor-pointer">
                    submit review
                </div>
            </div>
            <div className="people_review mt-10">

                {
                    !isLoading ?
                        AllReviews && AllReviews.map((item) => {
                            return (
                                <div key={item._id} className="mx-4 my-5 border-b pb-5">
                                    <div className="flex items-start justify-between">
                                        <div className="flex items-center gap-4 mb-2 ">
                                            <img src="/src/assets/image/user.jpg" className="max-w-[48px] rounded-full" alt="user_img" />
                                            <div>
                                                <div className="flex items-center gap-1">
                                                    <h1 className="font-bold mt-1">{item.rating}</h1>
                                                    <FontAwesomeIcon icon={faStar} className=' text-yellow-400   text-lg  cursor-pointer' />
                                                </div>
                                                <h1 className="text-[#6F6F6F] font-medium tracking-wide"> {item.user.name}  . {item.createdAt.substr(1, 9)}</h1>
                                            </div>
                                        </div>
                                        {userId !== null && userId && item.user ?
                                            userId._id === item.user._id && <div className="flex gap-4">

                                                <h1
                                                    onClick={() => UpdateReview(item.review, item._id)}
                                                    className="cursor-pointer font-bold text-[#6b6b6b]">
                                                    edit <FontAwesomeIcon icon={faEdit} className="ml-1" />
                                                </h1>

                                                <h1 className="cursor-pointer font-bold text-[#6b6b6b]"
                                                    onClick={() => GetIdforDelete(item._id)}
                                                >
                                                    delete <FontAwesomeIcon icon={faTrash} className="text-red-500 ml-1" />
                                                </h1>
                                            </div>
                                            : null
                                        }
                                        {
                                            userId !== null && userId.role === "admin" &&
                                            <h1 className="cursor-pointer font-bold text-[#6b6b6b]"
                                                onClick={() => GetIdforDelete(item._id)}
                                            >
                                                delete <FontAwesomeIcon icon={faTrash} className="text-red-500 ml-1" />
                                            </h1>
                                        }
                                        {showModal &&
                                            <>
                                                <div
                                                    className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                                                >
                                                    <div className="relative w-auto my-6 mx-auto max-w-3xl">
                                                        {/*content*/}
                                                        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                                            {/*body*/}
                                                            <div className="relative p-6 flex-auto">
                                                                <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
                                                                    Are You sure To Delete This Review
                                                                </p>
                                                            </div>
                                                            {/*footer*/}
                                                            <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                                                                <button
                                                                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                                                    type="button"
                                                                    onClick={() => setShowModal(false)}
                                                                >
                                                                    Keep it
                                                                </button>
                                                                <button
                                                                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                                                    type="button"
                                                                    onClick={() => DeleteReveiw()}
                                                                >
                                                                    Delete
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                                            </>
                                        }
                                    </div>
                                    <h1 className="font-semibold">{item.review}</h1>
                                </div>
                            )
                        })

                        : <div className="flex items-center justify-center w-full">
                            <SpinnerDiamond speed={150} secondaryColor={"#ddd"} />
                        </div>
                }

            </div>

        </div >
    )
}

export default ProductReview