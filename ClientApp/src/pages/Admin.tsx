import React, { useState } from "react";
import { DarkmodeSwitch } from "../components/Shared/DarkmodeSwitch";
import control from "../assets/control.png";
import viscon from "../assets/viscon.png";

export function Admin() {
  const [open, setOpen] = useState(false);
  const Menus = [
    { title: "Accounts", gap: true },
    { title: "Home" },
    { title: "Settings" },
    { title: "Search" },
    { title: "Logout" },
  ];
  return (
    <div className="flex">
      <div
        className={` ${
          open ? "w-72" : "w-20"
        } duration-300 h-screen p-5 pt-8 bg-dark-blue relative`}
      >
        <img
          src={control}
          className={`absolute cursor-pointer rounded-full -right-3 top-9 w-7 border-2 border-dark-blue ${
            !open && "rotate-180"
          }`}
          onClick={() => setOpen(!open)}
        />
        <div className="flex gap-x-4 items-center">
          <img
            src={viscon}
            className={`${open ? "w-30" : "w-20"}cursor-pointer duration-500 ${
              open && "rotate-[360deg]"
            }`}
          />
          <h1
            className={`text-white origin-left font-medium text-xl duration-200 ${
              !open && "scale-0"
            }`}
          >
            Admin
          </h1>
        </div>
      </div>
      <ul className="pt-6">
        {Menus.map((Menu, index) => (
          <li
            key={index}
            className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
                    ${Menu.gap ? "mt-9" : "mt-2"} ${
              index === 0 && "bg-light-white"
            } `}
          >
            {Menu.title}
          </li>
        ))}
      </ul>
      <div className="p-7 text-2x1 font-semibold flex-1 h-screen">
        <h1>Admin</h1>
      </div>
    </div>
  );
}
