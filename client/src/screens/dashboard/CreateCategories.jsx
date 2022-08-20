import React from "react";
import { Link } from "react-router-dom";
import Wrapper from "./Wrapper";
import ScreenHeader from "../../components/ScreenHeader";

const CreateCategories = () => {
  return (
    <>
      <Wrapper>
        <ScreenHeader>
          <Link to="/dashboard/categories" className="btn-dark">
            <i class="bi bi-arrow-left-short"></i> Categories List
          </Link>
        </ScreenHeader>
        {/* Categories Form */}
        <form className="w-full md:w-8/12">
          <h3 className="text-lg capitalize mb-3">Create Category</h3>

          {/* Form Inputs */}
          <div className="mb-3">
            <input
              type="text"
              name=""
              className="form-control"
              placeholder="Category Name..."
            />
          </div>

          {/* Button */}
          <div className="mb-3 mt-5">
            <input type="submit" name="" className="btn-submit" />
          </div>
        </form>
      </Wrapper>
    </>
  );
};

export default CreateCategories;
