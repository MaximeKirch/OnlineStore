import React from "react";
import { useSelector } from "react-redux";

export default function TotalPrice() {
  const cart = useSelector((state) => state.cart.cart);
  let totalPrice = 0;

  for (let i = 0; i < cart.length; i++) {
    let linePrice = 0;
    linePrice = cart[i].quantity * cart[i].price;
    totalPrice += linePrice;
  }

  return <div>Total : ${Math.floor(totalPrice).toFixed(2)}</div>;
}
