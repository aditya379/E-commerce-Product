import React, { useState } from "react";
import Cart from "./cart";

const Product = ({ Slider, count, minus, plus, price, discount, CartAdd }) => {

  const handleCheckout = () => {
    CartAdd();
  }

  const [sliders, setSliders] = useState(false);
  const images = [
    "/images/image-product-1.jpg",
    "/images/image-product-2.jpg",
    "/images/image-product-3.jpg",
    "/images/image-product-4.jpg",
  ];
  const [img, setImg] = useState(images[0]);

  const imgEffect = (e) => {
    const clickedImage = e.target;
    let imgElements = document.querySelectorAll(".changer");
    imgElements.forEach((element) => {
      if (element === clickedImage) {
        element.classList.add("active");
        setImg(clickedImage.src);
      } else {
        element.classList.remove("active");
      }
    });
  };

  const showSlider = () => {
    setSliders(true);
    const overlay = document.querySelector(".overlay");
    overlay.style.display = "block";
  };

  const closeSlider = () => {
    setSliders(false);
    const overlay = document.querySelector(".overlay");
    overlay.style.display = "none";
  };

  return (
    <main className="product width-[100%] mt-6 relative z-0">
      <div className="overlay"></div>
      {sliders && <Slider onClose={closeSlider} images={images} />}
      <div className="submain flex md:flex-row flex-col items-center justify-between w-[90%] m-auto">
        <div className="images md:w-1/2 flex flex-col gap-5">
          <div className="mainimages w-[100%]">
            <img
              src={img}
              alt="main"
              className="main md:w-[350px] w-[320px] transition-all 1s ease-in-out rounded-lg m-auto cursor-pointer"
              onClick={showSlider}
            />
          </div>
          <div className="smallimages justify-center flex gap-4">
            {images.map((imgSrc, index) => (
              <img
                key={index}
                src={imgSrc}
                alt={`thumbnail${index + 1}`}
                className={`rounded-lg md:h-[75px] h-[65px] cursor-pointer changer ${
                  img === imgSrc ? "active" : ""
                }`}
                onClick={imgEffect}
              />
            ))}
          </div>
        </div>
        <div className="info md:w-1/2 mt-10 md:mt-10 m-auto">
          <div className="details md:w-[80%] w-[100%] m-auto flex flex-col gap-3">
            <h2 className="brand text-lg font-semibold text-orange-500 md:text-left text-center">
              SNEAKER COMPANY
            </h2>
            <h1 className="title text-4xl font-bold md:text-left text-center">
              Fall Limited Edition Sneakers
            </h1>
            <p className="text-gray-500 md:text-left text-center">
              These low price sneakers are your perfect casual wear companion.
              Featuring a durable rubber outer sole, they’ll withstand
              everything the weather can offer.
            </p>
            <div className="price w-[100%] flex gap-4 md:justify-start justify-center ">
              <p>{price}</p>
              <p className="off bg-orange-100 text-orange-500 rounded-md text-center text-sm w-10">25%</p>
            </div>
            <p className="discount text-gray-500 line-through md:text-left text-center">
              {discount}
            </p>
            <div className="count flex md:flex-row flex-col items-center gap-5 justify-center md:justify-start">
              <div className="prices flex items-center justify-center md:justify-start ">
                <button className="text-3xl bg-gray-100 w-10 text-orange-500 " onClick={minus}>
                  -
                </button>
                <p className="text-sm h-9 border-[0.5px] border-gray-300 flex items-center justify-center bg-gray-100 w-10">{count}</p>
                <button className="text-3xl bg-gray-100 text-orange-500 w-10" onClick={plus}>
                  +
                </button>
              </div>
              <button
                className="btn flex gap-2 items-center justify-center bg-orange-500 text-white py-2 px-8 rounded-md"
                onClick={handleCheckout}>
                <img src="/images/icon-cart.svg" alt="Cart" id="cartfilter" />
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Product;
