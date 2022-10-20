import { current } from "@reduxjs/toolkit";
import React from "react";
import { NavSide } from "../components/Shared/NavSide";
import { Ticket } from "../components/Shared/Ticket";
import { PopUp } from "../components/Shared/PopUp";

export function TicketPage() {
  var reports = [];
  for (var i = 0; i < 10; i++) {
    reports.push(<Ticket />);
  }
  return (
    <div className="flex dark:bg-gray-900 transition duration-300 phone:w-screen">
      <div className="phone:hidden">
        <NavSide />
      </div>

      <div className="grow flex flex-row flex-wrap justify-start content-start transition duration-300 dark:bg-gray-800 bg-gray-100 h-[89vh] m-10 rounded-xl overflow-auto
      phone:h-screen phone:m-0">
        {reports}
      </div>
    </div>
  );
}
