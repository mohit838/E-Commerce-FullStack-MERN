import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import Colors from "../../components/Colors";
import ScreenHeader from "../../components/ScreenHeader";
import SizesList from "../../components/SizeList";
import Spinner from "../../components/Spinner";
import { setSuccess } from "../../store/reducers/globalReducer";
import { useAllCategoriesQuery } from "../../store/services/categoryServices";
import {
  useGetProductQuery,
  useUpdateProductMutation,
} from "../../store/services/productServices";
import Wrapper from "./Wrapper";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { TwitterPicker } from "react-color";
import toast, { Toaster } from "react-hot-toast";
import { v4 as uuidv4 } from "uuid";

const EditProducts = () => {
  const { id } = useParams();

  const { data: product, isFetching: fetching } = useGetProductQuery(id);

  //   console.log("data: ", product);
  const { data = [], isFetching } = useAllCategoriesQuery();

  const [value, setValue] = useState("");

  const [state, setState] = useState({
    title: "",
    price: 0,
    discount: 0,
    stock: 0,
    category: "",
    colors: [],
  });

  const [sizes] = useState([
    { name: "xsm" },
    { name: "sm" },
    { name: "md" },
    { name: "lg" },
    { name: "xl" },
    { name: "1 year" },
    { name: "2 years" },
    { name: "3 years" },
    { name: "4 years" },
    { name: "5 years" },
  ]);

  const [sizeList, setSizeList] = useState([]);

  const handleInput = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const saveColors = (color) => {
    const filtered = state.colors.filter((clr) => clr.color !== color.hex);
    setState({
      ...state,
      colors: [...filtered, { color: color.hex, id: uuidv4() }],
    });
  };

  const deleteColor = (color) => {
    const filtered = state.colors.filter((clr) => clr.color !== color.color);
    setState({ ...state, colors: filtered });
  };

  const chooseSize = (sizeObject) => {
    const filtered = sizeList.filter((size) => size.name !== sizeObject.name);
    setSizeList([...filtered, sizeObject]);
  };

  const deleteSize = (name) => {
    const filtered = sizeList.filter((size) => size.name !== name);
    setSizeList(filtered);
  };
  const [updateProduct, response] = useUpdateProductMutation();

  //   console.log("Your response", response);

  const createPro = (e) => {
    e.preventDefault();
    updateProduct(state);
  };

  useEffect(() => {
    if (!response.isSuccess) {
      response?.error?.data?.errors.map((err) => {
        toast.error(err.msg);
      });
    }
  }, [response?.error?.data?.errors]);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (response?.isSuccess) {
      dispatch(setSuccess(response?.data?.msg));
      navigate("/dashboard/products");
    }
  }, [response?.isSuccess]);

  useEffect(() => {
    setState({ ...state, description: value });
  }, [value]);

  useEffect(() => {
    if (!fetching) {
      setState(product);
      setSizeList(product.sizes);
      setValue(product.description);
    }
  }, [product]);

  //   console.log("your state: ", state);

  return (
    <Wrapper>
      <ScreenHeader>
        <Link to="/dashboard/products" className="btn-dark">
          <i className="bi bi-arrow-left-short"></i> proudcts list
        </Link>
      </ScreenHeader>
      <Toaster position="top-right" reverseOrder={true} />
      {!fetching ? (
        <div className="flex flex-wrap -mx-3">
          <form className="w-full xl:w-8/12 p-3" onSubmit={createPro}>
            <h3 className="pl-3 capitalize text-lg font-medium text-gray-400">
              edit product
            </h3>
            <div className="flex flex-wrap">
              <div className="w-full md:w-6/12 p-3">
                <label htmlFor="title" className="label">
                  title
                </label>
                <input
                  type="text"
                  name="title"
                  className="form-control"
                  id="title"
                  placeholder="title..."
                  onChange={handleInput}
                  value={state.title}
                />
              </div>
              <div className="w-full md:w-6/12 p-3">
                <label htmlFor="price" className="label">
                  price
                </label>
                <input
                  type="number"
                  name="price"
                  className="form-control"
                  id="price"
                  placeholder="price..."
                  onChange={handleInput}
                  value={state.price}
                />
              </div>
              <div className="w-full md:w-6/12 p-3">
                <label htmlFor="discount" className="label">
                  discount
                </label>
                <input
                  type="number"
                  name="discount"
                  className="form-control"
                  id="discount"
                  placeholder="discount..."
                  onChange={handleInput}
                  value={state.discount}
                />
              </div>
              <div className="w-full md:w-6/12 p-3">
                <label htmlFor="stock" className="label">
                  stock
                </label>
                <input
                  type="number"
                  name="stock"
                  className="form-control"
                  id="stock"
                  placeholder="stock..."
                  onChange={handleInput}
                  value={state.stock}
                />
              </div>
              <div className="w-full md:w-6/12 p-3">
                <label htmlFor="categories" className="label">
                  categories
                </label>
                {!isFetching ? (
                  data?.categories?.length > 0 && (
                    <select
                      name="category"
                      id="categories"
                      className="form-control"
                      onChange={handleInput}
                      value={state.category}
                    >
                      <option value="">Choose category</option>
                      {data?.categories?.map((category) => (
                        <option value={category.name} key={category._id}>
                          {category.name}
                        </option>
                      ))}
                    </select>
                  )
                ) : (
                  <Spinner />
                )}
              </div>
              <div className="w-full md:w-6/12 p-3">
                <label htmlFor="colors" className="label">
                  choose colors
                </label>
                <TwitterPicker onChangeComplete={saveColors} />
              </div>

              <div className="w-full p-3">
                <label htmlFor="sizes" className="label">
                  choose sizes
                </label>
                {sizes.length > 0 && (
                  <div className="flex flex-wrap -mx-3">
                    {sizes.map((size) => (
                      <div
                        key={size.name}
                        className="size"
                        onClick={() => chooseSize(size)}
                      >
                        {size.name}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="w-full p-3">
                <label htmlFor="description" className="label">
                  Description
                </label>
                <ReactQuill
                  theme="snow"
                  id="description"
                  value={value}
                  onChange={setValue}
                  placeholder="Description..."
                />
              </div>
              <div className="w-full p-3">
                <input
                  type="submit"
                  value={response.isLoading ? "loading..." : "save product"}
                  disabled={response.isLoading ? true : false}
                  className="btn btn-submit"
                />
              </div>
            </div>
          </form>
          <div className="w-full xl:w-4/12 p-3">
            <Colors colors={state.colors} deleteColor={deleteColor} />
            <SizesList list={sizeList} deleteSize={deleteSize} />
          </div>
        </div>
      ) : (
        <Spinner />
      )}
    </Wrapper>
  );
};

export default EditProducts;
