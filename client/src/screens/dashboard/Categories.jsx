import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import Pagination from "../../components/Pagination";
import ScreenHeader from "../../components/ScreenHeader";
import Spinner from "../../components/Spinner";
import { clearMessage, setSuccess } from "../../store/reducers/globalReducer";
import {
  useDeleteCategoryMutation,
  useGetQuery,
} from "../../store/services/categoryServices";
import Wrapper from "./Wrapper";

const Categories = () => {
  let { page } = useParams();

  if (!page) {
    page = 1;
  }

  const { success } = useSelector((state) => state.globalReducer);

  const dispatch = useDispatch();

  const { data = [], isFetching } = useGetQuery(page);

  const [removeCategory, response] = useDeleteCategoryMutation();

  const deleteCat = (id) => {
    if (window.confirm("Are you really want to delete the category?")) {
      removeCategory(id);
    }
  };

  useEffect(() => {
    if (response.isSuccess) {
      dispatch(setSuccess(response?.data?.message));
    }
  }, [response?.data?.message]);

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
                        Edit
                      </th>
                      <th className="p-3 uppercase text-sm font-medium text-gray-500">
                        Delete
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
                          <Link
                            to={`/dashboard/update-categories/${category._id}`}
                            className="btn btn-warning"
                          >
                            Edit
                          </Link>
                        </td>
                        <td className="p-3 capitalize text-sm font-normal text-gray-400">
                          <button
                            className="btn btn-danger"
                            onClick={() => deleteCat(category._id)}
                          >
                            Delete
                          </button>
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
