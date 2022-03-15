import { useContext } from "react";
import CartContext from "../../store/cart-context";
import Modal from "../Modal/Modal";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import Checkout from "./Checkout";
import Button from "../UI/Button";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const onRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };
  const onAddHandler = (item) => {
    cartCtx.addOneAmountItem(item);
  };
  const onCloseModalHandler = () => {
    cartCtx.showCheckoutFormlHandler(false);
    cartCtx.modalHandler(false);
  };
  const onCancelCheckoutFormHandler = () => {
    cartCtx.showCheckoutFormlHandler(false);
  };
  const onOrderHandler = () => {
    cartCtx.showCheckoutFormlHandler(true);
  };
  const onConfirmCheckoutHandler = (checkoutForm) => {
    console.log(cartCtx.cartList, "cartList");
    console.log(checkoutForm, "checkoutForm");
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

  const modalAction = (
    <div className={classes["actions"]}>
      <Button type="button" onClick={onCloseModalHandler}>
        Close
      </Button>
      <Button type="submit" onClick={onOrderHandler}>
        Order
      </Button>
    </div>
  );
  return (
    <>
      <Modal>
        <ul className={classes["cart-items"]}>{cartItems}</ul>
        <div className={classes.total}>
          <span>Total Amount</span>
          <span>$ {cartCtx.totalAmount}</span>
        </div>
        {cartCtx.showCheckoutForm && (
          <Checkout
            onCancelCheckoutForm={onCancelCheckoutFormHandler}
            onOrder={onConfirmCheckoutHandler}
          />
        )}
        {!cartCtx.showCheckoutForm && modalAction}
      </Modal>
    </>
  );
};

export default Cart;
