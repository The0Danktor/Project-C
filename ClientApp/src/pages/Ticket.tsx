import { current } from "@reduxjs/toolkit";
import React from "react";
import { NavSide } from "../components/Shared/NavSide";
import { Ticket } from "../components/Shared/Ticket";

export function TicketPage() {
  var reports = [];
  for (var i = 0; i < 20; i++) {
    reports.push(
      <Ticket />
    )
  }
  return (
    <div className="flex dark:bg-gray-900 transition duration-300">
      <NavSide />
      <div className="grow flex flex-row flex-wrap justify-start content-start transition duration-300 dark:bg-gray-800 bg-slate-100  h-[42rem] m-10 rounded-xl overflow-auto">
      {/* <div className="grow flex flex-col transition duration-300 dark:bg-slate-800 bg-slate-100  h-[42rem] m-10 rounded-xl overflow-auto"> */}
        {reports}
      </div>
    </div>
  );
}
