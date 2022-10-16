import React from "react";

export function Ticket() {
  var reports = [];
  var status = ["New", "In progress", "Finished"];
  var color;
  for (var i = 0; i < 1000; i++) {
    var currentStatus = status[Math.floor(Math.random() * status.length)];
    {
      /* picks random item im status list */
    }
    if (currentStatus == "New") color = "bg-cyan-500";
    else if (currentStatus == "In progress") color = "bg-yellow-300";
    else color = "bg-green-500";

    reports.push(
      <a
        href="#"
        className="border border-slate-300 dark:border-gray-700 dark:hover:bg-gray-800  hover:bg-slate-200 dark:text-gray-400 rounded-lg m-2 p-4"
        // className="w-[48.6%] border border-slate-300 dark:border-gray-700 dark:hover:bg-gray-800  hover:bg-slate-200 dark:text-gray-400 rounded-lg m-2 p-4"
      >
        <span className="text-slate-400 float-right text-sm">
          17 December, 2022
        </span>
        <strong>Title</strong>
        <p>Owner</p>
        <p>Description</p>
        <button
          className={color + " rounded text-black w-40 float-right -my-12"}
        >
          {currentStatus}
        </button>
      </a>
    );
  }
  return (
    // <div className="grow flex flex-row flex-wrap justify-start content-start transition duration-300 dark:bg-slate-800 bg-slate-100  h-[42rem] m-10 rounded-xl overflow-auto">
     <div className="grow flex flex-col transition duration-300 dark:bg-slate-800 bg-slate-100  h-[42rem] m-10 rounded-xl overflow-auto">
      {reports}
    </div>
  );
}
