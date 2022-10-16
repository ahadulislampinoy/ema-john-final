import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./ReviewItem.css";

const ReviewItem = ({ product, handleRemoveItem }) => {
  const { id, img, name, price, quantity, shipping } = product;
  return (
    <div className="review-item">
      <div>
        <img src={img} alt="" />
      </div>
      <div className="review-details-container">
        <div className="review-details">
          <p>{name}</p>
          <p>Price: ${price}</p>
          <p>Price: ${shipping}</p>
          <p>Quantity: {quantity}</p>
        </div>
        <div className="delete-container">
          <button onClick={() => handleRemoveItem(id)} className="btn-delete">
            <FontAwesomeIcon className="delete-icon" icon={faTrashCan} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReviewItem;
