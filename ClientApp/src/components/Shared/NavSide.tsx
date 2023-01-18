import React, { useEffect, useState } from "react";
import { DarkmodeSwitch } from "./DarkmodeSwitch";
import { NavSideButton } from "./NavSideButton";
import { NavSideButtonLogo } from "./NavSideButton";
import logo from "../../assets/logo.png";
import {
  BookOpenIcon,
  HomeIcon,
  PencilSquareIcon,
  UsersIcon,
  UserIcon,
  ArrowRightOnRectangleIcon,
  Cog8ToothIcon,
  SwatchIcon,
  Bars3Icon,
} from "@heroicons/react/24/outline";
import { User } from "../../Types/types";
import { useNavigate } from "react-router-dom";

export function NavSide() {
  const [isOpen, setActive] = useState(false);

  function open() {
    setActive(!isOpen);
  }
  return (
    <div>
      {/* menu button */}
      <button
        className={
          (isOpen ? "top-8" : "top-3") +
          " md:hidden bg-white dark:bg-gray-900 fixed z-20 right-3 transition-[top] border-2 p-2 rounded-3xl dark:border-gray-400 border-gray-500"
        }
        onClick={() => open()}
      >
        <Bars3Icon className="w-4 h-4 text-gray-500" />
      </button>

      {/* menu upper part */}
      <div
        className={
          (isOpen ? "" : "-translate-x-full md:translate-x-[unset] z-[20]") +
          " h-screen min-h-[50vh] overflow-auto fixed md:sticky top-0 w-screen md:w-80 md:flex flex-col bg-white dark:bg-gray-900 border-r-2 border-gray-100 dark:border-gray-800 transition duration-300"

        }
      >
        <div className="flex justify-between items-center w-full py-3 px-3 border-b-2 border-gray-100 dark:border-gray-800 transition duration-300">
          <NavSideButtonLogo img={logo} page="../" />
          <div className="flex flex-row h-9">
            <DarkmodeSwitch />
          </div>
        </div>

        {/* menu links */}
        <div className="flex flex-col md:h-full justify-between height">
          <div className="flex flex-col items-center my-4">
            <NavSideButton
              title="Home"
              svg={<HomeIcon className="w-6 h-6 m-2" />}
              page="../"
            />
            <NavSideButton
              title="Tickets"
              svg={<PencilSquareIcon className="w-6 h-6 m-2" />}
              page="../ticket"
            />
            <NavSideButton
              title="Knowledge Base"
              svg={<BookOpenIcon className="w-6 h-6 m-2" />}
              page="../knowledge"
            />
            <NavSideButton
              title="Admin"
              svg={<UsersIcon className="w-6 h-6 m-2" />}
              page="../admin"
            />
            <NavSideButton
              title="Testing Ground"
              svg={<SwatchIcon className="w-6 h-6 m-2" />}
              page="../test"
            />
          </div>
          <div className="flex flex-col items-center my-4">
            <NavSideButton
              title="Settings"
              svg={<Cog8ToothIcon className="w-6 h-6 m-2" />}
              page="../settings"
            />
            <NavSideButton
              title="Account"
              svg={<UserIcon className="w-6 h-6 m-2" />}
              page="../account"
            />
            <NavSideButton
              title="Logout"
              svg={<ArrowRightOnRectangleIcon className="w-6 h-6 m-2" />}
              page="../login"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
