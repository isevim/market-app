// React
import React from "react";
import store from "../../redux/store";
import { useSelector } from "react-redux";
import { setBasket } from "../../redux";

// Components
import { Row, Col, Space, Button, Typography, Divider } from "antd";

//Style
import "../Basket/Basket.css";

const { Text } = Typography;

export default function Basket({ totalPrice }) {

  const basket = useSelector((state) => state.basket.basket);

  const onPlusButtonClick = (e, item) => {
    e.stopPropagation();
    const selectedIndex = basket.findIndex(
      (element) => element.name === item.name
    );

    let newBasket = JSON.parse(JSON.stringify(basket));
    if (selectedIndex > -1) {
      newBasket[selectedIndex].count = newBasket[selectedIndex].count + 1;
    }
    store.dispatch(setBasket(newBasket));
  };

  const onMinusButtonClick = (e, item) => {
    e.stopPropagation();
    if (item.count > 1) {
      const selectedIndex = basket.findIndex(
        (element) => element.name === item.name
      );

      let newBasket = JSON.parse(JSON.stringify(basket));
      if (selectedIndex > -1) {
        newBasket[selectedIndex].count = newBasket[selectedIndex].count - 1;
      }
      store.dispatch(setBasket(newBasket));

    } else if (item.count === 1) {

      const selectedIndex = basket.findIndex(
        (element) => element.name === item.name
      );
      let newBasket = JSON.parse(JSON.stringify(basket));
      if (selectedIndex > -1) {
        newBasket.splice(selectedIndex, 1)
      }
      store.dispatch(setBasket(newBasket));
    }
  };

  return (
    <div className="basket-container">
      <div className="basket-items">
        {basket?.map((element) => (
          <>
            <Row>
              <Col sm={14}>
                <Space direction="vertical">
                  <Text className="basket-text-color">{element.name}</Text>
                  <Text className="basket-price-color">
                    {"₺" + element.price}
                  </Text>
                </Space>
              </Col>
              <Col sm={10}>
                <Space direction="horizontal">
                  <Button
                    type="link"
                    className="basket-button"
                    onClick={(e) => onMinusButtonClick(e, element)}
                  >
                    -
                  </Button>
                  <div className="basket-box">{element.count}</div>
                  <Button
                    type="link"
                    className="basket-button"
                    onClick={(e) => onPlusButtonClick(e, element)}
                  >
                    +
                  </Button>
                </Space>
              </Col>
            </Row>
            <Divider />
          </>
        ))}
      </div>
      <div className="basket-total-price">₺ {totalPrice}</div>
    </div>
  );
}
