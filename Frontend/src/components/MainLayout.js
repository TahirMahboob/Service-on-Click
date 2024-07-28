import React, { useState } from "react";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import {
  AiOutlineDashboard,
  AiOutlineUser,
 
} from "react-icons/ai";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { IoIosNotifications } from "react-icons/io";
import { Layout, Menu, theme } from "antd";
import { useNavigate } from "react-router-dom";

const { Header, Sider, Content } = Layout;
const MainLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const navigate = useNavigate();
  return (
    <Layout /* onContextMenu={(e) => e.preventDefault()} */>
      
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
        
      <header className="flex flex-col sm:flex-row justify-between items-center px-2 sm:px-5 py-2 sm:py-0" style={{ background: colorBgContainer }}>
      <div className="flex items-center w-full sm:w-auto">
        {React.createElement(
          collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
          {
            className: "text-2xl trigger cursor-pointer",
            onClick: () => setCollapsed(!collapsed),
          }
        )}
        <div className="ml-4">
          <h3 className="text-lg sm:text-xl font-bold">Your Header Title</h3>
          <p className="text-sm text-gray-500">Subtitle or additional info</p>
        </div>
      </div>
      <div className="flex items-center space-x-4 sm:space-x-8 mt-2 sm:mt-0">
        <div className="relative">
          <IoIosNotifications className="text-xl" />
          <p className="bg-yellow-500 text-white rounded-full px-2 py-1 absolute text-xs flex items-center justify-center" style={{ top: '-5px', right: '-5px', width: '20px', height: '20px' }}>3</p>
        </div>
        <div className="relative flex items-center">
          <img
            className="w-8 h-8 sm:w-10 sm:h-10 rounded-full"
            src="https://scontent.flhe7-1.fna.fbcdn.net/v/t39.30808-6/396276158_350878100798702_8809014550388299296_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=cpeyOyvCvs4Q7kNvgHMFb6t&_nc_ht=scontent.flhe7-1.fna&oh=00_AYCJyIvUhRxQUfsadfS5uCViK7FiQeCqrGat7GPksgIDWg&oe=667F72BC"
            alt="User Avatar"
          />
          <div className="ml-2 hidden sm:block">
            <p className="text-xs text-gray-500">tahirmehboob06@gmail.com</p>
          </div>
        </div>
      </div>
    </header>



        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
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

