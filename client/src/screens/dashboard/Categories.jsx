import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import ScreenHeader from "../../components/ScreenHeader";
import { clearMessage } from "../../store/reducers/globalReducerCat";
import { useGetQuery } from "../../store/services/categoryServices";
import Wrapper from "./Wrapper";

const Categories = () => {
  const { page } = useParams();

  const { success } = useSelector((state) => state.globalReducerCat);

  const dispatch = useDispatch();

  const { data = [], isLoading } = useGetQuery(page ? page : 1);

  console.log(data, isLoading);

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
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis,
          provident neque impedit asperiores magni animi totam quidem ea
          facilis? Dicta sequi hic quia? Quae quibusdam accusantium ad earum
          rerum nostrum.
        </div>
      </Wrapper>
    </>
  );
};

export default Categories;
