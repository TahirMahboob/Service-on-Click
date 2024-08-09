import React, { useState } from "react";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { AiOutlineDashboard, AiOutlineUser } from "react-icons/ai";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Outlet } from "react-router-dom";
import { IoIosNotifications } from "react-icons/io";
import { Layout, Menu, Dropdown, Avatar, Button } from "antd";
import { useNavigate } from "react-router-dom";

const { Header, Sider, Content } = Layout;

const MainLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();

  const handleMenuClick = ({ key }) => {
    if (key === "signout") {
      // Handle signout logic here
      navigate("/login"); // Redirect to login page after signout
    }
  };

  const menu = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key="signout">Sign Out</Menu.Item>
    </Menu>
  );

  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo">
          <h2 className="text-white fs-5 text-center py-3 mb-0 rounded">
            <span className="sm-logo font-bold pt-1 text-lg">HS</span>
            <span className="lg-logo font-bold mt-5 text-xl">Home Service</span>
          </h2>
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={[""]}
          onClick={({ key }) => {
            if (key === "signout") {
            } else {
              navigate(key);
            }
          }}
          items={[
            {
              key: "",
              icon: <AiOutlineDashboard className="fs-4" />,
              label: "Dashboard",
            },
            {
              key: "Catalog",
              icon: <AiOutlineUser className="fs-4" />,
              label: "Pages",
              children: [
                {
                  key: "services",
                  label: "Services",
                },
                {
                  key: "customers",
                  label: "Customers",
                },
              ],
            },
          ]}
        />
      </Sider>

      <Layout className="site-layout">
        <header
          className="flex flex-col sm:flex-row justify-between items-center px-2 sm:px-5 py-2 sm:py-0"
          style={{ background: "#fff" }}
        >
          <div className="flex items-center w-full sm:w-auto">
            {React.createElement(
              collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
              {
                className: "text-2xl trigger cursor-pointer",
                onClick: () => setCollapsed(!collapsed),
              }
            )}
            <div className="ml-4">
              <h3 className="text-lg sm:text-xl font-bold">Admin Dashboard</h3>
              <p className="text-sm text-gray-500">Manage your services</p>
            </div>
          </div>
          <div className="flex items-center space-x-4 sm:space-x-8 mt-2 sm:mt-0">
            <div className="relative">
              <IoIosNotifications className="text-xl" />
              <p
                className="bg-yellow-500 text-white rounded-full px-2 py-1 absolute text-xs flex items-center justify-center"
                style={{
                  top: "-5px",
                  right: "-5px",
                  width: "20px",
                  height: "20px",
                }}
              > 
                3
              </p>
            </div>
            <Dropdown overlay={menu} trigger={['click']}>
              <div className="relative flex items-center cursor-pointer">
                <Avatar
                  src="https://scontent.fskt2-1.fna.fbcdn.net/v/t39.30808-6/415998208_1522190145242136_475730923931830318_n.jpg?stp=cp6_dst-jpg&_nc_cat=100&ccb=1-7&_nc_sid=cc71e4&_nc_eui2=AeEZ3afMBhpRLye_NJcSgJtqRQ-_57vtMTlFD7_nu-0xOT0O4npXr_-NugSRawuNXkbFabjQjlVm0wJvl8QhhDr-&_nc_ohc=axOWrhEODV4Q7kNvgGQFH3C&_nc_ht=scontent.fskt2-1.fna&oh=00_AYBb18e8OwFrPnTm3Kk3_VV0AO7aalkCzVmJFTtnfuJrLA&oe=66BAEDF0"
                  size="large"
                />
                <div className="ml-2 hidden sm:block">
                  <p className="text-xs text-gray-500">Tahir Mahboob</p>
                  <p className="text-xs text-gray-500">tahirmehboob06@gmail.com</p>
                </div>
              </div>
            </Dropdown>
          </div>
        </header>

        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: "#fff",
          }}
        >
          <ToastContainer
            position="top-right"
            autoClose={250}
            hideProgressBar={false}
            newestOnTop={true}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            theme="light"
          />
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
