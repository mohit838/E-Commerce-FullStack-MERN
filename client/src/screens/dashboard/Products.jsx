import React from "react";
import { Link } from "react-router-dom";
import ScreenHeader from "../../components/ScreenHeader";
import Wrapper from "./Wrapper";

const Products = () => {
  return (
    <>
      <Wrapper>
        <ScreenHeader>
          <Link to="/dashboard/create-product" className="btn-dark">
            create product
          </Link>
        </ScreenHeader>
      </Wrapper>
    </>
  );
};

export default Products;
