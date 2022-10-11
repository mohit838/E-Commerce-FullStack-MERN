import React from "react";
import { Link } from "react-router-dom";
// import toast, { Toaster } from "react-hot-toast";
import Wrapper from "./Wrapper";
import ScreenHeader from "../../components/ScreenHeader";
import Spinner from "../../components/Spinner";

const CreateProduct = () => {
  return (
    <div>
      <Wrapper>
        <ScreenHeader>
          <Link to="/dashboard/products" className="btn-dark">
            <i className="bi bi-arrow-left-short"></i> proudcts list
          </Link>
          {/* <Toaster position="top-right" reverseOrder={true} /> */}
          <div className="flex flex-wrap -mx-3">
            <form className="w-full xl:w-8/12 p-3">
              <div className="flex flex-wrap">
                <div className="w-full md:w-6/12 p-3">
                  <label htmlFor="title" className="label">
                    title
                  </label>
                  <input
                    type="text"
                    name="title"
                    className="form-control"
                    id="title"
                    placeholder="title..."
                  />
                </div>
                <div className="w-full md:w-6/12 p-3">
                  <label htmlFor="price" className="label">
                    price
                  </label>
                  <input
                    type="number"
                    name="price"
                    className="form-control"
                    id="price"
                    placeholder="price..."
                  />
                </div>
                <div className="w-full md:w-6/12 p-3">
                  <label htmlFor="discount" className="label">
                    discount
                  </label>
                  <input
                    type="number"
                    name="discount"
                    className="form-control"
                    id="discount"
                    placeholder="discount..."
                  />
                </div>
                <div className="w-full md:w-6/12 p-3">
                  <label htmlFor="stock" className="label">
                    stock
                  </label>
                  <input
                    type="number"
                    name="stock"
                    className="form-control"
                    id="stock"
                    placeholder="stock..."
                  />
                </div>
                <div className="w-full md:w-6/12 p-3">
                  <label htmlFor="categories" className="label">
                    categories
                  </label>

                  <Spinner />
                </div>
                <div className="w-full md:w-6/12 p-3">
                  <label htmlFor="colors" className="label">
                    choose colors
                  </label>
                </div>

                <div className="w-full p-3">
                  <label htmlFor="sizes" className="label">
                    choose sizes
                  </label>
                </div>
                <div className="w-full p-3">
                  <label htmlFor="image1" className="label">
                    Image 1
                  </label>
                  <input
                    type="file"
                    name="image1"
                    id="image1"
                    className="input-file"
                  />
                </div>

                <div className="w-full p-3">
                  <label htmlFor="image2" className="label">
                    Image 2
                  </label>
                  <input
                    type="file"
                    name="image2"
                    id="image2"
                    className="input-file"
                  />
                </div>

                <div className="w-full p-3">
                  <label htmlFor="image3" className="label">
                    Image 3
                  </label>
                  <input
                    type="file"
                    name="image3"
                    id="image3"
                    className="input-file"
                  />
                </div>
                <div className="w-full p-3">
                  <label htmlFor="description" className="label">
                    Description
                  </label>
                </div>
                <div className="w-full p-3">
                  <input type="submit" className="btn btn-indigo" />
                </div>
              </div>
            </form>
          </div>
        </ScreenHeader>
      </Wrapper>
    </div>
  );
};

export default CreateProduct;
