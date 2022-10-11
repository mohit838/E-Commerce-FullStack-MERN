import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Wrapper from "./Wrapper";
import ScreenHeader from "../../components/ScreenHeader";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useCreateCatMutation } from "../../store/services/categoryServices";
import { setSuccess } from "../../store/reducers/globalReducer";

const CreateCategories = () => {
  const [state, setState] = useState("");

  const [saveCat, data] = useCreateCatMutation();

  const errors = data?.error?.data?.errors ? data?.error?.data?.errors : [];

  const handleCreateCategory = (e) => {
    e.preventDefault();

    saveCat({ name: state });
  };

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (data?.isSuccess) {
      dispatch(setSuccess(data?.data?.message));
      navigate("/dashboard/categories");
    }
  }, [data?.isSuccess]);

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
                <p className="alert-danger">{error.msg}</p>
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
              value={data.isLoading ? "Loading..." : "Create Category"}
            />
          </div>
        </form>
      </Wrapper>
    </>
  );
};

export default CreateCategories;
