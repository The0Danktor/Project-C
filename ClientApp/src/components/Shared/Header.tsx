import React from "react";
import { UserIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <div className="flex flex-col w-screen sm:w-full h-24 sticky top-0 bg-white dark:bg-gray-900 border-b-2 border-gray-100 dark:border-gray-800 transition duration-300">
      <div className="flex flex-row mt-3 text-2xl items-center justify-center font-medium dark:text-gray-400 text-black transition duration-300">
        Logged in as: Admin
      </div>
      <div className="flex transition justify-end mr-3 mb-3 duration-300 text-black dark:text-gray-400 ">
        <Link to="/admin/settings">
          <UserIcon className="flex w-10 h-10 cursor-pointer" />
        </Link>
      </div>{" "}
      {/* justify end toevoegen svp, nu niet ivm met uitlijnen beeldscherm ratio voor pagina xD */}
    </div>
    // <div className="flex flex-col w-full h-24  bg-white dark:bg-gray-900 border-b-2 border-gray-100 dark:border-gray-800 transition duration-300">
    //     <div className="flex flex-row h-24 w-full text-2xl items-center justify-center font-medium dark:text-gray-400 text-black transition duration-300">
    //         Logged in as: Admin

    //     </div>
    //     <div className="flex transition duration-300 text-black dark:text-gray-400 "><Link to="/admin/settings"><UserIcon className="flex w-10 h-10 cursor-pointer"/></Link></div> {/* justify end toevoegen svp, nu niet ivm met uitlijnen beeldscherm ratio voor pagina xD */}
    // </div>
  );
}
