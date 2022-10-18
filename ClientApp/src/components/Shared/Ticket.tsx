import React from "react";

export function Ticket() {
  var status = ["New", "In progress", "Finished"];
  var color;
  var currentStatus = status[Math.floor(Math.random() * status.length)];
  {
    /* picks random item im status list */
  }
  if (currentStatus == "New") color = "bg-cyan-500";
  else if (currentStatus == "In progress") color = "bg-yellow-300";
  else color = "bg-green-500";
  return (
    <a
      href="#"
      // className="border border-slate-300 dark:border-gray-700 dark:hover:bg-gray-800  hover:bg-slate-200 dark:text-gray-400 rounded-lg m-2 p-4"
      className="w-[48.5%] border border-slate-300 dark:border-gray-700 dark:hover:bg-gray-800  hover:bg-slate-200 dark:text-gray-400 rounded-lg m-2 p-4"
    >
      <span className="text-slate-400 float-right text-sm">
        17 December, 2022
      </span>
      <strong>Title</strong>
      <p>Owner</p>
      <p>Description</p>
      <button className={color + " rounded text-black w-40 float-right -my-12"}>
        {currentStatus}
      </button>
    </a>
  );
}
