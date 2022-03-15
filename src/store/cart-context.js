import React from "react";

const CartContext = React.createContext({
  cartList: [],
  totalAmount: 0,
  showCartModal: false,
  showCheckoutForm: false,
  showCheckoutFormlHandler: () => {},
  addItem: () => {},
  addOneAmountItem: () => {},
  removeItem: () => {},
  modalHandler: () => {},
  resetCartList: () => {}
});

export default CartContext;

