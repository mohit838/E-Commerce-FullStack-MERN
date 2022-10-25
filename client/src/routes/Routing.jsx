import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminLogin from "../screens/auth/AdminLogin";
import Categories from "../screens/dashboard/Categories";
import CreateCategories from "../screens/dashboard/CreateCategories";
import CreateProduct from "../screens/dashboard/CreateProduct";
import EditProducts from "../screens/dashboard/EditProducts";
import Products from "../screens/dashboard/Products";
import UpdateCategory from "../screens/dashboard/UpdateCategory";
import Home from "../screens/home/Home";
import Private from "./Private";
import Public from "./Public";
import Login from "./../screens/home/auth/Login";
import Register from "../screens/home/auth/Register";
import Dashboard from "../screens/users/Dashboard";

const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="user" element={<Dashboard />} />

        <Route path="auth">
          <Route
            path="admin-login"
            element={
              <Public>
                <AdminLogin />
              </Public>
            }
          />
        </Route>

        <Route path="dashboard">
          <Route
            path="products"
            element={
              <Private>
                <Products />
              </Private>
            }
          />

          <Route
            path="products/:page"
            element={
              <Private>
                <Products />
              </Private>
            }
          />
          <Route
            path="edit-product/:id"
            element={
              <Private>
                <EditProducts />
              </Private>
            }
          />

          <Route
            path="categories"
            element={
              <Private>
                <Categories />
              </Private>
            }
          />
          <Route
            path="categories/:page"
            element={
              <Private>
                <Categories />
              </Private>
            }
          />
          <Route
            path="create-categories"
            element={
              <Private>
                <CreateCategories />
              </Private>
            }
          />

          {/* Update Categories */}
          <Route
            path="update-categories/:id"
            element={
              <Private>
                <UpdateCategory />
              </Private>
            }
          />

          <Route
            path="create-product"
            element={
              <Private>
                <CreateProduct />
              </Private>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;
