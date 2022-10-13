import React from "react";
import { DarkmodeSwitch } from "./DarkmodeSwitch";
import NavSideButton from "./NavSideButton";
import {
  BookOpenIcon,
  HomeIcon,
  PencilSquareIcon,
  UsersIcon,
  UserIcon,
  ArrowLeftOnRectangleIcon,
  Cog8ToothIcon,
  SwatchIcon,
} from "@heroicons/react/24/outline";

export function NavSide() {
  return (
    <div className="h-screen w-80 flex flex-col bg-white dark:bg-gray-900 border-r-2 border-gray-100 dark:border-gray-800 transition duration-300">
      <div className="flex justify-between w-full py-3 px-3 border-b-2 border-gray-100 dark:border-gray-800 transition duration-300">
        <p className="text-black dark:text-gray-400 transition duration-300">
          Viscon
        </p>
        <DarkmodeSwitch />
      </div>
      <div className="flex flex-col h-full justify-between">
        <div className="flex flex-col items-center my-4">
          <NavSideButton
            title="Home"
            svg={<HomeIcon className="w-6 h-6 m-2" />}
            page="../"
          />
          <NavSideButton
            title="Tickets"
            svg={<PencilSquareIcon className="w-6 h-6 m-2" />}
            page="../tickets"
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
            svg={<ArrowLeftOnRectangleIcon className="w-6 h-6 m-2" />}
            page="../logout"
          />
        </div>
      </div>
    </div>
  );
}
