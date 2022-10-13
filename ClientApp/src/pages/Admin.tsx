import React from "react";
import { NavSide } from "../components/Shared/NavSide";

export function Admin() {
  return (
    <div className="bg-white dark:bg-gray-900 transition flex duration-300">
      <NavSide />
      <div>
        <h1 className="text-white">Admin</h1>
      </div>
    </div>
  );
}
