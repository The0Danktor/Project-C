import React from "react";
import { Outlet } from "react-router-dom";
import { NavSide } from "./NavSide";
import { Header } from "./Header";

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
      date: "2020-01-03"
    }
  ]
}
function renderMenuItems() {
  let items = state.items.map((item : any , index : any) => {
     return ( 
       <div className="flex flex-col" key={item.id}>
        <div className="flex flex-col mx-10 first:pt-0 last:pb-0 border-4 border-gray-100 flex hover:bg-slate-100 dark:hover:bg-gray-800 dark:border-gray-800 shadow-lg rounded-full mt-3 dark:shadow-gray-800 items-center font-semibold transition duration-300">
          {item.id} {item.name} {item.date}
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
        <div className="flex w-screen h-screen  font-semibold text-black dark:text-gray-400 transition duration-300">
          <div className="flex flex-col mt-40 mx-10 w-1/3 h-1/2 border-4 border-gray-100 dark:border-gray-800 dark:shadow-gray-800 shadow-lg rounded-3xl">
            <div className="flex flex-col justify-center items-center text-2xl w-60 mt-10 h-10 font-semibold bg-white text-black dark:hover:text-white dark:text-gray-400 border-2 border-gray-100 dark:border-gray-800 dark:bg-gray-900 hover:bg-slate-100 dark:hover:bg-gray-800 dark:shadow-gray-600 shadow-lg rounded-full transition duration-300">
              <p>Recent Activity</p>
            </div>
            <div className=" flex-col items-center font-semibold text-2xl ">
              {renderMenuItems()}
            </div>
          </div>
          <div className="flex flex-col mt-40 mx-10 w-1/3 h-1/2 border-4 border-gray-100 dark:border-gray-800 dark:shadow-gray-800 shadow-lg rounded-3xl"></div>
        </div>
    </div>
    </div>
  );
}

