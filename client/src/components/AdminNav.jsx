import React from "react";
import { Link } from "react-router-dom";

const AdminNav = () => {
  return (
    <nav className="fixed left-64 right-0">
      <div className="bg-orange-600 w-full p-4 flex justify-end">
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
