import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminLogin from "../screens/auth/AdminLogin";
import Products from "../screens/dashboard/Products";

const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="auth">
          <Route path="admin-login" element={<AdminLogin />} />
        </Route>

        <Route path="dashboard">
          <Route path="produucts" element={<Products />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;
