import React from "react";
import { NavSide } from "../components/Shared/NavSide";
import { Ticket } from "../components/Shared/Ticket";
// import { AddImage } from "./addImage";
import { Link } from "react-router-dom";

export function TicketPage() {
  const reports = [];
  for (var i = 0; i < 20; i++) {
    reports.push(<Ticket />);
  }
  function Redirect() {}
  return (
    <div className="flex dark:bg-gray-900 transition duration-300">
      <div className="hidden md:flex">
        <NavSide />
      </div>
      <div className="container">
        <div className="grow w-full m-2 md:m-3">
          <strong className="text-2xl">All tickets</strong>
          <Link to="../AddImage">
            <button
              className="border w-full md:w-40 border-gray-300 dark:border-gray-700 dark:hover:bg-gray-700 
          hover:bg-gray-200 dark:text-gray-400 rounded-lg md:ml-3 py-2"
              onClick={Redirect}
            >
              Add Report
            </button>
          </Link>
        </div>

        {reports}
      </div>
    </div>
  );
}
