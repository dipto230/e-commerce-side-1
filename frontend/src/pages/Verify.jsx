import React, { useContext, useEffect } from 'react'
import { ShopContext } from '../context/ShopContext'
import { useSearchParams, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-toastify'

const Verify = () => {
    const navigate = useNavigate() // ✅ use this instead of context
    const { token, setCartItems, backendUrl } = useContext(ShopContext)
    const [searchParams] = useSearchParams()
    const success = searchParams.get('success')
    const orderId = searchParams.get('orderId')

    const verifyPayment = async () => {
        if (!token) return
        try {
            const response = await axios.post(
                backendUrl + '/api/order/verifyStripe',
                { success, orderId },
                { headers: { token } }
            )
            if (response.data.success) {
                setCartItems({})
                navigate('/orders') // ✅ now it works
            } else {
                navigate('/cart')
            }
        } catch (error) {
            console.log(error)
            toast.error(error.response?.data?.message || error.message)
        }
    }

    useEffect(() => {
        verifyPayment()
    }, [token])

    return <div>Verifying Payment...</div>
}

export default Verify
