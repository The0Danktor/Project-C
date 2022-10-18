import React from "react";
import { Outlet } from "react-router-dom";
import { NavSide } from "./NavSide";
import { Header } from "./Header";
import {Link} from "react-router-dom";

export function Layout() {
  const state = {
    items: [
      {
        id: 0,
        name: "foo",
        date: "2020-01-01",
      },
      {
        id: 1,
        name: "bar",
        date: "2020-01-02",
      },
      {
        id: 2,
        name: "baz",
        date: "2020-01-03",
      },
      {
        id: 3,
        name: "qux",
        date: "2020-01-04",
      },
      {
        id: 4,
        name: "quux",
        date: "2020-01-05",
      }
    ],
  };
  function renderMenuItems() {
    let items = state.items.map((item: any, index: any) => {
      return (
        <div className="flex flex-col w-96" key={item.id}>
          <div className="flex flex-col mx-10  items-center border-4 border-gray-100 hover:bg-slate-100 dark:hover:bg-gray-800 dark:border-gray-800 shadow-lg rounded-full mt-5 dark:shadow-gray-800 justify-center font-semibold transition duration-300">
            {item.id} | {item.name} | {item.date}
          </div>
        </div>
      );
    });
    return items;
  }
  return (
    <div className="flex bg-white dark:bg-gray-900 transition duration-300">
      <NavSide />
      <div>
        <Header />
        <div className="flex font-semibold text-black dark:text-gray-400 transition duration-300">
        <div className="flex flex-col items-center justify-center mt-20 mx-10 w-60 h-40 font-semibold bg-white text-2xl text-black dark:hover:text-white dark:text-gray-400 dark:bg-gray-900 hover:bg-slate-100 dark:hover:bg-gray-800 dark:shadow-gray-600 shadow-lg rounded-lg transition duration-300 cursor-pointer">
            <Link to="admin/accounts">
            <p className="mt-2">Our Accounts</p>
            <h1 className="m-12 font-semibold text-3xl text-black dark:text-gray-400">
              bar
            </h1>
            </Link>
          </div>
          <div className="flex flex-col items-center justify-center mt-20 mx-10 w-60 h-40 font-semibold bg-white text-2xl text-black dark:hover:text-white dark:text-gray-400 dark:bg-gray-900 hover:bg-slate-100 dark:hover:bg-gray-800 dark:shadow-gray-600 shadow-lg rounded-lg transition duration-300 cursor-pointer">
            <Link to="admin/machines">
            <p className="mt-2">Our Machines</p>
            <h1 className="m-12 font-semibold text-3xl text-black dark:text-gray-400">
              bar
            </h1>
            </Link>
          </div>
          <div className="flex flex-col items-center justify-center mt-20 mx-10 w-60 h-40 font-semibold bg-white text-2xl text-black dark:hover:text-white dark:text-gray-400 dark:bg-gray-900 hover:bg-slate-100 dark:hover:bg-gray-800 dark:shadow-gray-600 shadow-lg rounded-lg transition duration-300 cursor-pointer">
            <Link to="admin/problems">
            <p className="mt-2 mx-4">History</p>
            <h1 className="m-12 font-semibold text-3xl text-black dark:text-gray-400">
              bar
            </h1>
            </Link>
          </div>
          <div className="flex flex-col items-center justify-center mt-20 mx-10 w-60 h-40 font-semibold bg-white text-2xl text-black dark:hover:text-white dark:text-gray-400 dark:bg-gray-900 hover:bg-slate-100 dark:hover:bg-gray-800 dark:shadow-gray-600 shadow-lg rounded-lg transition duration-300 cursor-pointer">
            <Link to="admin/dev">
            <p>kut tailwind</p>
            <h1 className="m-12 font-semibold text-3xl text-black dark:text-gray-400">
              bar
            </h1>
            </Link>
          </div>
          <div className="flex flex-col items-center justify-center mt-20 mx-10 w-60 h-40 font-semibold bg-white text-2xl text-black dark:hover:text-white dark:text-gray-400 dark:bg-gray-900 hover:bg-slate-100 dark:hover:bg-gray-800 dark:shadow-gray-600 shadow-lg rounded-lg transition duration-300 cursor-pointer">
            <Link to="admin/dev">
            <p>waarom centered die niet gvd</p>
            <h1 className="m-12 font-semibold text-3xl text-black dark:text-gray-400">
              bar
            </h1>
            </Link>
          </div>
        </div>
        <div className="flex w-screen h-screen font-semibold text-black dark:text-gray-400 transition duration-300">
          <div className="flex flex-col items-center mt-40 mx-10 w-1/6 h-1/3 border-4 border-gray-100 dark:border-gray-800 dark:shadow-gray-800 shadow-lg rounded-3xl">
            <div className="flex flex-col justify-center items-center w-60 text-2xl mt-6 h-10 font-semibold bg-white text-black dark:hover:text-white dark:text-gray-400 border-2 border-gray-100 dark:border-gray-800 dark:bg-gray-900 hover:bg-slate-100 dark:hover:bg-gray-800 dark:shadow-gray-600 shadow-lg rounded-full transition duration-300">
              <p>Recent Activity</p>
            </div>
            <div className="flex flex-col justify-center font-semibold text-2xl ">
              {renderMenuItems()}
            </div>
          </div>
          <div className="flex flex-col items-center mt-40 mx-10 w-1/6 h-1/3 border-4 border-gray-100 dark:border-gray-800 dark:shadow-gray-800 shadow-lg rounded-3xl">
            <div className="flex flex-col justify-center items-center w-60 text-2xl mt-6 h-10 font-semibold bg-white text-black dark:hover:text-white dark:text-gray-400 border-2 border-gray-100 dark:border-gray-800 dark:bg-gray-900 hover:bg-slate-100 dark:hover:bg-gray-800 dark:shadow-gray-600 shadow-lg rounded-full transition duration-300">
              <p>Recent Errors</p>
            </div>
            <div className="flex flex-col justify-center font-semibold text-2xl ">
              {renderMenuItems()}
            </div>
          </div>
          <div className="flex flex-col items-center mt-40 mx-10 w-1/6 h-1/3 border-4 border-gray-100 dark:border-gray-800 dark:shadow-gray-800 shadow-lg rounded-3xl">
            <div className="flex flex-col justify-center items-center w-60 text-2xl mt-6 h-10 font-semibold bg-white text-black dark:hover:text-white dark:text-gray-400 border-2 border-gray-100 dark:border-gray-800 dark:bg-gray-900 hover:bg-slate-100 dark:hover:bg-gray-800 dark:shadow-gray-600 shadow-lg rounded-full transition duration-300">
              <p>Wee nie</p>
            </div>
            <div className="flex flex-col justify-center font-semibold text-2xl ">
              {renderMenuItems()}
            </div>
          </div>
          <div className="flex flex-col items-center mt-40 mx-10 w-1/6 h-1/3 border-4 border-gray-100 dark:border-gray-800 dark:shadow-gray-800 shadow-lg rounded-3xl">
            <div className="flex flex-col justify-center items-center w-60 text-2xl mt-6 h-10 font-semibold bg-white text-black dark:hover:text-white dark:text-gray-400 border-2 border-gray-100 dark:border-gray-800 dark:bg-gray-900 hover:bg-slate-100 dark:hover:bg-gray-800 dark:shadow-gray-600 shadow-lg rounded-full transition duration-300">
              <p>Wee nie</p>
            </div>
            <div className="flex flex-col justify-center font-semibold text-2xl ">
              {renderMenuItems()}
            </div>
          </div>
          <div className="flex flex-row justify-center">
          hoi
        </div>
        </div>
        
      </div>
    </div>
  );
}
