import { useContext, useState } from "react";
import CartContext from "../../store/cart-context";
import Modal from "../Modal/Modal";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import Checkout from "./Checkout";
import Button from "../UI/Button";
import useHttp from "../../hooks/use-http";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  const { isLoading, error, sendRequest: sendOrder } = useHttp();
  const [formSubmitted, setFormSubmitted] = useState(false);

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
    const request = {
      usersData: { ...checkoutForm, name: checkoutForm.yoruName },
      cartList: [...cartCtx.cartList],
    };
    sendOrder({
      url: "https://react-http-2083a-default-rtdb.firebaseio.com/orders.json",
      method: "POST",
      body: request,
    });
    setFormSubmitted(true);
    cartCtx.resetCartList();
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

  let userFeedbackAfterSubmit = null;
  if (isLoading) {
    userFeedbackAfterSubmit = <p>Loading...</p>;
  }
  if (error) {
    userFeedbackAfterSubmit = <p>Something went wrong</p>;
  }
  if (!isLoading && !error && formSubmitted) {
    userFeedbackAfterSubmit = (
      <>
        <p>Order success</p>
        <div className={classes["actions"]}>
          <Button type="button" onClick={onCloseModalHandler}>
            Close
          </Button>
        </div>
      </>
    );
  }

  const modalContent = (
    <>
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
    </>
  );

  return (
    <>
      <Modal>
        {!isLoading && !error && !formSubmitted && modalContent}
        {userFeedbackAfterSubmit}
      </Modal>
    </>
  );
};

export default Cart;
