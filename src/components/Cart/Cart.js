import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Cart.css";

// children ta react router er- for more check Shop.js note
const Cart = ({ cart, clerCart, children }) => {
  // props na diye direct second bracket er moddhe cart diye disi
  let quantity = 0;
  let price = 0;
  let shipping = 0;
  for (const product of cart) {
    quantity = quantity + product.quantity;
    price = price + product.price * product.quantity;
    shipping = shipping + product.shipping;
  }
  // total price jeta asheb ta upor 10% tax
  const tax = parseFloat((price * 0.1).toFixed(2));
  const grandTotal = price + shipping + tax;
  return (
    <div className="cart">
      <p className="cart-heading">Order summary</p>
      <div className="cart-info">
        <p>Selected Items: {quantity}</p>
        <p>Total Price: ${price}</p>
        <p>Total Shipping Charge: ${shipping}</p>
        <p>Tax: ${tax}</p>
        <p className="grand-total">Grand Total: ${grandTotal}</p>
      </div>
      <button className="btn-clear" onClick={clerCart}>
        Clear Cart <FontAwesomeIcon icon={faTrash} />
      </button>
      {children}
    </div>
  );
};

export default Cart;
