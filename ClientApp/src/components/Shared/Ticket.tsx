import React from "react";
import { PopUp } from "./PopUp";
import { useState } from "react";
import "../../index.css";
import { Priority } from "./Priority";
import { Ticket } from "../../Types/types";

export const status = ["Pending", "In Progress", "Resolved"];
export const priority = ["High", "Middle", "Low"];
interface information {
  onHomePage?: boolean;
  ticket: Ticket;
}

export function TicketLayout(props: information) {
  var color;
  var date = new Date();
  // gives color based on the curent status
  if (props.ticket.status == "Pending") color = "bg-cyan-500 text-cyan-900";
  else if (props.ticket.status == "In Progress")
    color = "bg-yellow-300 text-yellow-800";
  else color = "bg-green-500 text-green-800";

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
    <div
      className={
        (props.onHomePage ? "lg:w-[98%]" : "lg:w-[48%]") +
          " w-full text-left border border-gray-300 dark:border-gray-700 dark:hover:bg-gray-700 hover:bg-gray-200 dark:text-gray-400 rounded-lg m-2"
      }
    >
      {/* displays ticket itself */}
      <button
        className="w-full text-left p-4"
        onClick={Popup} /* calls toggle function */
      >
        <span className="text-gray-400 text-sm float-left w-full md:w-[unset] md:float-right">
          {/* dislays date: dd/mm/yyyy */}
          {props.ticket.date.getDate().toString().padStart(2, "0")}/
          {props.ticket.date.getMonth() == 0
            ? "01"
            : date.getMonth().toString().padStart(2, "0")}
          /{props.ticket.date.getFullYear().toString()}
        </span>
        <strong className="inline-block">{props.ticket.problem.machineId}</strong>
        {/* priority */}
        <Priority prio={props.ticket.priority} />

        <p>{props.ticket.customer.name}</p>
        <p>{props.ticket.problem.id}</p>
        <button
          className={
            color +
            " rounded font-semibold w-40 md:float-right md:-my-12 float-left my-0"
          }
        >
          {props.ticket.status}
        </button>
      </button>
      {/* displays pop up message */}
      {active && (
        <PopUp
          close={Popup}
          ticket={props.ticket}
        />
      )}
    </div>
  );
}