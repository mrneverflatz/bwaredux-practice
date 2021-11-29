import React from "react";
import { useSelector, useDispatch } from "react-redux";

import Sidebar from "components/Sidebar";

import "lib/helpers/format/currency";
import Header from "components/Header";

import { addItem, removeItemFromCart } from "lib/store/slices/cart";

export default function Dashboard() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const products = [
    {
      id: 1,
      name: "Vegan Mix",
      price: 58,
      image: "/assets/images/image 6.png",
    },
    { id: 2, name: "Cake", price: 17, image: "/assets/images/image 8.png" },
    {
      id: 3,
      name: "Latte Sumatra",
      price: 9,
      image: "/assets/images/image 9.png",
    },
    {
      id: 4,
      name: "Lite Fruits",
      price: 15,
      image: "/assets/images/image 7.png",
    },
    {
      id: 5,
      name: "Ayam Soup",
      price: 45,
      image: "/assets/images/image 11.png",
    },
    {
      id: 6,
      name: "Burger King",
      price: 13,
      image: "/assets/images/image 10.png",
    },
  ];

  function fnHandleCart(item) {
    if (cart.data.hasOwnProperty(item.id))
      dispatch(removeItemFromCart({ ...item, qty: 0 }));
    else dispatch(addItem({ item }));
  }

  return (
    <div className="flex">
      <Sidebar />
      <main className="p-10 w-full">
        <Header>
          <h1 className="text-xl font-semibold">Order Foods</h1>
          <h2 className="font-medium mt-1 text-gray-500">
            Your happiness starts here
          </h2>
        </Header>
        <section className="mt-10">
          <ul className="flex -mx-4">
            <li className="px-4">
              <span className="cursor-pointer py-1 border-b-2 border-[#FBD560] font-semibold">
                New Order
              </span>
            </li>
            <li className="px-4">
              <span className="cursor-pointer py-1 text-gray-500 font-medium">
                My Orders
              </span>
            </li>
          </ul>
        </section>
        <section className="flex flex-wrap -mx-6">
          {products.map((item) => {
            return (
              <div className="px-6 w-[230px]" key={item.id}>
                <div className="border pb-10 border-gray-200 bg-white rounded-xl mt-28">
                  <div className="flex justify-center h-16">
                    <div className="rounded-full w-[130px] h-[130px] overflow-hidden p-2 bg-white border border-gray-200 transform -translate-y-1/2 absolute ">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="object-contain w-full h-full rounded-full"
                      />
                    </div>
                  </div>
                  <h3 className="text-lg font-medium text-center mt-8">
                    {item.name}
                  </h3>
                  <p className="text-center font-medium text-gray-500 mt-1">
                    {item.price.currency()}
                  </p>
                  <button
                    className="bg-[#FBD560]  hover:bg-[#eec448] transition-colors duration-200 rounded-full px-5 py-2 mx-auto flex text-sm font-semibold mt-7"
                    onClick={() => fnHandleCart(item)}
                  >
                    {cart.data.hasOwnProperty(item.id)
                      ? `(${cart.data[item.id]?.qty ?? 0}) Remove`
                      : "Add to Cart"}
                  </button>
                </div>
              </div>
            );
          })}
        </section>
      </main>
    </div>
  );
}
