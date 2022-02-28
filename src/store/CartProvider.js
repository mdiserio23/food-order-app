import { useReducer, useState } from "react";
import CartContext from "./cart-context";

const initialCartState = {
  items: [],
  totalAmout: 0
};

const cartReducer = (state, action) => {
  if(action.type === 'ADD') {
    const updatedItems = state.items.concat(action.item);
    const updatedAmount = state.totalAmount + action.item.price * action.item.amount
    return {
      items: updatedItems,
      totalAmount: updatedAmount
    }
  } 
  return initialCartState
}

const CartProvider = (props) => {
  const [showCartModal, setShowCartModal] = useState(false);
  const [cartState, dispatchCartAction] = useReducer(cartReducer, initialCartState)

  const showModalHandler = (value) => {
      setShowCartModal(value)
  };

  const addItemHandler = (item) => {
    dispatchCartAction({type: 'ADD', item})
  };

  return (
    <CartContext.Provider
      value={{
        cartList: cartState.items,
        totalAmount: cartState.totalAmout,
        showCartModal,
        addItem: addItemHandler,
        modalHandler: showModalHandler,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
