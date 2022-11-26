import React from "react";
import DetailsImage from "./DetailsImage";

const DetailsCard = ({ product }) => {
  return (
    <>
      <div className="flex flex-wrap -mx-5">
        <div className="w-full order-2 md:order-1 md:w-6/12 p-5">
          <div className="flex flex-wrap -mx-1">
            <DetailsImage image={product.image1} />
            <DetailsImage image={product.image2} />
            <DetailsImage image={product.image3} />
          </div>
        </div>
        <div className="w-full order-1 md:order-2 md:w-6/12 p-5">
          <h1 className="text-2xl font-bold text-gray-900 capitalize">
            {product.title}
          </h1>
          <div className="flex justify-between my-5">
            <span className="text-2xl font-bold text-gray-900"> Discount</span>
            <span className="text-xl line-through text-gray-500">
              Product Price
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailsCard;
