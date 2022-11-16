import { current } from "@reduxjs/toolkit";
import React from "react";
import { NavSide } from "../components/Shared/NavSide";
import { Ticket } from "../components/Shared/Ticket";

export function TicketPage() {
  return (
    <div className="flex dark:bg-gray-900 transition duration-300">
      <NavSide />
      <Ticket />
    </div>
  );
}
