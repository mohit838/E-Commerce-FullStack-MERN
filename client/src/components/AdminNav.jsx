import React from "react";
import { logout } from "../store/reducers/authReducer";
import { useDispatch } from "react-redux";

const AdminNav = ({ openSideBar }) => {
  const dispatch = useDispatch();

  const adminLogout = () => {
    dispatch(logout("admin-token"));
  };

  return (
    <nav className="fixed left-0 sm:left-64 right-0">
      <div className="bg-orange-600 w-full p-4 flex justify-between sm:justify-end items-center">
        <i
          class="bi bi-list text-white text-2xl cursor-pointer sm:hidden block"
          onClick={openSideBar}
        ></i>
        <button
          to="/"
          className="py-4 px-4 bg-black text-white rounded-lg capitalize"
          onClick={adminLogout}
        >
          Logout
        </button>
      </div>
    </nav>
  );
};

export default AdminNav;
