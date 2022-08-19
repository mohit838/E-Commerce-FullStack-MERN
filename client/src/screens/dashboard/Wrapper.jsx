import React from "react";
import { useState } from "react";
import AdminNav from "../../components/AdminNav";
import Sidebar from "../../components/Sidebar";

const Wrapper = ({ children }) => {
  const [side, setSide] = useState("-left-64");

  const openSideBar = () => {
    setSide("left-0");
  };

  const closeSideBar = () => {
    setSide("-left-64");
  };

  return (
    <>
      <Sidebar side={side} closeSideBar={closeSideBar} />
      <AdminNav openSideBar={openSideBar} />
      <section className="ml-0 sm:ml-64 bg-orange-700 min-h-screen p-10 pt-32 text-white">
        <div className="p-7 bg-orange-600 text-lg">{children}</div>
      </section>
    </>
  );
};

export default Wrapper;
