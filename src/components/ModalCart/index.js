import React from "react";
import { useSelector, useDispatch } from "react-redux";

import modal from "@goalabs.id/react-shared-components/dist/components/Modal";
import EvaIcons from "components/EvaIcons";

import "lib/helpers/format/currency";

import { addItem, removeItemFromCart } from "lib/store/slices/cart";

export default function ModalCart() {
  // const
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const fnRemoveItemFromCart = React.useCallback(
    (item) => {
      dispatch(removeItemFromCart(item));
    },
    [dispatch]
  );

  const fnAddItemInCart = React.useCallback(
    (item, qty) => {
      dispatch(addItem({ item, qty }));
    },
    [dispatch]
  );

  const onChangeItem = React.useCallback(
    (event) => {
      const [, id] = event.target.name.split("-");
      fnAddItemInCart(cart.data[id], Number(event.target.value));
    },

    [fnAddItemInCart, cart.data]
  );

  // React.useEffect(() => {
  //   if (cart.length === 0) modal.hide();
  // }, [cart.length]);

  return (
    <div className="">
      <header className="flex justify-between items-center px-12 fixed w-[495px] top-0 bg-white pt-10">
        <div className="">
          <h1 className="text-xl font-semibold">My Carts</h1>
          <h2 className="font-medium mt-1 text-gray-500">
            Pay now and just sit tight
          </h2>
        </div>
        <ul className="flex flex-row">
          <li
            className="flex items-center justify-center relative border-gray-200 border rounded-full w-[50px] h-[50px] cursor-pointer"
            onClick={modal.hide}
          >
            <EvaIcons icon="close-outline" size={24} />
          </li>
        </ul>
      </header>
      <section className="mt-32 min-h-[1000px]">
        {Object.keys(cart.data).map((id) => {
          const item = cart.data[id];
          return (
            <div className="" key={item.id}>
              <div className="flex items-center px-12 mt-6 -mx-2">
                <div className="px-2">
                  <div className="rounded-full w-[80px] h-[80px] overflow-hidden p-2 bg-white border border-gray-200">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="object-contain w-full h-full rounded-full"
                    />
                  </div>
                </div>
                <div className="px-2 flex-auto">
                  <h5 className="text-lg font-semibold">{item.name}</h5>
                  <h6 className="font-medium mt-1 text-gray-500">
                    {item.price.currency()}
                  </h6>
                </div>
                <div className="px-2 ">
                  <div className="flex">
                    <button
                      className={[
                        "w-[28px] h-[28px] rounded-full flex items-center justify-center bg-[#D32746] text-white font-semibold fill-current",
                      ]}
                      onClick={() => fnRemoveItemFromCart(item)}
                    >
                      {item.qty > 1 ? (
                        <EvaIcons icon="minus-outline" size={14} />
                      ) : (
                        <EvaIcons icon="trash-outline" size={14} />
                      )}
                    </button>
                    <div className="">
                      <input
                        name={`qty-${item.id}`}
                        type="text"
                        onChange={onChangeItem}
                        // onBlur={onBlurItem}
                        className="w-8 text-center pt-1"
                        value={item.qty}
                      />
                    </div>
                    <button
                      className={[
                        "w-[28px] h-[28px] rounded-full flex items-center justify-center text-white bg-black fill-current",
                      ]}
                      onClick={() => fnAddItemInCart(item)}
                    >
                      <EvaIcons icon="plus-outline" size={14} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </section>
      <section className="flex flex-col px-12 mt-10 fixed bottom-0 w-[495px] z-10 bg-white">
        <div className="flex justify-between mt-4">
          <div>
            <h5 className="text-lg font-medium mt-1 text-gray-500">
              Sub Total
            </h5>
          </div>
          <div>
            <h6 className="text-lg font-medium">{cart.subTotal.currency()}</h6>
          </div>
        </div>

        <div className="flex justify-between mt-4">
          <div>
            <h5 className="text-lg font-medium mt-1 text-gray-500">Discount</h5>
          </div>
          <div>
            <h6 className="text-lg font-medium">BlackFriday</h6>
          </div>
        </div>

        <div className="flex justify-between mt-4">
          <div>
            <h5 className="text-lg font-medium mt-1 text-gray-500">VAT25%</h5>
          </div>
          <div>
            <h6 className="text-lg font-medium">{cart.tax.currency()}</h6>
          </div>
        </div>

        <div className="flex justify-between mt-4">
          <div>
            <h5 className="text-lg font-medium mt-1 text-gray-500">Total</h5>
          </div>
          <div>
            <h6 className="text-lg font-bold">{cart.total.currency()}</h6>
          </div>
        </div>

        <div className="flex justify-between mt-12">
          <button className="bg-[#FBD560]  hover:bg-[#eec448] transition-colors duration-200 rounded-full px-5 py-2 flex text-sm font-semibold w-full justify-center">
            Pay with MyWallet
          </button>
        </div>
        <span className="mt-4 flex justify-center mb-12 text-gray-500 text-sm hover:underline cursor-pointer">
          Read Terms & Conditions
        </span>
      </section>
    </div>
  );
}
