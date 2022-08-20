import React from "react";
import { Link } from "react-router-dom";
import ScreenHeader from "../../components/ScreenHeader";
import Wrapper from "./Wrapper";

const Categories = () => {
  return (
    <>
      <Wrapper>
        <ScreenHeader>
          <Link to="/dashboard/create-categories" className="btn-dark">
            Add Categories <i className="bi bi-plus-lg"></i>
          </Link>
        </ScreenHeader>
      </Wrapper>
    </>
  );
};

export default Categories;
