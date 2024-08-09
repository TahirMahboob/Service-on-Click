import React, { useState } from 'react';
import { Table, Button, Modal, Form, Input } from 'antd';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Services = () => {
  const initialData = [];
  for (let i = 1; i <= 90; i++) {
    initialData.push({
      key: i,
      image: 'https://via.placeholder.com/50',
      customerName: `Customer ${i}`,
      totalAmount: `$${(i * 10).toFixed(2)}`,
      status: i % 2 === 0 ? 'Completed' : 'Pending',
      orderId: `ORD-${i}`,
      location: `Location ${i}`,
    });
  }

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [servicesData, setServicesData] = useState(initialData);
  const isAdmin = true; // This should come from your auth state (e.g., Redux or Context)

  // Define the handleRemove function before columns
  const handleRemove = (key) => {
    const updatedData = servicesData.filter(service => service.key !== key);
    setServicesData(updatedData);
  };

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
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Button type="danger" onClick={() => handleRemove(record.key)}>
          Remove
        </Button>
      ),
    },
  ];

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = (values) => {
    const newService = {
      key: servicesData.length + 1,
      image: values.image || 'https://via.placeholder.com/50',
      customerName: values.customerName,
      totalAmount: values.totalAmount,
      status: values.status,
      orderId: `ORD-${servicesData.length + 1}`,
      location: values.location,
    };
    setServicesData([...servicesData, newService]);
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div className="p-4">
      <h3 className="mb-4 text-xl">Services</h3>
      
      {isAdmin && (
        <Button type="primary" className="mb-4" onClick={showModal}>
          Add Service
        </Button>
      )}

      <Table 
        columns={columns} 
        dataSource={servicesData} 
        pagination={{ pageSize: 10, total: servicesData.length, showSizeChanger: false, defaultCurrent: 1 }} 
      />

      <Modal 
        title="Add New Service" 
        visible={isModalVisible} 
        onCancel={handleCancel} 
        footer={null}
      >
        <Form onFinish={handleOk}>
          <Form.Item label="Customer Name" name="customerName" rules={[{ required: true, message: 'Please enter customer name' }]}>
            <Input />
          </Form.Item>
          <Form.Item label="Total Amount" name="totalAmount" rules={[{ required: true, message: 'Please enter total amount' }]}>
            <Input />
          </Form.Item>
          <Form.Item label="Status" name="status" rules={[{ required: true, message: 'Please select status' }]}>
            <Input />
          </Form.Item>
          <Form.Item label="Location" name="location" rules={[{ required: true, message: 'Please enter location' }]}>
            <Input />
          </Form.Item>
          <Form.Item label="Image URL" name="image">
            <Input />
          </Form.Item>
          <Button type="primary" htmlType="submit">Add Service</Button>
        </Form>
      </Modal>
    </div>
  );
};

export default Services;
