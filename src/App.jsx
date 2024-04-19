// App.js
import React, { useState } from "react";
import Navbar from "./components/navbar";
import Product from "./components/product";
import Slider from "./components/slider";
import Cart from "./components/cart";
import "./App.css";
function App() {
  const [count, setcount] = useState(1);
  const [cartValue, setcartValue] = useState(0)
  const  [cartOpen, setCartOpen] = useState(false);

  const toggleCart = () => {
    setCartOpen(!cartOpen);
  }

  const minus = () => {
    if (count > 1) {
      setcount(count - 1);
    }
  };
  const plus = () => {
    setcount(count + 1);
  };

  const basePrice = 999;
  const baseDiscount = 1500;
  const totalPrice = basePrice + (count - 1) * 999;
  const totalDiscount = baseDiscount + (count - 1) * 1500;
  const formattedPrice = totalPrice.toLocaleString("en-IN", {
    style: "currency",
    currency: "INR",
  });
  const formattedDiscount = totalDiscount.toLocaleString("en-IN", {
    style: "currency",
    currency: "INR",
  });
  const price = count > 0 ? formattedPrice : `₹${basePrice}.00`;
  const discount = count > 0 ? formattedDiscount : `₹${baseDiscount}.00`;

  const CartAdd = () => {
    const numericPrice = 999;
    const total = numericPrice * count;
    setcartValue(total);
  };

  return (
    <>
      <Navbar toggleCart={toggleCart} />
      <Product
        Slider={Slider}
        count={count}
        minus={minus}
        plus={plus}
        price={price}
        discount={discount}
        CartAdd={CartAdd}
      />
      {cartOpen &&<Cart cartValue={cartValue} price={price} count={count}/>}
    </>
  );
}

export default App;
