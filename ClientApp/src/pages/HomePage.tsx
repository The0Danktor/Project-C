import React from "react";
import { NavSide } from "../components/NavSide";


export function HomePage() {
  return (
    <div>
      <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <NavSide />
      </div>
    </div>
  );
}
