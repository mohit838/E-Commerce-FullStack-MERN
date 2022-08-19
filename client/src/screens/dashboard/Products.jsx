import React from "react";
import AdminNav from "../../components/AdminNav";
import Sidebar from "../../components/Sidebar";

const Products = () => {
  return (
    <div>
      <Sidebar />
      <AdminNav />
      <section className="ml-64 bg-orange-700 min-h-screen p-10 pt-32 text-white">
        <div className="p-7 bg-orange-600 text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor libero
          adipisci, sit a officiis sed eius quo exercitationem sunt aliquid et
          eaque, soluta ullam. Doloremque dolore totam ullam molestias
          voluptatem adipisci repellendus consectetur. Alias nisi earum libero
          perferendis. Incidunt ipsum voluptatum voluptatem atque alias,
          dignissimos quaerat velit enim nostrum perspiciatis laborum et
          provident illo itaque cum magnam, adipisci corporis esse voluptates
          nisi consequuntur.
        </div>
      </section>
    </div>
  );
};

export default Products;
