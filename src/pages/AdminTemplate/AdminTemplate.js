import React, { Component } from 'react'
import { Navigate, Outlet, useNavigate } from 'react-router-dom'
import { Fragment, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Redirect } from 'react-router-dom';
import { TOKEN, USER_LOGIN } from '../../util/setting/config';
import { Layout, Menu, Breadcrumb } from 'antd';
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { NavLink } from "react-router-dom";
import _ from "lodash";

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

export default function AdminTemplate() {
  const { userLogin } = useSelector(state => state.QuanLyNguoiDungReducer);

  const [collapsed, setCollapsed] = useState(false);

  const navigate = useNavigate();

  const onCollapse = collapsed => {
    // console.log(collapsed);
    setCollapsed(collapsed);
  };

  useEffect(() => {
    window.scrollTo(0, 0);

  })

  const operations = <Fragment>
    {!_.isEmpty(userLogin) ? <Fragment> <button onClick={() => {
      // history.push('/profile')
      navigate('/profile')
    }}> <div style={{ width: 50, height: 50, display: 'flex', justifyContent: 'center', alignItems: 'center' }} className="text-2xl ml-5 rounded-full bg-red-200">{userLogin.taiKhoan.substr(0, 1)}</div>Hello ! {userLogin.taiKhoan}</button> <button onClick={() => {
      localStorage.removeItem(USER_LOGIN);
      localStorage.removeItem(TOKEN);
      // history.push('/home');
      navigate('/home')
      window.location.reload();
    }} className="text-blue-800">Đăng xuất</button> </Fragment> : ''}
  </Fragment>

// if (userLogin.maLoaiNguoiDung !== 'QuanTri') {
//   alert('Bạn không có quyền truy cập vào trang này !')
//   return <Navigate replace to={'/login'}/>
//   return <Redirect to='/' />
// }

if (!localStorage.getItem('UserAdmin')) {
  alert('Bạn không có quyền truy cập vào trang này !')
  return <Navigate replace to={'/login'}/>
}

  return (
    <>
      <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
          <div className="logo p-4 mb-2">
            <img style={{ width: 500, height: 60 }} src="https://mybk.hcmut.edu.vn/my/images/logo.png" alt="..." />
          </div>
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1" icon={<UserOutlined />}>
              <NavLink to="/admin/dashboard">Users</NavLink>
            </Menu.Item>

            <SubMenu key="sub1" icon={<FileOutlined />} title="Films">
              <Menu.Item key="11" icon={<FileOutlined />}>
                <NavLink to="/admin/addnew">Add new</NavLink>
              </Menu.Item>

              <Menu.Item key="10" icon={<FileOutlined />}>
                <NavLink to="/admin/films">Films</NavLink>
              </Menu.Item>
            </SubMenu>

            <Menu.Item key="3" icon={<DesktopOutlined />}>
              <NavLink to="/admin/showtimes">Showtime</NavLink>
            </Menu.Item>
            {/* <SubMenu key="sub1" icon={<UserOutlined />} title="User">
                            <Menu.Item key="3">Tom</Menu.Item>
                            <Menu.Item key="4">Bill</Menu.Item>
                            <Menu.Item key="5">Alex</Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub2" icon={<TeamOutlined />} title="Team">
                            <Menu.Item key="6">Team 1</Menu.Item>
                            <Menu.Item key="8">Team 2</Menu.Item>
                        </SubMenu>
                        <Menu.Item key="9" icon={<FileOutlined />}>
                            Files
                        </Menu.Item> */}
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }} >
            <div className="text-right pr-10 pt-1">{operations}</div>
          </Header>
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              {/* <Breadcrumb.Item>User</Breadcrumb.Item>
                            <Breadcrumb.Item>Bill</Breadcrumb.Item> */}
            </Breadcrumb>



            <div className="site-layout-background" style={{ padding: 24, minHeight: '85vh' }}>
              <Outlet />
            </div>


          </Content>
          <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
      </Layout>

    </>
  )
}
