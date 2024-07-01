import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  const cartItems = useSelector((state) => state.data.cartData);

  useEffect(() => {
    setCartCount(cartItems.length);
  }, [cartItems]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-gray-800 text-white top-0 fixed w-full ">
      <div className="container mx-auto flex justify-between items-center p-4">
        <Link to={"/"}>
          {" "}
          <div className="text-xl font-bold">ShopZy</div>
        </Link>

        <div className="hidden md:flex space-x-4">
          <Link to={"/"} className="hover:text-gray-400">
            Home
          </Link>
          <a href="#" className="hover:text-gray-400">
            About
          </a>
          <a href="#" className="hover:text-gray-400">
            Services
          </a>
        </div>
        <div className="hidden md:flex">
          <Link to={"/cart"} className="hover:text-gray-400">
            <FontAwesomeIcon icon={faShoppingCart} />
            <div className="bg-white text-black w-4 h-4 rounded-full flex items-center justify-center absolute top-2 ml-4 text-xs">
              {cartCount}
            </div>
          </Link>
        </div>
        <div className="md:hidden">
          <Link
            to={"/cart"}
            className="hover:text-gray-400 mr-5 relative bottom-1 "
          >
            <FontAwesomeIcon icon={faShoppingCart} />
            <div className="bg-white text-black w-4 h-4 rounded-full flex items-center justify-center absolute -top-2 ml-4 text-xs">
              {cartCount}
            </div>
          </Link>
          <button onClick={toggleMenu}>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <a href="#" className="block py-2 px-4 text-sm hover:bg-gray-700">
            Home
          </a>
          <a href="#" className="block py-2 px-4 text-sm hover:bg-gray-700">
            About
          </a>
          <a href="#" className="block py-2 px-4 text-sm hover:bg-gray-700">
            Services
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
