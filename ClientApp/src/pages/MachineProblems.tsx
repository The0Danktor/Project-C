import { NavSide } from "../components/Shared/NavSide";
import React from "react";
import { ProblemMenu } from "../components/Customer/ProblemMenu";
import { useParams } from "react-router-dom";

export function MachineProblems() {
  const { Problem_Id } = useParams();

  return (
    <div className="bg-white dark:bg-gray-900  flex h-screen">
      <NavSide />
      <ProblemMenu Id={Problem_Id}/>
    </div>
  );
}
