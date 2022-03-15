import { useReducer, useState } from "react";
import CartContext from "./cart-context";

const initialCartState = {
  cartList: [],
  totalAmount: 0,
};

const addFunction = (state, action) => {
  const updatedAmount =
    action.type === "ADD"
      ? state.totalAmount + action.item.price * action.item.amount
      : state.totalAmount + action.item.price;
  const existingCartItemIndex = state.cartList.findIndex(
    (cart) => cart.id === action.item.id
  );
  const existingItem = state.cartList[existingCartItemIndex];
  let updatedItems;
  if (existingItem) {
    const updatedItem = {
      ...existingItem,
      amount:
        action.type === "ADD"
          ? existingItem.amount + action.item.amount
          : existingItem.amount + 1,
    };
    updatedItems = [...state.cartList];
    updatedItems[existingCartItemIndex] = updatedItem;
  } else {
    updatedItems = state.cartList.concat(action.item);
  }
  return {
    cartList: updatedItems,
    totalAmount: updatedAmount,
  };
};

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    return addFunction(state, action);
  }

  if (action.type === "ADD_ONE") {
    return addFunction(state, action);
  }

  if (action.type === "REMOVE") {
    const decreaseItemIndex = state.cartList.findIndex(
      (item) => item.id === action.id
    );
    const decreaseItem = state.cartList[decreaseItemIndex];
    const updatedTotalAmount = state.totalAmount - decreaseItem.price;
    let updatedItems;
    if (decreaseItem.amount === 1) {
      updatedItems = state.cartList.filter((item) => item.id !== action.id);
    } else {
      const updatedItem = { ...decreaseItem, amount: decreaseItem.amount - 1 };
      updatedItems = [...state.cartList];
      updatedItems[decreaseItemIndex] = updatedItem;
    }

    return {
      cartList: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }

  if(action.type === 'RESET') {
    return initialCartState;
  }

  return initialCartState;
};

const CartProvider = (props) => {
  const [showCartModal, setShowCartModal] = useState(false);
  const [showCheckoutForm, setShowCheckoutForm] = useState(false);
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    initialCartState
  );

  const showModalHandler = (value) => {
    setShowCartModal(value);
  };

  const showCheckoutFormlHandler = (value) => {
    setShowCheckoutForm(value);
  };

  const addItemHandler = (item) => {
    dispatchCartAction({ type: "ADD", item });
  };

  const removeItemHandler = (id) => {
    dispatchCartAction({ type: "REMOVE", id });
  };

  const addOneAmountItemHandler = (item) => {
    dispatchCartAction({ type: "ADD_ONE", item });
  };

  const resetCartListHandler = () => {
    dispatchCartAction({ type: "RESET" });
  };

  return (
    <CartContext.Provider
      value={{
        cartList: cartState.cartList,
        totalAmount: cartState.totalAmount,
        showCartModal,
        showCheckoutForm,
        showCheckoutFormlHandler,
        addItem: addItemHandler,
        modalHandler: showModalHandler,
        addOneAmountItem: addOneAmountItemHandler,
        removeItem: removeItemHandler,
        resetCartList: resetCartListHandler
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
