import { useState } from "react";
import "./App.css";
import Cart from "./components/Cart/Cart";
import Heeader from "./components/Layout/Heeader";
import Meals from "./components/Meals/Meals";
import CartProvider from "./store/CartProvider";
function App() {
  const [showCart, setShowCart] = useState(false);
  const showCartHandle = () => {
    setShowCart(true);
  };
  const displayCartHandle = () => {
    setShowCart(false);
  };
  return (
    <>
    <CartProvider>
      {showCart && <Cart onmodal={displayCartHandle} />}
      <Heeader onOpenCart={showCartHandle} />
      <Meals />
     </CartProvider>
    </>
  );
}

export default App;
