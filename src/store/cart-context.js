import React from "react";

const CartContext = React.createContext({
  cartList: [],
  totalAmount: 0,
  showCartModal: false,
  addItem: () => {},
  modalHandler: () => {}
});

export default CartContext;

