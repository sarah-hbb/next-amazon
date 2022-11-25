import React, { useState } from "react";
import Image from "next/image";
import { AiFillStar } from "react-icons/ai";

const Product = ({ id, title, price, description, category, image }) => {
  const MAX_RATING = 5;
  const MIN_RATING = 1;
  
  const [rating] = useState(() => {
    const MAX_RATING = 5;
    const MIN_RATING = 1;
    return (
      Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING
    );
  });

  const [hasPrime] = useState(() => {
    return (Math.random() < 0.5);
  });
  return (
    <div className=" relative flex flex-col  m-5 bg-white z-30 p-10 ">
      <p className="absolute top-2 right-2 italic text-gray-400">{category}</p>

      <Image
        src={image}
        alt="Picture of the author"
        width={200}
        height={200}
        className="self-center"
      />

      <h4 className="my-3">{title}</h4>

      <div className="flex text-yellow-500">
        {Array(rating)
          .fill()
          .map((_, i) => (
            <AiFillStar className="w-4 h-5" key={i} />
          ))}
      </div>

      <p className="text-xs my-2 line-clamp-2">{description}</p>

      <h6>$ {price}</h6>

      {hasPrime && (
        <div className="flex items-center space-x-2 ">
          <img className="w-12 " src="https://links.papareact.com/fdw" alt="" />
          <p className="text-xs text-gray-500">Free Delivery</p>
        </div>
      )}

      <button className="mt-auto button"> Add To Basket</button>
    </div>
  );
};

export default Product;
