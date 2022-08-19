import React from "react";
import { Link } from "react-router-dom";

const AdminNav = ({ openSideBar }) => {
  return (
    <nav className="fixed left-0 sm:left-64 right-0">
      <div className="bg-orange-600 w-full p-4 flex justify-between sm:justify-end items-center">
        <i
          class="bi bi-list text-white text-2xl cursor-pointer sm:hidden block"
          onClick={openSideBar}
        ></i>
        <Link
          to="/"
          className="py-4 px-4 bg-black text-white rounded-lg capitalize"
        >
          Logout
        </Link>
      </div>
    </nav>
  );
};

export default AdminNav;
