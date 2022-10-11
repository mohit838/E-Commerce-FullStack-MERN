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
              </div>
            </form>
          </div>
        </ScreenHeader>
      </Wrapper>
    </div>
  );
};

export default CreateProduct;
