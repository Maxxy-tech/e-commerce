import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Listing from "./components/Listing";
import Cart from "./components/Cart";

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  return (
    <>
      <Header />
      <Routes>
        <Route path="/listing" element={<Listing addToCart={addToCart} />} />
        <Route path="/cart" element={<Cart cartItems={cartItems} />} />
      </Routes>
    </>
  );
}

export default App;
