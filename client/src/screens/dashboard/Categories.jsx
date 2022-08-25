import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ScreenHeader from "../../components/ScreenHeader";
import Wrapper from "./Wrapper";

const Categories = () => {
  const { success } = useSelector((state) => state.globalReducerCat);

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
