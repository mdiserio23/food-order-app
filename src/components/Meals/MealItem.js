import { useContext } from "react";
import CartContext from "../../store/cart-context";
import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";

const MealItem = (props) => {

  const cartCtx = useContext(CartContext);
  const addItemHandler = (amount) => {
    const itemToAdd = {
      id: props.id,
      name: props.name,
      description: props.description,
      price: props.price,
      amount
    }
    cartCtx.addItem(itemToAdd);
  }

  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{props.price} €</div>
      </div>

      <MealItemForm id={props.id} onAddItem={addItemHandler}/>
    </li>
  );
};

export default MealItem;
