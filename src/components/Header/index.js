import React, { useEffect, useState } from "react";
import modal from "@goalabs.id/react-shared-components/dist/components/Modal";
import EvaIcons from "components/EvaIcons";
import { useSelector } from "react-redux";

import ModalCart from "components/ModalCart";

export default function Header({ children }) {
  const cart = useSelector((state) => state.cart);
  const [indicator, setIndicator] = useState(false);

  function fnCart() {
    modal.show(<ModalCart />, {
      margin: {
        y: 0,
        x: 0,
      },
      close: {
        outsideClick: true,
        closeOnEscape: true,
        display: false,
      },
      outer: {
        style: {
          position: "fixed",
          overflowX: "hidden",
          inset: 0,
          zIndex: 1030,
        },
        className: "",
        timeout: 250,
      },
      container: {
        style: { margin: 0, justifyContent: "end" },
        className: "flex",
        classNameAnimated: "content-right",
        timeoutAnimated: 250,
      },
      overlay: {
        style: {
          zIndex: 1031,
          inset: 0,
          position: "fixed",
          opacity: 0.3,
        },
        className: "bg-black/30",
      },
      wrapper: {
        style: {
          zIndex: 1032,
          borderRadius: "",
          padding: "",
          boxShadow: "none",
        },
        className: "h-screen w-[495px] bg-white self-end",
      },
    });
  }

  useEffect(() => {
    setIndicator(true);
    setTimeout(() => {
      setIndicator(false);
    }, 1000);
  }, [cart.length]);

  return (
    <header className="flex justify-between items-center">
      <div className="">{children}</div>
      <ul className="flex flex-row">
        <li className="flex items-center justify-center relative border-gray-200 border rounded-full w-[50px] h-[50px] mx-2 cursor-pointer">
          <EvaIcons icon="bell-outline" size={24} />
        </li>
        <li
          className="flex items-center justify-center relative border-gray-200 border rounded-full w-[50px] h-[50px] mx-2 cursor-pointer"
          onClick={fnCart}
        >
          {cart.length > 0 && (
            <div className="absolute right-0 top-0 z-10 bg-[#FBD560] rounded-full w-3 h-3"></div>
          )}
          {cart.length > 0 && (
            <div
              className={[
                "absolute right-0 top-0 z-10 bg-[#FBD560] rounded-full w-3 h-3",
                indicator ? "animate-ping" : "",
              ].join(" ")}
            ></div>
          )}
          <div>
            <EvaIcons icon="shopping-cart-outline" size={24} />
          </div>
        </li>
      </ul>
    </header>
  );
}
