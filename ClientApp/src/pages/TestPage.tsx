import { NavSide } from "../components/Shared/NavSide";
import React from "react";
import { ProblemMenu } from "../components/Customer/ProblemMenu";
import { Header } from "../components/Shared/Header";

export function TestPage() {
  return (
    <div className="bg-white dark:bg-gray-900 transition flex duration-300">
      <NavSide />
       {/* <Header /> */}
        <ProblemMenu />
    </div>
  );
}
