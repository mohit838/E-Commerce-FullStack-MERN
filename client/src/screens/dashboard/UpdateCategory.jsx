import React, { useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Wrapper from "./Wrapper";
import ScreenHeader from "../../components/ScreenHeader";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setSuccess } from "../../store/reducers/globalReducer";
import {
  useFetchCategoryQuery,
  useUpdateCategoryMutation,
} from "../../store/services/categoryServices";
import Spinner from "../../components/Spinner";

const UpdateCategory = () => {
  const [state, setState] = useState("");

  const { id } = useParams();
  const { data, isFetching } = useFetchCategoryQuery(id);

  const [saveCat, response] = useUpdateCategoryMutation();

  const errors = response?.error?.data?.errors
    ? response?.error?.data?.errors
    : [];

  const handleCategoryUdpate = (e) => {
    e.preventDefault();

    saveCat({ name: state, id });
  };

  useEffect(() => {
    data?.category && setState(data?.category?.name);
  }, [data?.category]);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (response?.isSuccess) {
      dispatch(setSuccess(response?.data?.message));
      navigate("/dashboard/categories");
    }
  }, [response?.isSuccess]);

  return (
    <>
      <Wrapper>
        <ScreenHeader>
          <Link to="/dashboard/categories" className="btn-dark">
            <i className="bi bi-arrow-left-short"></i> Categories List
          </Link>
        </ScreenHeader>

        {!isFetching ? (
          <form className="w-full md:w-8/12" onSubmit={handleCategoryUdpate}>
            <h3 className="text-lg capitalize mb-3">Update category</h3>
            {errors.length > 0 &&
              errors.map((error, key) => (
                <p className="alert-danger" key={key}>
                  {error.msg}
                </p>
              ))}
            <div className="mb-3">
              <input
                type="text"
                name=""
                className="form-control"
                placeholder="Category Name..."
                value={state}
                onChange={(e) => setState(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <input type="submit" value="Update" className="btn btn-submit" />
            </div>
          </form>
        ) : (
          <Spinner />
        )}
      </Wrapper>
    </>
  );
};

export default UpdateCategory;
