import React from "react";
import { NavSide } from "../components/Shared/NavSide";

export function Settings() {
  return (
    <div className="bg-white dark:bg-gray-900 flex">
      <NavSide />
      <div>
        <h1>Settings</h1>
      </div>
    </div>
  );
}
