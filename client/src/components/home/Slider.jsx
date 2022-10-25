import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import { useRandomCategoriesQuery } from "../../store/services/categoryServices";
import Spinner from "./../Spinner";
import { Link } from "react-router-dom";

const Slider = () => {
  const { data, isFetching } = useRandomCategoriesQuery();

  return isFetching ? (
    <div className="my-container h-[70vh] flex items-center justify-center">
      <Spinner />
    </div>
  ) : (
    <Swiper
      pagination={{
        dynamicBullets: true,
      }}
      modules={[Pagination]}
      className="mySwiper"
    >
      {data?.categories.length > 0 &&
        data?.categories.map((cat, index) => (
          <SwiperSlide className="slide" key={cat._id}>
            <div className={`slide-img`}>
              <img
                src={`./images/slider/${index + 1}.jpg`}
                className="w-full h-full object-cover"
                alt=""
              />
            </div>
            <div className="absolute inset-0 w-full h-full bg-black/50">
              <div className="my-container h-[70vh] flex flex-col items-center justify-center">
                <h1 className="text-white text-xl font-medium capitalize">
                  {cat.name}
                </h1>
                <div className="mt-10">
                  <Link
                    to={`/products/${cat.name}`}
                    className="btn btn-submit text-sm text-white"
                  >
                    browse collections
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
    </Swiper>
  );
};

export default Slider;
