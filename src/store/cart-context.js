import { createContext, useState } from "react";

const DUMMY_CART_LIST = [
  {
    id: "1",
    name: "Schnitzel",
    price: 14,
    quantity: 0,
  },
];

const CartContext = createContext({
  cartList: DUMMY_CART_LIST,
});

export default CartContext;

export const CartProvider = (props) => {
  const [cartList, setCartList] = useState([]);

  return <CartContext.Provider value={{ cartList }}>{props.children}</CartContext.Provider>;
};


