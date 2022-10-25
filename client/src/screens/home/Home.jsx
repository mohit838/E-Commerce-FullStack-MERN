import React from "react";
import Categories from "../../components/home/Categories";
import Nav from "../../components/home/Nav";
import Slider from "../../components/home/Slider";
import { useRandomCategoriesQuery } from "../../store/services/categoryServices";
import HomeProduct from "./../../components/home/HomeProduct";

const Home = () => {
  const { data, isFetching } = useRandomCategoriesQuery();

  console.log(data);

  return (
    <>
      <Nav />
      <div className="mt-[70px]">
        <Slider></Slider>
      </div>
      <div className="my-container mt-10">
        <Categories />
        {!isFetching &&
          data?.categories?.length > 0 &&
          data?.categories.map((category) => (
            <HomeProduct category={category} key={category._id} />
          ))}
      </div>
    </>
  );
};
export default Home;
