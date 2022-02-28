import { useContext } from "react";
import CartContext from "../../store/cart-context";
import Modal from "../Modal/Modal";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const onRemoveHandler = id => {
    cartCtx.removeItem(id)
  };
  const onAddHandler = item => {
    cartCtx.addOneAmountItem(item);
  };

  const cartItems = cartCtx.cartList.map((item) => (
    <CartItem
      key={item.id}
      name={item.name}
      price={item.price}
      amount={item.amount}
      onRemove={onRemoveHandler.bind(null, item.id)}
      onAdd={onAddHandler.bind(null, item)}
    ></CartItem>
  ));
  return (
    <>
      <Modal onCloseModal={props.onCloseCart}>
        <ul className={classes["cart-items"]}>{cartItems}</ul>
        <div className={classes.total}>
          <span>Total Amount</span>
          <span>$ {cartCtx.totalAmount}</span>
        </div>
      </Modal>
    </>
  );
};

export default Cart;
