import { useContext } from "react";
import CartContext from "../../store/cart-context";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";
const HeaderCartButton = props => {

  const cartCtx = useContext(CartContext);
  const numberOfCartItem = cartCtx.cartList.reduce((currNumber, item) => {
    return currNumber + item.amount
  }, 0)
  return (
    <>
      <div className={classes.button} onClick={props.clickCart}>
        <div className={classes.icon}>
          <CartIcon />
        </div>
        <span>Your cart</span>
        <span className={classes.badge}>{numberOfCartItem}</span>
      </div>
    </>
  );
};

export default HeaderCartButton;
