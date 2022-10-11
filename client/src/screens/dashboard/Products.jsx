import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import ScreenHeader from "../../components/ScreenHeader";
import Wrapper from "./Wrapper";
import { useDispatch, useSelector } from "react-redux";
import { clearMessage } from "../../store/reducers/globalReducer";

const Products = () => {
  const { success } = useSelector((state) => state.globalReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    if (success) {
      toast.success(success);
    }
    return () => {
      dispatch(clearMessage());
    };
  }, []);

  return (
    <>
      <Wrapper>
        <ScreenHeader>
          <Link to="/dashboard/create-product" className="btn-dark">
            create product
          </Link>
          <Toaster position="top-right" />
        </ScreenHeader>
      </Wrapper>
    </>
  );
};

export default Products;
