// React
import React, { useState } from "react";

// Style
import "./Product.css";

// Component
import { Button, List, Typography, Space } from "antd";
import ProductCard from "../ProductCard/ProductCard";
import { ArrowRightOutlined, ArrowLeftOutlined } from "@ant-design/icons";

const { Text } = Typography;

export default function Product({ setItemTypeFilter, productData }) {

  const [mugButtonType, setMugButtonType] = useState("");
  const [shirtButtonType, setShirtButtonType] = useState("");

  const onMugClick = () => {
    setItemTypeFilter("mug");
    setMugButtonType("primary");
    setShirtButtonType("");
  };

  const onShirtClick = () => {
    setItemTypeFilter("shirt");
    setMugButtonType("");
    setShirtButtonType("primary");
  };

  const itemRender = (_, type, originalElement) => {
    if (type === "prev") {
      return (
        <div className="pagination-button">
          <ArrowLeftOutlined style={{color:"#1EA4CE",paddingRight:"4px"}} />
          <a style={{color:"#1EA4CE"}}>Prev</a>
        </div>
      );
    }

    if (type === "next") {
      return (
        <div className="pagination-button">
          <a style={{color:"#1EA4CE",paddingRight:"4px"}}>Next</a>
          <ArrowRightOutlined style={{color:"#1EA4CE"}}/>
        </div>
      );
    }

    return originalElement;
  };

  return (
    <Space direction="vertical">
      <Text className="product-header"> Products</Text>
      <Space>
        <Button
          className="mug-button"
          type={mugButtonType}
          onClick={() => onMugClick()}
        >
          Mug
        </Button>
        <Button type={shirtButtonType} onClick={() => onShirtClick()}>
          Shirt
        </Button>
      </Space>
      {productData && (
        <List
          className="list-container"
          size="large"
          grid={{
            column: 4,
          }}
          dataSource={productData}
          pagination={{
            pageSize: 16,
            showSizeChanger: false,
            itemRender: itemRender,
          }}
          renderItem={(item) => (
            <List.Item>
              <ProductCard item={item} />
            </List.Item>
          )}
        />
      )}
    </Space>
  );
}
