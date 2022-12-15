import React from "react";
import { PopUp } from "./PopUp";
import { useState } from "react";
import "../../index.css";
import { Priority } from "./Priority";

export const status = ["New", "In progress", "Finished"];
export const priority = ["High", "Middle", "Low"];
export function Ticket() {
  var currentStatus = status[Math.floor(Math.random() * status.length)]; // picks random item im status list
  var currentPriority = priority[Math.floor(Math.random() * priority.length)]; // picks random item im priority list

  var color;
  var date = new Date();
  // gives color based on the curent status
  if (currentStatus == "New") color = "bg-cyan-500";
  else if (currentStatus == "In progress") color = "bg-yellow-300";
  else color = "bg-green-500";

  const [active, setActive] = useState(false);
  function Popup() {
    setActive(!active); // displays popup if button is clicked
    if (active) {
      // will make everything unscrollable except the popup itself
      document.body.style.position = "inherit";
    } else {
      document.body.style.position = "fixed";
    }
  }
  return (
    // displays ticket button
    <div className="text-left w-full lg:w-[48.5%] border border-gray-300
     dark:border-gray-700 dark:hover:bg-gray-700 hover:bg-gray-200 
     dark:text-gray-400 rounded-lg m-2">
      {/* displays ticket itself */}
      <button
        className="w-full text-left p-4"
        onClick={Popup} /* calls toggle function */
      >
        <span className="text-gray-400 text-sm float-left w-full md:w-[unset] md:float-right">
          {/* dislays date: dd/mm/yyyy */}
          {date.getDate().toString().padStart(2, "0")}/
          {date.getMonth().toString().padStart(2, "0")}/
          {date.getFullYear().toString()}
        </span>
        <strong className="inline-block">Title</strong>
        {/* priority */}
        <Priority prio={currentPriority}/>

        <p>Owner</p>
        <p>Problem type</p>
        <button
          className={
            color +
            " rounded text-black w-40 md:float-right md:-my-12 float-left my-0"
          }
        >
          {currentStatus}
        </button>
      </button>
      {/* displays pop up message */}
      {active && (
        <PopUp
          close={Popup}
          status={currentStatus}
          date={date}
          prio={currentPriority}
        />
      )}
    </div>
  );
}
