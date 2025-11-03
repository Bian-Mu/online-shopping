import React, { useState, useEffect } from 'react';
import type { User } from '../DataProps';
import Login from './Login';

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




    if (!user) {
        return (
            <Login setUser={setUser} />
        );
    }

    if (!user.role) {
        return (
            <div>
                商家
            </div>
        )
    } else {
        return (
            <div>
                顾客
            </div>
        )
    }
};

export default UserPage;