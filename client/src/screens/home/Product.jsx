import { Link, useParams } from "react-router-dom";
import { FiChevronRight } from "react-icons/fi";
import Nav from "../../components/home/Nav";
import ProductLoader from "../../components/home/ProductLoader";
import { useGetProductsQuery } from "../../store/services/productServices";

const Product = () => {
  const { name } = useParams();
  const { data, isFetching } = useGetProductsQuery(name);

  return (
    <>
      <Nav />
      <div className="my-container mt-24">
        {isFetching ? (
          <ProductLoader />
        ) : (
          <>
            <ul className="flex items-center">
              <li className="capitalize text-gray-600">
                <Link to="/">home</Link>
              </li>
              <FiChevronRight className="block mx-2" />
              <li className="capitalize text-gray-600">
                <Link to={`/cat-products/${data.category}`}>
                  {data.category}
                </Link>
              </li>
              <FiChevronRight className="block mx-2" />
              <li className="capitalize text-gray-600">
                <Link to={`/product/${data._id}`}>{data.title}</Link>
              </li>
            </ul>
          </>
        )}
      </div>
    </>
  );
};

export default Product;
