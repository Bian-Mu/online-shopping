import React, { useState, useEffect } from 'react';
import type { Cart, Good, Order, User } from '../DataProps';
import Login from './Login';
import { Button, Card, Divider } from 'antd';
import fakeGoods from "../fakeData/goods.json"


const UserPage: React.FC = () => {
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        const userData = localStorage.getItem('userData');
        if (userData) {
            const parsedUser: User = JSON.parse(userData);
            setUser(parsedUser);
        }
    }, []);

    const LoginOutClick = () => {
        localStorage.removeItem('userData')
        setUser(null)
    }

    const InfoCard: React.FC<{ user: User }> = ({ user }) => {
        return (
            <div className='my-6 ml-4'>
                <Card title={user.userName}>
                    <p>账号:{user.userId}</p>
                    <p>地址:{user.address}</p>
                </Card>
                <div className='justify-self-center  mt-6'>
                    <Button className='mx-2' onClick={LoginOutClick}>
                        退出登陆
                    </Button>
                    {!user.role ? <Button className='mx-2'>添加商品</Button> : ''}
                </div>
            </div>

        )
    }


    if (!user) {
        return (
            <Login setUser={setUser} />
        );
    }

    return (
        <div className='w-full h-full grid grid-cols-10 gap-4'>
            <div className='col-span-3'>
                <InfoCard user={user} />
            </div>
            <div className='col-span-7'>
                {user.role ? <CustomerItem userId={user.userId} /> : <MerchantItem userId={user.userId} />}
            </div>
        </div>
    )

};



const MerchantItem: React.FC<{ userId: number }> = ({ userId }) => {

    const [goods, setGoods] = useState<Good[]>([])

    useEffect(() => {
        //http
        setGoods(fakeGoods.filter((val) => val.merchantId === userId))
    }, [])

    return (
        <div className='my-6 mr-4 overflow-x-hidden overflow-y-auto bg-white rounded-2xl p-4 h-[calc(100vh-112px)]'>
            {goods.map((good) => {
                return (
                    <>
                        <div key={good.goodId} className='justify-items-center items-center border-b-[1px] border-gray-300 grid grid-cols-7 h-[50px]'>
                            <span>
                                {good.goodId}
                            </span>
                            <span>
                                {good.goodName}
                            </span>
                            <span>
                                {good.isSelling ? `售卖中` : `已下架`}
                            </span>
                            <span>
                                定价：{good.price}
                            </span>
                            <span>
                                余量：{good.quantity}
                            </span>
                            <span>
                                销量：{good.volume}
                            </span>
                            <span>
                                <Button>
                                    修改商品
                                </Button>
                            </span>
                        </div>
                    </>
                )
            })}
        </div>
    )
}

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

export default UserPage;