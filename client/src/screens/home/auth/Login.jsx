import React from "react";
import Nav from "./../../../components/home/Nav";
import Header from "./../../../components/home/Header";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <Nav />
      <div className="mt-[70px] pb-[80px]">
        <Header>Sign in</Header>

        <div className="flex flex-wrap justify-center ">
          <div className="w-full sm:w-8/12 md:w-6/12 lg:w-4/12 p-6">
            <form className="bg-white rounded-lg -mt-20 border border-gray-200 p-5 shadow-md">
              {/* <h1 className="heading mb-5">Sign In</h1> */}
              <div className="mb-4">
                <label htmlFor="email" className="form-label-two">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email..."
                  className="form-input"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="password" className="form-label-two">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password..."
                  className="form-input"
                />
              </div>
              <div className="mb-4">
                <input
                  type="submit"
                  value="Sign In"
                  className="btn btn-submit text-white w-full"
                />
              </div>
              <div>
                <p>
                  Don't have an account ?
                  <span className="capitalize font-medium text-base text-black">
                    <Link to="/register">register</Link>
                  </span>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
