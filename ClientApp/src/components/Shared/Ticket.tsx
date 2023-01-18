import React, { useEffect } from "react";
import { PopUp } from "./PopUp";
import { useState } from "react";
import "../../index.css";
import { Priority } from "./Priority";
import { CompanyMachine, Ticket, User } from "../../Types/types";

export const status = ["Pending", "In Progress", "Resolved"];
export const priority = ["High", "Middle", "Low"];
interface IInformation {
  onHomePage?: boolean;
  ticket: Ticket;
}

export function TicketLayout({ onHomePage, ticket }: IInformation) {
  const [active, setActive] = useState(false);
  const [companyMachine, setCompanyMachine] = useState<
    CompanyMachine | undefined
  >(undefined);
  const [user, setUser] = useState<User | undefined>(undefined);
  
  useEffect(() => {
  fetch("http://localhost:7162/api/User/" + ticket.userId, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  })
    .then((res) => res.json())
    .then((res) => {
      setUser(res);
    });
  fetch("http://localhost:7162/api/CompanyMachine/" + ticket.companyMachineId, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  })
    .then((res) => res.json())
    .then((res) => {
      setCompanyMachine(res);
    });
  });
  

  var color;
  // gives color based on the curent status
  if (ticket.status === "Pending") color = "bg-cyan-500 text-cyan-900";
  else if (ticket.status === "In Progress")
    color = "bg-yellow-300 text-yellow-800";
  else color = "bg-green-500 text-green-800";

  function handlePopup() {
    setActive(!active); // displays popup if button is clicked
    if (active) {
      // will make everything unscrollable except the popup itself
      document.body.style.position = "inherit";
    } else {
      document.body.style.position = "fixed";
    }
  }

  const date = new Date(Date.parse(ticket.date));

  return (
    // displays ticket button
    <div
      className={
        (onHomePage ? "lg:w-[98%]" : "lg:w-[48%]") +
        " w-full text-left border border-gray-300 dark:border-gray-700 dark:hover:bg-gray-700 hover:bg-gray-200 dark:text-gray-400 rounded-lg m-2"
      }
    >
      {/* displays ticket itself */}
      <button
        className="w-full text-left p-4"
        onClick={handlePopup} /* calls toggle function */
      >
        <span className="text-gray-400 text-sm float-left w-full md:w-[unset] md:float-right">
          {/* dislays date: dd/mm/yyyy */}
          {date.getDate().toString().padStart(2, "0")}/
          {date.getMonth() === 0
            ? "01"
            : date.getMonth().toString().padStart(2, "0")}
          /{date.getFullYear().toString()}
        </span>
        <strong className="inline-block">{companyMachine?.name}</strong>
        {/* priority */}
        <Priority prio={ticket.priority} />

        <p>{user?.name}</p>
        <p>{ticket.companyMachineId}</p>
        <button
          className={
            color +
            " rounded font-semibold w-40 md:float-right md:-my-12 float-left my-0"
          }
        >
          {ticket.status}
        </button>
      </button>
      {/* displays pop up message */}
      {active && <PopUp close={handlePopup} ticket={ticket} />}
    </div>
  );
}
