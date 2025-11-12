import React, { useState, useEffect } from 'react';
import type { User } from '../DataProps';
import Login from './Login';
import { Button, Card } from 'antd';
import MerchantItem from './merchant';
import CustomerItem from './customer';


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
        <>
            <div className='w-full h-full grid grid-cols-10'>
                <div className='col-span-3 pr-3 border-r-2 border-gray-400'>
                    <InfoCard user={user} />
                </div>
                <div className='col-span-7 '>
                    {user.role ? <CustomerItem userId={user.userId} /> : <MerchantItem userId={user.userId} />}
                </div>
            </div>
        </>

    )

};




export default UserPage;