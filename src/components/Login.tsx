import React, { useState } from 'react';
import { Form, Input, Button, Card, Tabs, type TabsProps } from 'antd';
import { PhoneOutlined, LockOutlined, HomeOutlined, UserAddOutlined } from '@ant-design/icons';

import fakeUsers from "../fakeData/users.json"


const Login: React.FC<{ setUser: Function }> = ({ setUser }) => {
    const [activeTab, setActiveTab] = useState('login');
    const [form] = Form.useForm();


    const merchant = fakeUsers[0]
    const customer = fakeUsers[1]

    const onFinish = (values: any) => {
        if (activeTab === 'login') {
            console.log('登录信息:', values);
            localStorage.setItem('userData', JSON.stringify(merchant))
            setUser(merchant)
        } else {
            console.log('注册信息:', values);
            localStorage.setItem('userData', JSON.stringify(customer))
            setUser(customer)
        }
    };

    const handleTabChange = (key: string) => {
        setActiveTab(key);
        form.resetFields();
    };

    const items: TabsProps['items'] = [
        { key: 'login', label: '登陆' },
        { key: 'register', label: '注册' }
    ]

    return (
        <div className='justify-items-center mt-[150px]'>
            <Card title="欢迎" style={{ width: 500 }}>
                <Tabs activeKey={activeTab} items={items} centered onChange={handleTabChange}>
                </Tabs>

                <Form
                    form={form}
                    name="login_register"
                    onFinish={onFinish}
                    initialValues={{ remember: true }}
                >
                    <Form.Item
                        name="phone"
                        rules={[
                            { required: true, message: '请输入您的手机号!' },
                            { pattern: /^1[3456789]\d{9}$/, message: '请输入有效的手机号!' }
                        ]}
                    >
                        <Input prefix={<PhoneOutlined />} placeholder="手机号" />
                    </Form.Item>

                    <Form.Item
                        name="password"
                        rules={[{ required: true, message: '请输入您的密码!' }]}
                    >
                        <Input.Password prefix={<LockOutlined />} placeholder="密码" />
                    </Form.Item>

                    {activeTab === 'register' && (
                        <>
                            <Form.Item
                                name="address"
                                rules={[{ required: true, message: '请输入您的地址!' }]}
                            >
                                <Input prefix={<HomeOutlined />} placeholder="地址" />
                            </Form.Item>

                            <Form.Item
                                name="invitationCode"
                            >
                                <Input prefix={<UserAddOutlined />} placeholder="邀请码（选填）" />
                            </Form.Item>
                        </>
                    )}

                    <Form.Item>
                        <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
                            {activeTab === 'login' ? '登录' : '注册'}
                        </Button>
                    </Form.Item>
                </Form>
            </Card>
        </div>

    );
};

export default Login;