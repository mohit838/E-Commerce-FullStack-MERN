import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ScreenHeader from "../../components/ScreenHeader";
import { clearMessage } from "../../store/reducers/globalReducerCat";
import Wrapper from "./Wrapper";

const Categories = () => {
  const { success } = useSelector((state) => state.globalReducerCat);

  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      dispatch(clearMessage());
    };
  }, []);

  return (
    <>
      <Wrapper>
        <ScreenHeader>
          <Link to="/dashboard/create-categories" className="btn-dark">
            Add Categories <i className="bi bi-plus-lg"></i>
          </Link>
        </ScreenHeader>
        {success && <div className="">{success}</div>}
      </Wrapper>
    </>
  );
};

export default Categories;
