import React from "react";
import { PopUp } from "./PopUp";
import { useState } from "react";

export function Ticket() {
  var status = ["New", "In progress", "Finished"];
  var color;
  var date = new Date();
  var currentStatus = status[Math.floor(Math.random() * status.length)]; // picks random item im status list
  if (currentStatus == "New") color = "bg-cyan-500";
  else if (currentStatus == "In progress") color = "bg-yellow-300";
  else color = "bg-green-500";

  const [active, setActive] = useState(false);
  const Popup = () => {
    setActive(!active);
  };
  return (
    <button
      className={"text-left w-[48.5%] border border-gray-300 dark:border-gray-700 dark:hover:bg-gray-700  hover:bg-gray-200 dark:text-gray-400 rounded-lg m-2 p-4 phone:w-screen"}
      onClick={Popup}
    >
      <span className="text-gray-400 float-right text-sm phone:float-left phone:w-[90vw]">
        {date.getDate().toString().padStart(2, "0")}/
        {date.getMonth().toString().padStart(2, "0")}/
        {date.getFullYear().toString()}
      </span>
      <strong>Title</strong>
      <p>Owner</p>
      <p>Description</p>
      <button
        className={
          color +
          " rounded text-black w-40 float-right -my-12 phone:float-left phone:my-0"
        }
      >
        {currentStatus}
      </button>
      <PopUp display={active} status={currentStatus} date={date}/>
    </button>
  );
}
