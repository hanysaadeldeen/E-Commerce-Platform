
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AddReview, DeleteSpecificReview, GetReviewOnProduct, UpdateSpecificReveiw } from '../../reduxTool/ReviewSlice'
import toast from 'react-hot-toast'

const Reviewhook = (id) => {


    const dispatch = useDispatch()
    const userId = JSON.parse(localStorage.getItem("user"))


    const [typeReveiw, setTypeReveiw] = useState("addNew")
    const [idUpdateReveiw, setIdUpdateReveiw] = useState("")

    const [review, setReview] = useState("")
    const [rating, setRating] = useState("")
    const [idReveiw, setIdReveiw] = useState("")
    const [showModal, setShowModal] = useState(false)

    const [loadingAdd, setLoadingDdd] = useState(true)
    const [loadingUPdate, setLoadingUpdate] = useState(true)
    const [LoadingDelete, setLoadingDelete] = useState(true)
    const [reviewShow, serReviewShow] = useState(false)

    const { isLoading, AllReviews, error, NewReview } = useSelector((state) => state.Review)
    const userr = JSON.parse(localStorage.getItem("user")) || ""



    const GetRviewProduct = async () => {
        await dispatch(GetReviewOnProduct(id))
    }

    useEffect(() => {
        GetRviewProduct()
    }, [])

    const ratingChanged = (newRating) => {
        setRating(newRating);
    };


    const AddNewReveiw = async () => {
        if (userr !== "") {
            if (userr.role === "user") {

                if (rating !== "" && review !== "") {
                    if (userId !== null) {
                        if (typeReveiw === "addNew") {
                            setLoadingDdd(true)
                            await dispatch(AddReview(
                                {
                                    review,
                                    rating,
                                    "product": id,
                                    "user": userId._id
                                }
                            ))
                            setLoadingDdd(false)
                        } else {
                            setLoadingUpdate(true)
                            let info = {
                                review,
                                rating
                            }
                            await dispatch(UpdateSpecificReveiw(
                                {
                                    idUpdateReveiw,
                                    info
                                }))
                            setLoadingUpdate(false)
                        }

                    } else {
                        toast.error("Login first")
                    }
                } else {
                    if (review === "") {
                        toast.error("Add Reveiw description")
                    } if (rating === "") {
                        toast.error("Change Reveiw rating helre")
                    }
                }
            } else {
                toast.error("admin can't add review")
            }
        } else {
            toast.error("login first")
        }


    }


    const GetIdforDelete = (id) => {
        setIdReveiw(id);
        setShowModal(true)
    }


    const DeleteReveiw = async () => {
        setLoadingDelete(true)
        await dispatch(DeleteSpecificReview(idReveiw))
        setLoadingDelete(false)
    }


    useEffect(() => {
        if (!LoadingDelete) {
            if (!isLoading) {
                if (error === null) {
                    setShowModal(false)
                    toast.success("Delete success")
                }
                GetRviewProduct()
            }
        }
    }, [LoadingDelete])


    useEffect(() => {
        if (!loadingAdd) {
            if (error === null) {
                toast.success("Added success ")
                setRating("")
                setReview("")
                GetRviewProduct()
            } else {
                if (error[0].msg === "You already added review on this product") {
                    toast.error("You already add review on this product")
                    setRating("")
                    setReview("")
                }
            }
        }
    }, [loadingAdd])

    useEffect(() => {
        if (!loadingUPdate) {
            if (error === null) {
                if (NewReview !== "") {
                    toast.success("Updated  success ")
                    setRating("")
                    setReview("")
                    setTypeReveiw("addNew")
                    GetRviewProduct()
                }
            }
        }
    }, [loadingUPdate])

    const UpdateReview = (reveiwTitle, id) => {
        setIdUpdateReveiw(id);
        setReview(reveiwTitle)
        serReviewShow(true)
        setTypeReveiw("update")

    }

    return [ratingChanged, isLoading, serReviewShow, reviewShow,
        AddNewReveiw, setReview, AllReviews,
        review, userId, DeleteReveiw, GetIdforDelete, setShowModal, showModal, UpdateReview]
}

export default Reviewhook