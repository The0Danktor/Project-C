import React from "react";
import { NavSide } from "../components/Shared/NavSide";

export function Knowledge() {
  return (
    <div className="bg-white dark:bg-gray-900 transition duration-300 w-screen h-screen flex flex-row">
      <NavSide />
      <div>
        <h1>Knowledge</h1>
      </div>
    </div>
  );
}
