import { useDispatch, useSelector } from "react-redux";
import {
  cartTotalPrice,
  decreaseQuantity,
  deleteProducts,
  increaseQuantity,
} from "./feature/shopSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";

function Cart() {
  const dispatch = useDispatch();
  const { cartData, totalPrice } = useSelector((state) => state.data);

  useEffect(()=>{
    dispatch(cartTotalPrice())
  },[])

  return (
    <div className="bg-gray-100 min-h-screen py-8 mt-10">
      {cartData.length <= 0 ? (
        <p className="font-bold text-3xl text-center mt-52">
          No items available
        </p>
      ) : (
        <div className="container mx-auto px-4">
          <h1 className="text-2xl font-semibold mb-4 text-center md:text-left">Shopping Cart</h1>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="md:w-3/4 w-full">
              <div className="bg-white rounded-lg shadow-md p-6 mb-4">
                <table className="w-full hidden md:table">
                  <thead>
                    <tr>
                      <th className="text-left font-semibold">Product</th>
                      <th className="text-left font-semibold">Price</th>
                      <th className="text-left font-semibold">Quantity</th>
                      <th className="text-left font-semibold">Total</th>
                      <th className="text-left font-semibold"></th>
                    </tr>
                  </thead>
                  {cartData?.map(({ product, quantity }) => (
                    <tbody key={product.id}>
                      <tr>
                        <td className="py-4">
                          <div className="flex items-center">
                            <img
                              className="h-16 w-16 mr-4"
                              src={product.image}
                              alt="Product image"
                            />
                            <span className="font-semibold">
                              {product.title}
                            </span>
                          </div>
                        </td>
                        <td className="py-4">${product.price}</td>
                        <td className="py-4">
                          <div className="flex items-center">
                            <button
                              className="border rounded-md py-2 px-4 mr-2"
                              onClick={() => {
                                dispatch(decreaseQuantity(product.id));
                                dispatch(cartTotalPrice());
                              }}
                            >
                              -
                            </button>
                            <span className="text-center w-8">{quantity}</span>
                            <button
                              className="border rounded-md py-2 px-4 ml-2"
                              onClick={() => {
                                dispatch(increaseQuantity(product.id));
                                dispatch(cartTotalPrice());
                              }}
                            >
                              +
                            </button>
                          </div>
                        </td>
                        <td className="py-4">${quantity * product.price}</td>
                        <td className="py-4 text-right">
                          <button
                            onClick={() => {
                              dispatch(deleteProducts(product.id));
                              dispatch(cartTotalPrice());
                            }}
                          >
                            <FontAwesomeIcon
                              icon={faTrash}
                              style={{ color: "#e91616" }}
                            />
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  ))}
                </table>

                {cartData?.map(({ product, quantity }) => (
                  <div key={product.id} className="block md:hidden mb-4">
                    <div className="flex items-center mb-2 py-5">
                      <img
                        className="h-16 w-16 mr-4"
                        src={product.image}
                        alt="Product image"
                      />
                      <span className="font-semibold">{product.title}</span>
                    </div>
                    <div className="flex justify-between mb-2 py-5">
                      <span>Price:</span>
                      <span>${product.price}</span>
                    </div>
                    <div className="flex justify-between mb-2 py-5">
                      <span>Quantity:</span>
                      <div className="flex items-center">
                        <button
                          className="border rounded-md py-2 px-4 mr-2"
                          onClick={() => {
                            dispatch(decreaseQuantity(product.id));
                            dispatch(cartTotalPrice());
                          }}
                        >
                          -
                        </button>
                        <span className="text-center w-8">{quantity}</span>
                        <button
                          className="border rounded-md py-2 px-4 ml-2"
                          onClick={() => {
                            dispatch(increaseQuantity(product.id));
                            dispatch(cartTotalPrice());
                          }}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="flex justify-between mb-2">
                      <span>Total:</span>
                      <span>${quantity * product.price}</span>
                    </div>
                    <div className="text-right">
                      <button
                        onClick={() => {
                          dispatch(deleteProducts(product.id));
                          dispatch(cartTotalPrice());
                        }}
                      >
                        <FontAwesomeIcon
                          icon={faTrash}
                          style={{ color: "#e91616" }}
                        />
                      </button>
                    </div>
                    <hr className="mt-2" />
                  </div>
                ))}
              </div>
            </div>
            <div className="md:w-1/4 w-full">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-lg font-semibold mb-4 text-center md:text-left">Summary</h2>
                <hr className="my-2" />
                <div className="flex justify-between mb-2">
                  <span className="font-semibold">Subtotal</span>
                  <span className="font-semibold">${totalPrice.toFixed(2)}</span>
                </div>
                <button className="bg-blue-500 text-white py-2 px-4 rounded-lg mt-4 w-full">
                  Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
