import React from "react";
import { Table, Button, Space, Avatar } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";

const dataSource = Array(6).fill().map((_, index) => ({
  key: index,
  product: "Nike Air Max 270",
  price: "EUR 1200,0",
  category: "Shoes",
  description: "A high-quality ...",
  weight: "1.5 kg",
}));

const columns = [
  {
    title: <span><i className="fas fa-box"></i> Product</span>,
    dataIndex: "product",
    key: "product",
    render: (text) => (
      <Space>
        <Avatar shape="circle" size={40} src="https://via.placeholder.com/40" />
        {text}
      </Space>
    ),
  },
  {
    title: <span><i className="fas fa-euro-sign"></i> Price</span>,
    dataIndex: "price",
    key: "price",
  },
  {
    title: <span><i className="fas fa-list"></i> Category</span>,
    dataIndex: "category",
    key: "category",
  },
  {
    title: <span><i className="fas fa-barcode"></i> Description</span>,
    dataIndex: "description",
    key: "description",
  },
  {
    title: <span><i className="fas fa-weight"></i> Weight</span>,
    dataIndex: "weight",
    key: "weight",
  },
  {
    title: <span><i className="fas fa-cogs"></i> Manage Product</span>,
    key: "actions",
    render: () => (
      <Space>
        <Button icon={<EditOutlined />} type="default">
          Edit
        </Button>
        <Button icon={<DeleteOutlined />} type="primary" danger>
          Edit
        </Button>
      </Space>
    ),
  },
];

const TourTable = () => {
  return <Table dataSource={dataSource} columns={columns} bordered />;
};

export default TourTable