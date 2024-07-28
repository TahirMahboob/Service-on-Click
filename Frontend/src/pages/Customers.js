import React, { useState } from 'react';
import { Table, Button, Space, Modal } from 'antd';
import '@fortawesome/fontawesome-free/css/all.min.css';

const { confirm } = Modal;

const Customers = () => {
  const [dataSource, setDataSource] = useState(generateData());

  // Function to generate static data
  function generateData() {
    const data = [];
    for (let i = 1; i <= 90; i++) {
      data.push({
        key: i,
        name: `Customer ${i}`,
        serviceName: `Service ${i}`,
        status: i % 2 === 0 ? 'Active' : 'Inactive',
        budget: `$${(i * 100).toFixed(2)}`,
        location: `Location ${i}`,
        customerId: `CUS-${i}`,
      });
    }
    return data;
  }

  // Columns definition
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Services Name',
      dataIndex: 'serviceName',
      key: 'serviceName',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
    },
    {
      title: 'Budget',
      dataIndex: 'budget',
      key: 'budget',
    },
    {
      title: 'Location',
      dataIndex: 'location',
      key: 'location',
    },
    {
      title: 'Customer ID',
      dataIndex: 'customerId',
      key: 'customerId',
    },
    {
      title: 'Action',
      key: 'action',
      render: (text, record) => (
        <Space size="middle">
          <Button type="link" onClick={() => handleDelete(record.key)}>Delete</Button>
        </Space>
      ),
    },
  ];

  // Function to handle delete of a single customer
  const handleDelete = (key) => {
    confirm({
      title: 'Are you sure you want to delete this customer?',
      okText: 'Yes',
      okType: 'danger',
      cancelText: 'No',
      onOk() {
        const newData = dataSource.filter((item) => item.key !== key);
        setDataSource(newData);
      },
    });
  };

  // Function to handle delete all customers
  const handleDeleteAll = () => {
    confirm({
      title: 'Are you sure you want to delete all customers?',
      okText: 'Yes',
      okType: 'danger',
      cancelText: 'No',
      onOk() {
        setDataSource([]);
      },
    });
  };

  return (
    <div className="p-4">
      <h3 className="mb-4 text-xl">Customers</h3>
      <div className="mb-4">
        <Button type="primary" danger onClick={handleDeleteAll}>
          Delete All Customers
        </Button>
      </div>
      <Table 
        columns={columns} 
        dataSource={dataSource} 
        pagination={{ pageSize: 10, total: dataSource.length, showSizeChanger: false, defaultCurrent: 1 }} 
      />
    </div>
  );
};

export default Customers;
