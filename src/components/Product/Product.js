import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Product.css";
const Product = (props) => {
  const { handleAddToCart } = props;
  const { img, name, price, seller, ratings } = props.product;
  return (
    <div className="product">
      <img src={img} alt="" />
      <div className="product-info">
        <h2 className="product-name">{name}</h2>
        <h3 className="product-price">Price: ${price}</h3>
        <p>Manufacturer: {seller}</p>
        <p>Rating: {ratings} start</p>
      </div>
      <button
        onClick={() => handleAddToCart(props.product)}
        className="btn-cart"
      >
        <p style={{ marginRight: "10px" }}>Add to Cart </p>
        <FontAwesomeIcon icon={faShoppingCart} />
      </button>
    </div>
  );
};

export default Product;
