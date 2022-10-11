import React, { useState } from "react";
import { DarkmodeSwitch } from "../components/Shared/DarkmodeSwitch";
import control from "../assets/control.png";
import viscon from "../assets/viscon.png";
import { BsSearch, BsChevronDown } from "react-icons/bs";
import { RiDashboardFill, RiAccountCircleLine, RiListSettingsLine, RiErrorWarningLine, RiLogoutBoxLine, RiInboxArchiveFill } from "react-icons/ri";
import { TbUsers } from "react-icons/tb";

export function Admin() {
  const [open, setOpen] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const Menus = [
    {
      title: "Dashboard" 
    },
    { title: "Account", spacing: true, icon: <RiAccountCircleLine /> },
    { title: "Users", spacing: true, icon: <TbUsers /> },
    {
      title: "Problems",
      icon: <RiErrorWarningLine />,
      submenu: true,
      submenuItems: [
        { title: "Problem 1" },
        { title: "Problem 2" },
        { title: "Problem 3" },
      ],
    },
    { title: "Inbox", icon: <RiInboxArchiveFill /> },
    { title: "Settings", icon: <RiListSettingsLine /> },
    { title: "Logout", icon: <RiLogoutBoxLine /> },
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
            className={`cursor-pointer duration-500 ${
              open && "rotate-[360deg] w-20"
            }`}
          />
          <h1
            className={`text-white origin-top font-medium text-xl duration-200 ${
              !open && "scale-0"
            }`}
          >
            Admin
          </h1>
        </div>
        <div
          className={`flex items-center rounded-md bg-light-white mt-6 ${
            !open ? "px-2.5" : "px-4"
          } py-2`}
        >
          <BsSearch
            className={`text-white text-lg block float-left cursor-pointer ${
              open && "mr-2"
            }`}
          />
          <input
            type={"search"}
            placeholder="Search"
            className={`text-base bg-transparent w-full text-white focus:outline-none ${
              !open && "hidden"
            }`}
          />
        </div>
        <ul className="pt-2">
          {Menus.map((menu, index) => (
            <>
              <li
                key={index}
                className={`text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-white hover:text-black rounded-md ${
                  menu.spacing ? "mt-9" : "mt-2"
                }`}
              >
                <span className="text-2xl block float-left">
                  {menu.icon ? menu.icon : <RiDashboardFill />}
                </span>
                <span
                  className={`text-base font-medium flex-1 ${
                    !open && "hidden"
                  }`}
                >
                  {menu.title}
                </span>
                {menu.submenu && open && (
                  <BsChevronDown
                    className={`${submenuOpen && "rotate-180"}`}
                    onClick={() => setSubmenuOpen(!submenuOpen)}
                  />
                )}
              </li>

              {menu.submenu && submenuOpen && open &&(
                <ul className="ml-8">
                  {menu.submenuItems.map((submenuItem, index) => (
                    <li
                      key={index}
                      className="text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 px-5 hover:bg-white hover:text-black rounded-md"
                    >
                      {submenuItem.title}
                    </li>
                  ))}
                </ul>
              )}
            </>
          ))}
        </ul>
      </div>
    </div>
  );
}
