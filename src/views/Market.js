// React
import React, { useEffect, useState } from "react";

// Redux
import { useSelector } from "react-redux";

// Enum
import SORTING_DATA from "../common/Enum";

// Components
import Brand from "../components/Filters/Brand/Brand";
import Tags from "../components/Filters/Tags/Tags";
import Sorting from "../components/Filters/Sorting/Sorting";
import Product from "../components/Product/Product";
import Basket from "../components/Basket/Basket";
import { Row, Col, Space } from "antd";
import { ShoppingOutlined } from "@ant-design/icons";
import filterAndGetProducts from "../helper/filterAndGetProducts";
import sortProduct from "../helper/sortProduct";
import logo from "../common/image/logo.png";

// Services
import getItems from "../api/getItems.js";
import getCompanies from "../api/getCompanies";

//Style
import "../views/Market.css";

export default function Market() {
  const items = useSelector((state) => state.items.items);
  const basket = useSelector((state) => state.basket.basket);

  const [productData, setProductData] = useState(null);
  const [filteredProductData, setFilteredProductData] = useState(null);
  const [itemTypeFilter, setItemTypeFilter] = useState(null);
  const [brandFilter, setBrandFilter] = useState([]);
  const [tagFilter, setTagFilter] = useState([]);
  const [sortingFilter, setSortingFilter] = useState(SORTING_DATA.INCREASE);
  const [totalPrice, setTotalPrice] = useState(0.0);

  useEffect(() => {
    getItems();
    getCompanies();
  }, []);

  useEffect(() => {
    if ((itemTypeFilter || brandFilter || tagFilter) && items) {
      let filterProducts = filterAndGetProducts(
        items,
        itemTypeFilter,
        brandFilter,
        tagFilter
      );

      setFilteredProductData(filterProducts);
    }
  }, [brandFilter, tagFilter, itemTypeFilter, items]);

  useEffect(() => {
    if (sortingFilter && filteredProductData) {
      const copyOfProductData = JSON.parse(JSON.stringify(filteredProductData));

      const sortedProducts = sortProduct(copyOfProductData, sortingFilter);
      setProductData(sortedProducts);
    }
  }, [sortingFilter, filteredProductData]);

  useEffect(() => {
    if (basket) {
      let newPrice = 0.0;
      basket.forEach((element) => {
        const price = element.price * element.count;
        newPrice += price;
      });
      setTotalPrice(newPrice.toFixed(2));
    }
  }, [basket]);

  return (
    <>
      <Row className="brand-header">
        <Col sm={21} className="brand-header-name">
          <img width={141} height={44} src={logo} alt={logo} />
        </Col>
        <Space sm={3} className="brand-header-basket">
          <ShoppingOutlined />₺ {totalPrice}
        </Space>
      </Row>
      <Row className="brand-container">
        <Col sm={6}>
          <Row>
            <Sorting setSortingFilter={setSortingFilter} />
          </Row>
          <Row>
            <Brand setBrandFilter={setBrandFilter} />
          </Row>
          <Row>
            <Tags setTagFilter={setTagFilter} />
          </Row>
        </Col>
        <Col sm={12} style={{ paddingRight: "16px" }}>
          <Product
            setItemTypeFilter={setItemTypeFilter}
            productData={productData}
          />
        </Col>
        <Col sm={6} style={{ paddingLeft: "16px", paddingTop: "14px" }}>
          <Basket totalPrice={totalPrice} />
        </Col>
      </Row>
    </>
  );
}
