import React, { useEffect, useState } from "react";
import { useAuthLoginMutation } from "../../store/services/authService";
import { useDispatch } from "react-redux";
import { setAdminToken } from "../../store/reducers/authReducer";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const navigate = useNavigate();

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const [logIn, response] = useAuthLoginMutation();
  // console.log("My response -> ", response);

  const errors = response?.error?.data?.errors
    ? response?.error?.data?.errors
    : [];

  const handleOnChangeLogin = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    logIn(loginData);
  };

  const dispatch = useDispatch();

  useEffect(() => {
    if (response.isSuccess) {
      localStorage.setItem("admin-token", response?.data?.token);

      dispatch(setAdminToken(response?.data?.token));

      navigate("/dashboard/produucts");
    }
  }, [response.isSuccess]);

  return (
    <div className="bg-white h-screen flex justify-center items-center">
      <form
        onSubmit={handleLoginSubmit}
        className="bg-orange-500 p-4 rounded w-10/12 sm:w-8/12 md:w-6/12 lg:w-3/12"
      >
        <h3 className="mb-4 text-white capitalize font-semibold text-2xl">
          Dashboard Login
        </h3>

        {/* Show Errors */}
        {errors.length > 0 &&
          errors.map((error, key) => (
            <div key={key}>
              <p className="bg-black text-white p-2 mb-3 rounded-sm text-sm font-medium">
                {error.msg}
              </p>
            </div>
          ))}

        <div className="mb-4 mt-4">
          <input
            type="email"
            name="email"
            value={loginData.email}
            onChange={handleOnChangeLogin}
            className="w-full p-4 rounded outline-none text-black"
            placeholder="Enter email"
          />
        </div>
        <div className="mb-4">
          <input
            type="password"
            name="password"
            value={loginData.password}
            onChange={handleOnChangeLogin}
            className="w-full p-4 rounded outline-none text-black"
            placeholder="Enter password"
          />
        </div>
        <div className="mb-4">
          <input
            type="submit"
            className="w-full p-4 text-white bg-black rounded outline-none uppercase font-semibold cursor-pointer"
            value={response.isLoading ? "Loading..." : "Sign In"}
          />
        </div>
      </form>
    </div>
  );
};

export default AdminLogin;
