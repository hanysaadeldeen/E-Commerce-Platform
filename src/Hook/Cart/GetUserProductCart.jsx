
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { DeleteAllCart, DeleteOneCart, GetUserCart, UpdateProductCartQuant } from '../../reduxTool/CartSlice'
import toast from 'react-hot-toast'

const GetUserProductCart = () => {


    const dispatch = useDispatch()

    const ScrollToTop = () => {
        useEffect(() => {
            window.scrollTo(0, 0);
        }, []);

        return null;
    };
    ScrollToTop()
    const { AllCart, isLoaing } = useSelector((state) => state.Cart)

    const userr = JSON.parse(localStorage.getItem("user")) || []


    const GetUserCartProduct = async () => {
        if (userr && userr.role === "user") {
            await dispatch(GetUserCart())
        }
    }
    useEffect(() => {
        GetUserCartProduct()
    }, [])


    const DeleteOneProduct = async (id) => {
        await dispatch(DeleteOneCart(id))
        toast.success('Deleted successfully')
        GetUserCartProduct()

    }
    const DeleteUserAllCart = async () => {
        await dispatch(DeleteAllCart())
        toast.success('Deleted All Cart successfully')
        GetUserCartProduct()
    }



    const UpdateCartQuantity = async (id, qtn) => {
        await dispatch(UpdateProductCartQuant({ id, qtn }))
    }


    return [AllCart, isLoaing, DeleteOneProduct, DeleteUserAllCart, UpdateCartQuantity]
}

export default GetUserProductCart