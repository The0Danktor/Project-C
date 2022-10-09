import React from "react";
import { DarkmodeSwitch } from "../Shared/DarkmodeSwitch";

export function NavSide() {

  return (
    <div className="absolute left-0 h-screen w-80 flex flex-col items-end bg-white dark:bg-gray-900 border-r-2 border-gray-800">
      <div className=" relative right-2 top-4"> 
        <DarkmodeSwitch />
      </div>
    </div>
  );
}
