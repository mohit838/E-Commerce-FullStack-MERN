import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Wrapper from "./Wrapper";
import ScreenHeader from "../../components/ScreenHeader";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useCreateCatMutation } from "../../store/services/categoryServices";
import { setSuccess } from "../../store/reducers/globalReducerCat";

const CreateCategories = () => {
  const [state, setState] = useState("");

  const [saveCat, response] = useCreateCatMutation();

  const errors = response?.error?.data?.errors
    ? response?.error?.data?.errors
    : [];

  const handleCreateCategory = (e) => {
    e.preventDefault();

    saveCat({ name: state });
  };

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (response.isSuccess) {
      dispatch(setSuccess(response?.data?.message));

      navigate("/dashboard/categories");
    }
  }, [response.isSuccess]);

  return (
    <>
      <Wrapper>
        <ScreenHeader>
          <Link to="/dashboard/categories" className="btn-dark">
            <i className="bi bi-arrow-left-short"></i> Categories List
          </Link>
        </ScreenHeader>

        {/* Categories Form */}
        <form className="w-full md:w-8/12" onSubmit={handleCreateCategory}>
          <h3 className="text-lg capitalize mb-3">Create Category</h3>

          {/* Show Errors */}
          {errors.length > 0 &&
            errors.map((error, key) => (
              <div key={key}>
                <p className="text-black p-2 mb-3 text-sm font-medium">
                  {error.msg}
                </p>
              </div>
            ))}

          {/* Form Inputs */}
          <div className="mb-3">
            <input
              type="text"
              name=""
              className="form-control"
              placeholder="Category Name..."
              value={state}
              onChange={(e) => {
                setState(e.target.value);
              }}
            />
          </div>

          {/* Button */}
          <div className="mb-3 mt-5">
            <input
              type="submit"
              name=""
              className="btn-submit"
              value={response.isLoading ? "Loading..." : "Create Category"}
            />
          </div>
        </form>
      </Wrapper>
    </>
  );
};

export default CreateCategories;
