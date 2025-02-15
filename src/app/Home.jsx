import { useDispatch, useSelector } from "react-redux";
import { fetchProduct, cartData } from "./feature/shopSlice";
import { useEffect } from "react";

function Home() {
  const dispatch = useDispatch();

  const productData = async () => {
    let res = await fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .catch((err) => console.log("error", err));
    dispatch(fetchProduct(res));
  };

  useEffect(() => {
    productData();
  }, []);

  const handleAddToCart = (product) => {
    dispatch(cartData(product));
  };

  let data = useSelector((state) => state.data.data[0]);

  const renderStar = (rate) => {
    let stars = [];

    for (let i = 0; i < 5; i++) {
      stars.push(
        <svg
          key={i}
          className={`w-4 h-4 ${
            i < rate ? "text-yellow-300" : "text-gray-200 dark:text-gray-600"
          }`}
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 22 20"
        >
          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
        </svg>
      );
    }
    return stars;
  };

  return !data ? (
    <h3 className="text-center text-3xl mt-10 ">...Loading</h3>
  ) : (
    <div className="mx-auto w-4/5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-24">
      {data?.map((item) => (
        <div
          key={item.id}
          className="flex flex-col justify-between w-full h-full max-w-sm bg-white border border-gray-200 hover:shadow-2xl rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
        >
          <div className="flex justify-center p-8">
            <a href="#">
              <img
                className="rounded-t-lg h-48 object-contain"
                src={item.image}
                alt="product image"
              />
            </a>
          </div>
          <div className="px-5 pb-5 flex flex-col justify-between flex-grow">
            <a href="#">
              <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                {item.title}
              </h5>
            </a>
            <div className="flex items-center mt-2.5 mb-5">
              <div className="flex items-center space-x-1 rtl:space-x-reverse">
                {renderStar(Math.round(item.rating.rate))}
              </div>
              <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">
                {item.rating.rate}
              </span>
              <span className="text-xs text-gray-500 dark:text-gray-400 ms-2">
                ({item.rating.count} reviews)
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-3xl font-bold text-gray-900 dark:text-white">
                ${item.price}
              </span>
              <button
                href="#"
                onClick={() => handleAddToCart(item)}
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Add to cart
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Home;
