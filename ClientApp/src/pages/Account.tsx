import React from "react";
import { NavSide } from "../components/Shared/NavSide";

export function Account() {
  return (
    <div className="bg-white dark:bg-gray-900 flex">
      <NavSide />
      <div>
        <h1>Account</h1>
      </div>
    </div>
  );
}
