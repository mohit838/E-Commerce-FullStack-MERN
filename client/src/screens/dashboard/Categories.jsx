import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import Pagination from "../../components/Pagination";
import ScreenHeader from "../../components/ScreenHeader";
import Spinner from "../../components/Spinner";
import { clearMessage } from "../../store/reducers/globalReducer";
import { useGetQuery } from "../../store/services/categoryServices";
import Wrapper from "./Wrapper";

const Categories = () => {
  let { page } = useParams();

  if (!page) {
    page = 1;
  }

  const { success } = useSelector((state) => state.globalReducer);

  const dispatch = useDispatch();

  const { data = [], isLoading: isFetching } = useGetQuery(page ? page : 1);

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
        {success && <div className="alert-success">{success}</div>}
        {!isFetching ? (
          data?.categories?.length > 0 && (
            <>
              <div>
                <table className="w-full bg-gray-900 rounded-md">
                  <thead>
                    <tr className="border-b border-gray-800 text-left">
                      <th className="p-3 uppercase text-sm font-medium text-gray-500">
                        name
                      </th>
                      <th className="p-3 uppercase text-sm font-medium text-gray-500">
                        edit
                      </th>
                      <th className="p-3 uppercase text-sm font-medium text-gray-500">
                        delete
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {data?.categories?.map((category) => (
                      <tr key={category._id} className="odd:bg-gray-800">
                        <td className="p-3 capitalize text-sm font-normal text-gray-400">
                          {category.name}
                        </td>
                        <td className="p-3 capitalize text-sm font-normal text-gray-400">
                          edit
                        </td>
                        <td className="p-3 capitalize text-sm font-normal text-gray-400">
                          <button className="btn btn-danger">delete</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <Pagination
                page={parseInt(page)}
                count={data.count}
                perPage={data.perPage}
                path="dashboard/categories"
              />
            </>
          )
        ) : (
          <Spinner />
        )}
      </Wrapper>
    </>
  );
};

export default Categories;
