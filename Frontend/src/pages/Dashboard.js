import React from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Table } from "antd";

const columns = [
  {
    title: "SNo",
    dataIndex: "key",
  },
  {
    title: "Name",
    dataIndex: "name",
  },
  {
    title: "Product",
    dataIndex: "product",
  },
  {
    title: "Status",
    dataIndex: "staus",
  },
];

const data1 = [];
for (let i = 0; i < 46; i++) {
  data1.push({
    key: i,
    name: `Edward King ${i}`,
    product: 32,
    staus: `London, Park Lane no. ${i}`,
  });
}

const Dashboard = () => {
  return (
    <div className="p-4">
      <h3 className="mb-4 text-xl">Dashboard</h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-gray-100 p-6 rounded-lg shadow-md text-center hover:bg-gray-200 transition duration-300">
          <i className="fas fa-cogs text-4xl mb-2 text-blue-500"></i>
          <div className="text-xl">Total Services</div>
        </div>
        <div className="bg-gray-100 p-6 rounded-lg shadow-md text-center hover:bg-gray-200 transition duration-300">
          <i className="fas fa-users text-4xl mb-2 text-green-500"></i>
          <div className="text-xl">Employees</div>
        </div>
        <div className="bg-gray-100 p-6 rounded-lg shadow-md text-center hover:bg-gray-200 transition duration-300">
          <i className="fas fa-user text-4xl mb-2 text-yellow-500"></i>
          <div className="text-xl">Customers</div>
        </div>
        <div className="bg-gray-100 p-6 rounded-lg shadow-md text-center hover:bg-gray-200 transition duration-300">
          <i className="fas fa-file-alt text-4xl mb-2 text-red-500"></i>
          <div className="text-xl">Report</div>
        </div>
      
      </div>

      <div className="mt-20">
        <h3 className="mb-5 text-xl">Recent Services Booking</h3>
        <div>
          <Table columns={columns} dataSource={data1} />
        </div>
      </div>
      
    </div>
  );
};

export default Dashboard;
