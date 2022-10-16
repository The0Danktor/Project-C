import React from "react";
import { Outlet } from "react-router-dom";
import { NavSide } from "./NavSide";
import { Header } from "./Header";

export function Layout() {
  return (
    <div className="flex bg-white dark:bg-gray-900 transition duration-300">
      <NavSide />
      <div>
        <Header />
        <div className="flex font-semibold text-black dark:text-gray-400 transition duration-300">
          <div className="flex flex-row mt-20 mx-10 w-60 h-40 justify-center font-semibold text-black dark:text-gray-400 dark:hover:text-white bg-white dark:bg-gray-900 hover:bg-slate-100 dark:hover:bg-gray-800 dark:shadow-gray-600 shadow-lg rounded-lg transition duration-300">
            Number of Machines
          </div>
          <div className="flex flex-row mt-20 justify-center mx-10 w-60 h-40 font-semibold bg-white text-black dark:hover:text-white dark:text-gray-400 dark:bg-gray-900 hover:bg-slate-100 dark:hover:bg-gray-800 dark:shadow-gray-600 shadow-lg rounded-lg transition duration-300">
            Number of Accounts
          </div>
          <div className="flex flex-row justify-center mt-20 mx-10 w-60 h-40 font-semibold bg-white text-black dark:hover:text-white dark:text-gray-400 dark:bg-gray-900 hover:bg-slate-100 dark:hover:bg-gray-800 dark:shadow-gray-600 shadow-lg rounded-lg transition duration-300">
            Number of Problems
            <h1 className="flex flex-col justify-center items-center font-semibold text-2xl text-black dark:text-gray-400">
              22
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
