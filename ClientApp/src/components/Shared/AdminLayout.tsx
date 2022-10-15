import React from "react";
import { Outlet } from "react-router-dom";
import { NavSide } from "./NavSide";
import { Header } from "./Header";

export function Layout() {
  return (
    <div className="flex  bg-white dark:bg-gray-900 transition duration-300">
      <NavSide />
      <div>
        <Header />
        <div className="flex justify-center font-semibold text-4xl text-black dark:text-gray-400 ">
          Client Admin Panel
        </div>
        <div className="flex font-semibold text-black dark:text-gray-400 transition duration-300">
          <div className="flex flex-row mt-40 mx-10 w-60 h-40 justify-center font-semibold text-black dark:text-gray-400 dark:hover:text-white bg-white dark:bg-gray-900 hover:bg-slate-100 dark:hover:bg-gray-800 dark:shadow-gray-600 shadow-lg rounded-lg transition duration-300">
            Number of Machines
          </div>
          <div className="flex flex-row mt-40 justify-center mx-10 w-60 h-40 font-semibold bg-white text-black dark:hover:text-white dark:text-gray-400 dark:bg-gray-900 hover:bg-slate-100 dark:hover:bg-gray-800 dark:shadow-gray-600 shadow-lg rounded-lg transition duration-300">
            Number of accounts
          </div>
          <div className="flex flex-row justify-center mt-40 mx-10 w-60 h-40 font-semibold bg-white text-black dark:hover:text-white dark:text-gray-400 dark:bg-gray-900 hover:bg-slate-100 dark:hover:bg-gray-800 dark:shadow-gray-600 shadow-lg rounded-lg transition duration-300">
            Number of accounts
          </div>
          <div className="flex flex-row justify-center mt-40 mx-10 w-60 h-40 font-semibold bg-white text-black dark:hover:text-white dark:text-gray-400 dark:bg-gray-900 hover:bg-slate-100 dark:hover:bg-gray-800 dark:shadow-gray-600 shadow-lg rounded-lg transition duration-300">
            Number of accounts
          </div>
        </div>
      </div>
    </div>
  );
}
