import React from "react";
import Nav from "./../../../components/home/Nav";
import Header from "./../../../components/home/Header";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <>
      <Nav />
      <div className="mt-[70px] pb-[80px]">
        <Header>Register</Header>

        <div className="flex flex-wrap justify-center ">
          <motion.div
            initial={{ opacity: 0, x: "-100vw" }}
            animate={{ opacity: 1, x: 0 }}
            className="w-full sm:w-10/12 md:w-8/12 lg:w-6/12 xl:w-4/12 p-6"
          >
            <form className="bg-white rounded-lg -mt-20 border border-gray-200 p-10 shadow-md">
              {/* <h1 className="heading mb-5">Register</h1> */}
              <div className="mb-4">
                <label htmlFor="email" className="form-label-two">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Name..."
                  className="form-input"
                />
              </div>

              <div className="mb-4">
                <input
                  type="submit"
                  value="Sign Up"
                  className="btn btn-submit text-white w-full "
                />
              </div>
              <div>
                <p>
                  Have any account ?
                  <span className="capitalize font-medium text-base text-black">
                    <Link to="/login">Login</Link>
                  </span>
                </p>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Register;
