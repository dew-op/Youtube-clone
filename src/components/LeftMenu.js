import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";

import LeftMenuItem from "./LeftMenuItem";
import { categories } from "../utils/constants";
import { Context } from "../context/contextApi";

const LeftMenu = () => {
  const { selectedCategory, setSelectedCategory, mobileMenu } = useContext(Context);

  const navigate = useNavigate();

  const clickHandler = (name, type) => {
    switch (type) {
      case "category":
        return setSelectedCategory(name);
      case "home":
        return setSelectedCategory(name);
      case "menu":
        return false;
      default:
        break;
    }
  };

  return (
    <div
      className={`md:block w-[240px] overflow-y-auto h-full py-4 bg-black absolute md:relative z-10 translate-x-[-240px] md:translate-x-0 transition-all`}
    >
      <div className="flex px-5 flex-col">
        {categories.map((item) => {
          return (
            <div>
              <LeftMenuItem
                key={item.id}
                text={item.type === "home" ? "Home" : item.name}
                icon={item.icon}
                action={() => {
                  clickHandler(item.name, item.type);
                  navigate('/');
                }}
                className={`${
                  selectedCategory === item.name ? " bg-white/[0.15] " : ""
                }`}
              />
              {item.divider && <hr className="my-5 border-white/[0.2]" />}
            </div>
          );
        })}
        <hr className="my-5 border-white/[0.2]" />
        <div className="text-white/[0.5] text-[12px]">
          Gamma © Dewansh Upadhyay 2023
        </div>
      </div>
    </div>
  );
};

export default LeftMenu;
