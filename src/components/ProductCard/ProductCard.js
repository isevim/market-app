// React
import React from "react";

// Redux
import store from "../../redux/store";
import { setBasket } from "../../redux";
import { useSelector } from "react-redux";

// Style
import "../ProductCard/ProductCard.css";

// Components
import { Button, Card } from "antd";

export default function ProductCard({ item }) {
  const basket = useSelector((state) => state.basket.basket);

  const handleOnAddButton = (e) => {
    e.stopPropagation();
    const selectedIndex = basket.findIndex(
      (element) => element.name === item.name
    );

    let newBasket = JSON.parse(JSON.stringify(basket));
    if (selectedIndex > -1) {
      newBasket[selectedIndex].count = newBasket[selectedIndex].count + 1;
    } else {
      item.count = 1;
      newBasket.push(item);
    }
    store.dispatch(setBasket(newBasket));
  };

  return (
    <Card
      className="product-card-container"
      cover={
        <div className="product-image-container">
          <div className="product-image-box" />
        </div>
      }
      actions={[
        <Button className="add-button" onClick={(e) => handleOnAddButton(e)}>
          Add
        </Button>,
      ]}
    >
      <span className="item-price">₺{item.price} </span>
      <p className="card-body-items">{item.name}</p>
    </Card>
  );
}
