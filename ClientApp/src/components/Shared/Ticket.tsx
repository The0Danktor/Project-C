import React from "react";
import { PopUp } from "./PopUp";
import { useState } from "react";
import "../../index.css"
class Example extends React.Component {
  // ...
  render(): React.ReactNode {
    return (
      document.body.style.position = "fixed"
    )
  }
}
export function Ticket() {
  const status = ["New", "In progress", "Finished"];
  var color;
  var date = new Date();
  var currentStatus = status[Math.floor(Math.random() * status.length)]; // picks random item im status list
  // gives color based on the curent status
  if (currentStatus == "New") color = "bg-cyan-500";
  else if (currentStatus == "In progress") color = "bg-yellow-300";
  else color = "bg-green-500";

  const [active, setActive] = useState(false);
  function Popup() {
    setActive(!active); // displays popup if button is clicked\
    if (active) {
      document.body.style.position = "inherit";
    } else {
      document.body.style.position = "fixed";
    }
  }
  return (
    <div className="text-left w-full lg:w-[48.5%] border border-gray-300 dark:border-gray-700 dark:hover:bg-gray-700 hover:bg-gray-200 dark:text-gray-400 rounded-lg m-2">
      <button
        className="w-full text-left p-4"
        onClick={Popup} /* calls toggle function */
      >
        <span className="text-gray-400 text-sm float-left w-full sm:w-[unset] sm:float-right">
          {/* dislays date: dd/mm/yyyy */}
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
            " rounded text-black w-40 sm:float-right sm:-my-12 float-left my-0"
          }
        >
          {currentStatus}
        </button>
      </button>
      {/* displaying pop up message */}
      {active && (
        <PopUp
          close={Popup}
          display={active}
          status={currentStatus}
          date={date}
        />
      )}
    </div>
  );
}
