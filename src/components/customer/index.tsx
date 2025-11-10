import { useState, useEffect } from "react"
import type { Cart, Order } from "../../DataProps"


const CustomerItem: React.FC<{ userId: number }> = ({ userId }) => {

    const [cart, setCart] = useState<Cart | null>(null)
    const [orders, setOrders] = useState<Order[]>([])

    useEffect(() => {
        //http

    }, [])

    return (
        <div className='my-6 mr-4 overflow-x-hidden overflow-y-auto'>
            这里准备放购物车
        </div>
    )
}

export default CustomerItem