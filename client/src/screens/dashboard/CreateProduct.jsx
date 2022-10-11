import React from "react";
import Wrapper from "./Wrapper";
import ScreenHeader from "../../components/ScreenHeader";
import { Link } from "react-router-dom";

const CreateProduct = () => {
  return (
    <div>
      <Wrapper>
        <ScreenHeader>
          <Link to="/dashboard/products" className="btn-dark">
            <i className="bi bi-arrow-left-short"></i> proudcts list
          </Link>
        </ScreenHeader>
      </Wrapper>
    </div>
  );
};

export default CreateProduct;
