import { current } from "@reduxjs/toolkit";
import React from "react";
import { NavSide } from "../components/Shared/NavSide";
import { Ticket } from "../components/Shared/Ticket";
import { Button } from "../components/Shared/Button";
import { NavSideButton } from "../components/Shared/NavSideButton";
import { AddImage } from "./addImage";
import { Link, LinkProps } from "react-router-dom";

export function TicketPage() {
  const reports = [];
  for (var i = 0; i < 20; i++) {
    reports.push(<Ticket />);
  }
  function Redirect() {
    
  }
  return (
    <div className="flex dark:bg-gray-900 transition duration-300">
      <div className="hidden md:flex">
        <NavSide />
      </div>
      <div className="grow flex flex-row flex-wrap justify-start content-start transition duration-300 dark:bg-gray-800 bg-gray-100 md:h-[89vh] md:m-10 md:rounded-xl md:overflow-auto">
        <div className="grow w-full p-3">
          <strong className="text-2xl">All tickets</strong>
          <Link to="../AddImage"><button className="border w-full md:w-40 border-gray-300 dark:border-gray-700 dark:hover:bg-gray-700 
          hover:bg-gray-200 dark:text-gray-400 rounded-lg ml-3 mb-2 md:mb-[unset] py-2"
          onClick={Redirect}
          >
            Add Report
          </button></Link>

          {/* <NavSideButton
            title="Add Report"
            page="../addImage"
          /> */}
        </div>

        {reports}
      </div>
    </div>
  );
}
