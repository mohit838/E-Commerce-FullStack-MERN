import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="fixed top-0 left-0 w-64 h-screen bg-orange-500">
      {/* Logo */}
      <div className=" text-white font-bold text-6xl text-center p-5 mb-4">
        gRio.
      </div>

      {/* Menu */}
      <ul className="my-5">
        {/* Products  */}
        <li className="my-1 px-4 py-3 text-white flex items-center cursor-pointer hover:bg-black ease-in duration-300">
          <i class="bi bi-card-checklist mr-2 inline-block text-lg"></i>
          <Link to="/dashboard/products" className="text-lg capitalize">
            Products
          </Link>
        </li>

        {/* Orders  */}
        <li className="my-1 px-4 py-3 text-white flex items-center cursor-pointer hover:bg-black ease-in duration-300">
          <i class="bi bi-bag mr-2 inline-block text-lg"></i>
          <Link to="/dashboard/products" className="text-lg capitalize">
            Orders
          </Link>
        </li>

        {/* Customers  */}
        <li className="my-1 px-4 py-3 text-white flex items-center cursor-pointer hover:bg-black ease-in duration-300">
          <i class="bi bi-people mr-2 inline-block text-lg"></i>
          <Link to="/dashboard/products" className="text-lg capitalize">
            Customers
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
