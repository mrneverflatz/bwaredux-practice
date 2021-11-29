import React from "react";
import { ReactComponent as LogoTM } from "assets/images/logo-tm.svg";
import { NavLink } from "react-router-dom";

import EvaIcons from "components/EvaIcons";

export default function Sidebar() {
  const activeClassName = "bg-black rounded-full text-white";

  return (
    <div className="flex-shrink w-[130px] h-screen border-r border-gray-200 bg-gray-50">
      <div className="flex flex-col ">
        <div className="h-[150px] flex justify-center items-center">
          <LogoTM className="fill-current" />
        </div>
        <div className="border-t border-gray-200">
          <nav>
            <ul className="flex flex-col w-full items-center justify-center my-5">
              <li className="">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    [
                      "flex p-4 fill-current my-2",
                      isActive ? activeClassName : "",
                    ].join(" ")
                  }
                >
                  <EvaIcons icon="grid-outline" size={24} />
                </NavLink>
              </li>
              <li className="">
                <NavLink
                  to="/products"
                  className={({ isActive }) =>
                    [
                      "flex p-4 fill-current my-2",
                      isActive ? activeClassName : "",
                    ].join(" ")
                  }
                >
                  <EvaIcons icon="shopping-bag-outline" size={24} />
                </NavLink>
              </li>
              <li className="">
                <NavLink
                  to="/gifts"
                  className={({ isActive }) =>
                    [
                      "flex p-4 fill-current my-2",
                      isActive ? activeClassName : "",
                    ].join(" ")
                  }
                >
                  <EvaIcons icon="gift-outline" size={24} />
                </NavLink>
              </li>
              <li className="">
                <NavLink
                  to="/cards"
                  className={({ isActive }) =>
                    [
                      "flex p-4 fill-current my-2",
                      isActive ? activeClassName : "",
                    ].join(" ")
                  }
                >
                  <EvaIcons icon="credit-card-outline" size={24} />
                </NavLink>
              </li>
              <li className="">
                <NavLink
                  to="/settings"
                  className={({ isActive }) =>
                    [
                      "flex p-4 fill-current my-2",
                      isActive ? activeClassName : "",
                    ].join(" ")
                  }
                >
                  <EvaIcons icon="settings-2-outline" size={24} />
                </NavLink>
              </li>
              <li className="">
                <NavLink
                  to="/helps"
                  className={({ isActive }) =>
                    [
                      "flex p-4 fill-current my-2",
                      isActive ? activeClassName : "",
                    ].join(" ")
                  }
                >
                  <EvaIcons icon="question-mark-circle-outline" size={24} />
                </NavLink>
              </li>
              <li className="">
                <span className={["flex p-4 fill-current my-2"].join(" ")}>
                  <EvaIcons icon="log-out-outline" size={24} />
                </span>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}
