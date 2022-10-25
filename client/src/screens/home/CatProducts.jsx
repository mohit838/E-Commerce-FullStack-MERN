import React from "react";
import Nav from "./../../components/home/Nav";
import Header from "./../../components/home/Header";
import { useParams } from "react-router-dom";
import { useCatProductsQuery } from "../../store/services/homeProducts";
import Pagination from "./../../components/Pagination";
import ProductSkeleton from "../../components/home/ProductSkeleton";
import ProductCard from "../../components/home/ProductCard";

const CatProducts = () => {
  const { name, page = 1 } = useParams();

  const { data, isFetching } = useCatProductsQuery({
    name,
    page: parseInt(page),
  });

  return (
    <>
      <Nav />
      <div className="mt-[70px]">
        <Header>#{name}</Header>
      </div>
      <div className="my-container my-10">
        {isFetching ? (
          <ProductSkeleton />
        ) : data.count > 0 ? (
          <>
            <p className="text-base font-medium text-gray-700">
              {data.count} products found in #{name} category
            </p>
            <div className="flex flex-wrap -mx-5">
              {data.products.map((product) => {
                return <ProductCard product={product} key={product._id} />;
              })}
            </div>
            <Pagination
              page={parseInt(page)}
              perPage={data.perPage}
              count={data.count}
              path={`cat-products/${name}`}
              theme="light"
            />
          </>
        ) : (
          <p className="alert-danger">No products found in #{name} category</p>
        )}
      </div>
    </>
  );
};

export default CatProducts;
