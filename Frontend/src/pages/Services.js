import React from 'react';
import { Table } from 'antd';
import '@fortawesome/fontawesome-free/css/all.min.css';

const columns = [
  {
    title: 'Image',
    dataIndex: 'image',
    key: 'image',
    render: (text) => <img src={text} alt="Customer" style={{ width: 50, height: 50 }} />,
  },
  {
    title: 'Customer Name',
    dataIndex: 'customerName',
    key: 'customerName',
  },
  {
    title: 'Total Amount',
    dataIndex: 'totalAmount',
    key: 'totalAmount',
  },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
  },
  {
    title: 'Order ID',
    dataIndex: 'orderId',
    key: 'orderId',
  },
  {
    title: 'Location',
    dataIndex: 'location',
    key: 'location',
  },
];

const data = [];
for (let i = 1; i <= 90; i++) {
  data.push({
    key: i,
    image: 'https://via.placeholder.com/50',
    customerName: `Customer ${i}`,
    totalAmount: `$${(i * 10).toFixed(2)}`,
    status: i % 2 === 0 ? 'Completed' : 'Pending',
    orderId: `ORD-${i}`,
    location: `Location ${i}`,
  });
}

const Services = () => {
  return (
    <div className="p-4">
      <h3 className="mb-4 text-xl">Services</h3>
      <Table 
        columns={columns} 
        dataSource={data} 
        pagination={{ pageSize: 10, total: data.length, showSizeChanger: false, defaultCurrent: 1 }} 
      />
    </div>
  );
};

export default Services;
