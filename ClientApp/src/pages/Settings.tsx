import React from "react";
import { NavSide } from "../components/Shared/NavSide";

export function Settings() {
  return (
    <div className="bg-white dark:bg-gray-900 transition flex duration-300">
      <NavSide />
      <div>
        <h1>Settings</h1>
      </div>
    </div>
  );
}
