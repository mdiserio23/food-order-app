import { useContext } from "react";
import CartContext from "../../store/cart-context";
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
    <>
      <Modal onCloseModal={props.onCloseCart}>
        <ul className={classes["cart-items"]}>{cartItems}</ul>
      </Modal>
    </>
  );
};

export default Cart;
