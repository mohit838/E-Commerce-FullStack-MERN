import React from "react";
import Nav from "./../../components/home/Nav";
import Header from "./../../components/home/Header";
import { useParams } from "react-router-dom";

const CatProducts = () => {
  const { name } = useParams();

  return (
    <>
      <Nav />
      <div className="mt-[70px]">
        <Header>#{name}</Header>
      </div>
    </>
  );
};

export default CatProducts;
