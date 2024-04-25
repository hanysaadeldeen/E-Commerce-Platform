
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AdminGelAllOrder, AdminGetSpecificeOrder, UpdateOrderToDeliverd, UpdateOrderToPaid } from '../../reduxTool/AdminOrderSlice'
import toast from 'react-hot-toast'

const AdminGetAllOrderhook = (id) => {

    const dispatch = useDispatch()

    const [isPaidLOaindg, setIsPaidLoaindg] = useState(true)
    const [isDeliveryloading, setIsDeliveryLoaindg] = useState(true)
    const [isPaid, setIsPaid] = useState(false)
    const [deliverd, setIsDeliverd] = useState(false)
    const { AllOrder, isLoading, SpecificOrder, status } = useSelector((state) => state.AdminAllOrder)

    const GetAllOrderAdmin = async () => {
        if (id === undefined) {
            await dispatch(AdminGelAllOrder())
        } else {
            await dispatch(AdminGetSpecificeOrder(id))
        }
    }

    useEffect(() => {

        GetAllOrderAdmin()

    }, [])

    const paid = [
        {
            value: "true",
        },
        {
            value: "false",
        },
    ];
    const Delivery = [
        {
            value: "Deleverd",
        },
        {
            value: "Not Yet",
        },
    ];


    const ChangePaid = async (e) => {


        e.preventDefault()
        if (isPaid[0].value === "true") {
            setIsPaidLoaindg(true)
            await dispatch(UpdateOrderToPaid(id))
            setIsPaidLoaindg(false)
        }
    }
    const ChangeDelevery = async (e) => {
        e.preventDefault()
        if (deliverd[0].value === "Deleverd") {
            setIsDeliveryLoaindg(true)
            await dispatch(UpdateOrderToDeliverd(id))
            setIsDeliveryLoaindg(false)
        }
    }

    useEffect(() => {
        if (!isPaidLOaindg) {
            if (status === "Success") {
                toast.success('Updated payment order Success')
            }
        }
    }, [isPaidLOaindg])


    useEffect(() => {
        if (!isDeliveryloading) {
            if (status === "Success") {
                toast.success('Updated delivery order Success')
            }
        }
    }, [isDeliveryloading])

    return [AllOrder, isLoading, SpecificOrder, setIsPaid, setIsDeliverd, Delivery, paid, ChangePaid, ChangeDelevery]
}

export default AdminGetAllOrderhook