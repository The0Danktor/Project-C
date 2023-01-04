import React from "react";
import { NavSide } from "../components/Shared/NavSide";
import { Ticket } from "../components/Shared/Ticket";
import { Link } from "react-router-dom";

export function HomePage() {
  const reports = [];
  for (var i = 0; i < 5; i++) {
    reports.push(<Ticket />);
  }
  return (
    <div className="flex dark:bg-gray-900 transition duration-300">
      <NavSide />
      <div className="container">
        <div className="flex flex-row justify-between items-center w-1/2 m-2 md:m-3">
          <strong className="text-2xl">New Tickets</strong>
          <Link to="../Ticket" className="mr-6"> View all tickets {'>'}</Link>
        </div>
        {reports}
      </div>
    </div>
  );
}

