import React from "react";
import { NavSide } from "../components/Shared/NavSide";


export function HomePage() {
  return (
    <div>
      <div className="bg-white dark:bg-gray-900 transition flex duration-300">
        <NavSide />
      </div>
    </div>
  );
}

