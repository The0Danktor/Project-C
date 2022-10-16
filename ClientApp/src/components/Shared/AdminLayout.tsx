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
        <div className="flex flex-col items-center text-2xl mt-20 mx-10 w-60 h-40 font-semibold bg-white text-black dark:hover:text-white dark:text-gray-400 dark:bg-gray-900 hover:bg-slate-100 dark:hover:bg-gray-800 dark:shadow-gray-600 shadow-lg rounded-lg transition duration-300">
            <p>Number of Accounts</p>
            <h1 className="m-12 font-semibold text-3xl text-black dark:text-gray-400">
              15
            </h1>
          </div>
          <div className="flex flex-col items-center text-2xl mt-20 mx-10 w-60 h-40 font-semibold bg-white text-black dark:hover:text-white dark:text-gray-400 dark:bg-gray-900 hover:bg-slate-100 dark:hover:bg-gray-800 dark:shadow-gray-600 shadow-lg rounded-lg transition duration-300">
            <p>Number of Machines</p>
            <h1 className="m-12 font-semibold text-3xl text-black dark:text-gray-400">
              222
            </h1>
          </div>
          <div className="flex flex-col items-center  mt-20 mx-10 w-60 h-40 font-semibold bg-white text-2xl text-black dark:hover:text-white dark:text-gray-400 dark:bg-gray-900 hover:bg-slate-100 dark:hover:bg-gray-800 dark:shadow-gray-600 shadow-lg rounded-lg transition duration-300">
            <p>Number of Problems</p>
            <h1 className="m-12 font-semibold text-3xl text-black dark:text-gray-400">
              0!
            </h1>
          </div>
        </div>
        <div className="flex flex-row border-b-2 w-screen bg-white dark:bg-gray-900 transition duration-300 h-screen"></div>
      </div>
      
    </div>
  );
}
