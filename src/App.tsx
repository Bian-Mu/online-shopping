import React, { useState } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  ShoppingOutlined,
  ShopTwoTone,
  UserOutlined,
} from '@ant-design/icons';
import { Button, Divider, Layout, Menu } from 'antd';
import { colorConfig } from './AppCss';
import { Routes, useLocation, useNavigate } from 'react-router';
import { Route } from 'react-router';
import User from './components/User';
import Shop from './components/Shop';
import Details from './components/Details';

const { Header, Sider, Content } = Layout;

const App: React.FC = () => {

  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <Layout className='h-screen overflow-hidden '>
      <Sider style={{ background: colorConfig.background }} trigger={null} collapsible collapsed={collapsed}>
        <div className='text-2xl  h-[64px] leading-[64px] text-center'>
          <ShopTwoTone />
          {collapsed ? '' : ' 在线商城'}
        </div>
        <Divider style={{ marginTop: 0, marginBottom: 4 }} />
        <Menu
          mode="inline"
          selectedKeys={[location.pathname]}
          onClick={({ key }) => navigate(String(key))}
          items={[
            {
              key: '/private',
              icon: <UserOutlined />,
              label: '我的',
            },
            {
              key: '/',
              icon: <ShoppingOutlined />,
              label: '商品',
            }
          ]}
        />
      </Sider>
      <Layout className='h-full'>
        <Header style={{ padding: 0, background: colorConfig.background }}>
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
            }}
          />
        </Header>
        <Content>
          <Routes>
            <Route path='/private' element={<User />}></Route>
            <Route path='/' element={<Shop />}></Route>
            <Route path='/details/:goodId' element={<Details />}></Route>
          </Routes>
        </Content>
      </Layout>
    </Layout>

  );
};

export default App;