import React from "react";
import Nav from "../../components/home/Nav";
import Slider from "../../components/home/Slider";

const Home = () => {
  return (
    <>
      <Nav />
      <div className="mt-[70px]">
        <Slider></Slider>
      </div>
    </>
  );
};
export default Home;
