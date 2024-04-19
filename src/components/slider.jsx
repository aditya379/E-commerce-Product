import React, { useState } from "react";

const Slider = ({ onClose, images }) => {
  const [imgSrc, setImgSrc] = useState(images[0]);

  const imgEffect = (clickedImage) => {
    const clickedIndex = parseInt(clickedImage.dataset.index, 10);
    setImgSrc(images[clickedIndex]);
  };

  const leftSlide = () => {
    const index = images.indexOf(imgSrc);
    const newIndex = (index - 1 + images.length) % images.length;
    setImgSrc(images[newIndex]);
  };

  const rightSlide = () => {
    const index = images.indexOf(imgSrc);
    const newIndex = (index + 1) % images.length;
    setImgSrc(images[newIndex]);
  };

  return (
    <div className="images w-[100%] h-[100%] flex flex-col items-center justify-center fixed z-20 top-0 gap-5 ">
      <div className="close  h-12 md:ml-[400px] ml-[350px]">
        <img
          src="./images/icon-close.svg"
          alt="Close"
          className="close md:w-5 w-6 mt-5  cursor-pointer"
          onClick={onClose}
        />
        </div>
      <div className="mainimages md:p-0 p-2 flex items-center justify-between">
        <div className="left">
        <img
          src="./images/icon-previous.svg"
          alt=""
          className="w-[30px] h-[30px] cursor-pointer  bg-gray-200 p-2 rounded-full border-[2px] border-orange-600"
          onClick={leftSlide}
        />
        </div>
        <div className="main">
        <img
          src={imgSrc}
          alt="main"
          className="main w-[350px] rounded-lg m-auto cursor-pointer"
        />
        </div>
        <div className="right">
        <img
          src="./images/icon-next.svg"
          alt=""
          className="w-[30px] h-[30px] cursor-pointer  bg-gray-200 p-2 rounded-full border-[2px] border-orange-600"
          onClick={rightSlide}
        />
        </div>
      </div>
      <div className="smallimages justify-center flex gap-4">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`thumbnail${index + 1}`}
            className={`rounded-lg h-[70px] cursor-pointer changer ${
              img === imgSrc ? "active" : ""
            }`}
            onClick={(e) => imgEffect(e.target)}
            data-index={index}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
