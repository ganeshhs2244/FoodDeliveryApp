import { Fragment, useState } from "react";
import Cart from "./Components/Cart/Cart";
import Header from "./Components/Layout/Header";
import Meals from "./Components/Meals/Meals";
import CartProvider from "./Store/CartProvider";

function App() {
  const [showCart, setshowCart] = useState(false);
  const CartShowHandler = () => {
    setshowCart(true);
  };
  const CartHideHandler = () => {
    setshowCart(false);
  };
  return (
    <CartProvider>
      {showCart && <Cart cartVisibility={CartHideHandler}></Cart>}
      <Header cartVisibility={CartShowHandler}></Header>
      <main>
        <Meals></Meals>
      </main>
    </CartProvider>

  )
};

export default App;
