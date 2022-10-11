import React from "react";
import { DarkmodeSwitch } from "../Shared/DarkmodeSwitch";

export function NavSide() {

  return (
    <div className="absolute left-0 h-screen w-80 flex flex-col bg-white dark:bg-gray-900 border-r-2 border-gray-200 dark:border-gray-800 transition duration-300" >
      <div className="flex justify-between w-full py-3 px-3 border-b-2 border-gray-200 dark:border-gray-800 transition duration-300"> 
        <p className="text-black dark:text-white transition duration-300">Viscon</p>
        <DarkmodeSwitch />
      </div>
    </div>
  );
}
