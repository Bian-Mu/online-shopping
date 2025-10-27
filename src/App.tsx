import React, { useState } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  ShoppingOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Button, ConfigProvider, Layout, Menu, theme } from 'antd';

const { Header, Sider, Content } = Layout;

const App: React.FC = () => {

  const [collapsed, setCollapsed] = useState(false);
  const [isDark, setIsDark] = useState(false)
  const lightTheme = {
    token: {
      colorPrimary: '#1890ff',
      bodyBg: '#f5f5f5',
      colorBgContainer: '#ffffff',
      siderBg: '#ffffff'
    },
  };

  const darkTheme = {
    token: {
      colorPrimary: '#177ddc',
      bodyBg: '#000000',
      colorBgContainer: '#141414',
      colorText: 'rgba(255, 255, 255, 0.85)',
      siderBg: '#000000'
    },
  };
  return (
    <ConfigProvider theme={isDark ? darkTheme : lightTheme}>
      <Layout className='h-full'>

        <Sider style={{ background: 'siderBg' }} trigger={null} collapsible collapsed={collapsed}>
          <div className="demo-logo-vertical" />
          <p className='text-2xl '>Online-Shopping</p>
          <Menu
            mode="inline"
            defaultSelectedKeys={['2']}
            items={[
              {
                key: '1',
                icon: <UserOutlined />,
                label: '我的',
              },
              {
                key: '2',
                icon: <ShoppingOutlined />,
                label: '商品',
              }
            ]}
          />
        </Sider>
        <Layout>
          <Header style={{ padding: 0 }}>
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
          <Content
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280
            }}
          >
            Content
          </Content>
        </Layout>
      </Layout>
    </ConfigProvider>

  );
};

export default App;