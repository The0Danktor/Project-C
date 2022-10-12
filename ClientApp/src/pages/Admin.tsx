import React from "react";
import { NavSide } from "../components/Shared/NavSide";

export function Admin() {
  return (
    <div className="bg-white dark:bg-gray-900 transition duration-300 w-screen h-screen">
      <NavSide />
      <div>
        <h1>Admin</h1>
      </div>
    </div>
  );
}
