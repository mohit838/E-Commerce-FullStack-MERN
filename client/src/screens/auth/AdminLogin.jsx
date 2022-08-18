import React from "react";

const AdminLogin = () => {
  return (
    <div className="bg-white h-screen flex justify-center items-center">
      <form className="bg-orange-500 p-4 rounded w-10/12 sm:w-8/12 md:w-6/12 lg:w-3/12">
        <h3 className="mb-4 text-white capitalize font-semibold text-2xl">
          Dashboard Login
        </h3>
        <div className="mb-4">
          <input
            type="email"
            name=""
            className="w-full p-4 rounded outline-none text-black"
            placeholder="Enter email"
          />
        </div>
        <div className="mb-4">
          <input
            type="password"
            name=""
            className="w-full p-4 rounded outline-none text-black"
            placeholder="Enter password"
          />
        </div>
        <div className="mb-4">
          <input
            type="submit"
            className="w-full p-4 text-white bg-black rounded outline-none uppercase font-semibold cursor-pointer"
            value="Sign In &rarr;"
          />
        </div>
      </form>
    </div>
  );
};

export default AdminLogin;
