import React, { useState } from "react";
import { Link } from "react-router-dom";
import Wrapper from "./Wrapper";
import ScreenHeader from "../../components/ScreenHeader";
import { useAllCategoriesQuery } from "../../store/services/categoryServices";
import Spinner from "../../components/Spinner";
import { TwitterPicker } from "react-color";

const CreateProduct = () => {
  const { data = [], isFetching } = useAllCategoriesQuery();
  const [state, setState] = useState({
    title: "",
    price: 0,
    discount: 0,
    stock: 0,
    category: "",
    colors: [],
  });

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

  return (
    <div>
      <Wrapper>
        <ScreenHeader>
          <Link to="/dashboard/products" className="btn-dark">
            <i className="bi bi-arrow-left-short"></i> proudcts list
          </Link>
          <div className="flex flex-wrap -mx-3">
            <form className="w-full xl:w-8/12 p-3">
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
              </div>
            </form>
          </div>
        </ScreenHeader>
      </Wrapper>
    </div>
  );
};

export default CreateProduct;
