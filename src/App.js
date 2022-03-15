import { useContext } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import CartContext from "./store/cart-context";
import MealsProvider from "./store/MealsProvider";

function App() {
  const ctx = useContext(CartContext);

  const onOpenModalHandler = () => {
    ctx.modalHandler(true);
  };

  return (
    <MealsProvider>
      {ctx.showCartModal && <Cart />}
      <Header clickCart={onOpenModalHandler} />
      <Meals />
    </MealsProvider>
  );
}

export default App;
