import React, { useState } from "react";
import { useEffect } from "react";

const cart = ({ cartValue, price, count }) => {
  const [cartInfo, setCartInfo] = useState(0);
  const [priceValue, setpriceValue] = useState(999);
  const [countValue, setcountValue] = useState(0);

  useEffect(() => {
    setpriceValue(cartValue);
    setCartInfo(cartValue);
    setcountValue(count);
  }, [cartValue]);

  return (
    <main className="cart flex flex-col gap-2 w-[300px] h-[auto] absolute top-[70px] bg-white md:right-10 right-3 z-10 ">
      <div className="title flex flex-col gap-2">
        <h1>Cart</h1>
        <div className="line w-[100%] h-[0.5px] bg-gray-500"></div>
      </div>
      {cartInfo === 0 ? (
        <div className="empty text-center">
          <p>Your cart is empty</p>
        </div>
      ) : (
        <div className="maindiv flex flex-col gap-2">
          <div className="item flex items-center gap-4">
            <div className="img">
              <img
                src="images/image-product-1-thumbnail.jpg"
                alt=""
                className="w-[50px]"
              />
            </div>
            <div className="info text-sm">
              <h1>Fall Limited Edition Sneakers</h1>
              <p>
                {priceValue} x {countValue} <span> = {cartInfo}</span>
              </p>
            </div>
            <img
              src="images/icon-delete.svg"
              alt=""
              className="cursor-pointer"
              onClick={() => {
                setCartInfo(0);
                alert("Item removed from cart");
              }}
            />
          </div>
          <div className="buttons w-[250px] m-auto overflow-hidden">
            <button
              className="bg-orange-500 text-white py-2 rounded-md w-[250px]"
              onClick={() => alert("Item added to checkout")}
            >
              Checkout
            </button>
          </div>
        </div>
      )}
    </main>
  );
};

export default cart;
