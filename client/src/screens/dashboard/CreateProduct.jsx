import React from "react";
import { Link } from "react-router-dom";
// import toast, { Toaster } from "react-hot-toast";
import Wrapper from "./Wrapper";
import ScreenHeader from "../../components/ScreenHeader";

const CreateProduct = () => {
  return (
    <div>
      <Wrapper>
        <ScreenHeader>
          <Link to="/dashboard/products" className="btn-dark">
            <i className="bi bi-arrow-left-short"></i> proudcts list
          </Link>
          {/* <Toaster position="top-right" reverseOrder={true} /> */}
        </ScreenHeader>
      </Wrapper>
    </div>
  );
};

export default CreateProduct;
