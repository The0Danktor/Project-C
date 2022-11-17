import React from 'react'
import {UserIcon} from "@heroicons/react/24/outline";
import {Link} from "react-router-dom";

export function Header() {
  return (
    <div className="flex flex-col w-full">
      <div className="flex justify-end w-full py-3 px-3 border-b-2 border-gray-100 dark:border-gray-800 transition duration-300">
        <p className="text-black dark:text-gray-400">Welcome User</p>
      </div>
    </div>
  );
}
