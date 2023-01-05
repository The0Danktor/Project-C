import React from "react";
import { NavSide } from "../components/Shared/NavSide";
import { Ticket } from "../components/Shared/Ticket";
import { Link } from "react-router-dom";
import { ButtonAdmin } from "../components/Shared/Button";

export function HomePage() {
  const reports = [];
  for (var i = 0; i < 5; i++) {
    reports.push(<Ticket onHomePage={true} />);
  }
  return (
    <div className="flex dark:bg-gray-900 transition duration-300">
      <NavSide />
      <div className="container flex flex-row justify-around p-2">
        <div className="w-1/2">
          <div className="flex flex-row justify-between items-center m-2 md:m-3">
            <strong className="text-2xl">New Tickets</strong>
            <Link to="../Ticket">
              View all tickets {">"}
            </Link>
          </div>
          {reports}
        </div>
        <div className="w-1/2">
          <div className="flex grow flex-row flex-wrap font-semibold text-black dark:text-gray-400 mr-4 transition duration-300">
            {/* button links */}
            <ButtonAdmin linkTo="admin/accounts" title="Our Accounts" bar="bar"/>
            <ButtonAdmin linkTo="admin/machines" title="Our Machines" bar="bar" />
            <ButtonAdmin linkTo="admin/problems" title="History" bar="bar" />
            <ButtonAdmin linkTo="admin/dev" title="placeholder" bar="bar" />
          </div>
        </div>
      </div>
    </div>
  );
}
