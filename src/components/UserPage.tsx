import React, { useState, useEffect } from 'react';
import type { User } from '../DataProps';
import fakeUsers from "../fakeData/users.json"

const UserPage: React.FC = () => {
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        const userData = localStorage.getItem('userData');
        if (userData) {
            const parsedUser: User = JSON.parse(userData);
            setUser(parsedUser);
            console.log('用户登录数据:', parsedUser);
        }
    }, []);


    const merchant = fakeUsers[0]
    const customer = fakeUsers[1]

    if (!user) {
        return (
            <div>
                <h3>请登录</h3>
                <button onClick={() => {

                    localStorage.setItem('userData', JSON.stringify(merchant));
                    setUser(merchant);
                    console.log('用户登录数据:', merchant);
                }}>
                    模拟登录
                </button>
            </div>
        );
    }

    return (
        <div>
            <h3>用户信息</h3>
            <pre>{JSON.stringify(user, null, 2)}</pre>
            <button onClick={() => {
                localStorage.removeItem('userData');
                setUser(null);
            }}>
                退出登录
            </button>
        </div>
    );
};

export default UserPage;