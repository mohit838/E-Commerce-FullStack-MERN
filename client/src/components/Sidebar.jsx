import React from "react";
import { Link } from "react-router-dom";

const Sidebar = ({ side, closeSideBar }) => {
  return (
    <div
      className={`fixed top-0 ${side} sm:left-0 w-64 h-screen bg-orange-500 z-10 transition-all`}
    >
      {/* Close Sidebar */}
      <i
        className="bi bi-x-lg absolute top-4 right-3 text-2xl text-black sm:hidden block cursor-pointer"
        onClick={closeSideBar}
      ></i>

      {/* Logo */}
      <div className=" text-white font-bold text-6xl text-center p-5 mb-4">
        gRio.
      </div>

      {/* Menu */}
      <ul className="my-5">
        {/* Products  */}
        <li className="my-1 px-4 py-3 text-white flex items-center cursor-pointer hover:bg-black ease-in duration-300">
          <i className="bi bi-card-checklist mr-2 inline-block text-lg"></i>
          <Link to="/dashboard/products" className="text-lg capitalize">
            Products
          </Link>
        </li>

        {/* Orders  */}
        <li className="my-1 px-4 py-3 text-white flex items-center cursor-pointer hover:bg-black ease-in duration-300">
          <i className="bi bi-bag mr-2 inline-block text-lg"></i>
          <Link to="/dashboard/products" className="text-lg capitalize">
            Orders
          </Link>
        </li>

        {/* Customers  */}
        <li className="my-1 px-4 py-3 text-white flex items-center cursor-pointer hover:bg-black ease-in duration-300">
          <i className="bi bi-people mr-2 inline-block text-lg"></i>
          <Link to="/dashboard/products" className="text-lg capitalize">
            Customers
          </Link>
        </li>

        {/* Categories  */}
        <li className="my-1 px-4 py-3 text-white flex items-center cursor-pointer hover:bg-black ease-in duration-300">
          <i className="bi bi-list-ul mr-2 inline-block text-lg"></i>
          <Link to="/dashboard/categories" className="text-lg capitalize">
            Categories
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
