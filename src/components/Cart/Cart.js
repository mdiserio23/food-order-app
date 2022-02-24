import { useContext } from "react";
import CartContext, { CartProvider } from "../../store/cart-context";
import Modal from "../Modal/Modal";
import classes from "./Cart.module.css";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const cartItems = cartCtx.cartList.map((item) => (
    <li key={item.id}>
      <div>{item.name}</div>
      <div>{item.price}</div>
      <div>{item.quantity}</div>
    </li>
  ));
  return (
    <CartProvider>
      <Modal>
        <ul className={classes["cart-items"]}>{cartItems}</ul>
      </Modal>
    </CartProvider>
  );
};

export default Cart;
