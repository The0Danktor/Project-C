import { NavSide } from "../components/Shared/NavSide";
import React from "react";
import { ProblemMenu } from "../components/Customer/ProblemMenu";
import { Disclosure, Transition } from "@headlessui/react";

export function TestPage() {
  return (
    <div className="bg-white dark:bg-gray-900 transition flex duration-300">
      <NavSide />
      <div /*center this div */ className="mx-auto flex items-center">
        <h1>Your are:</h1>
        <h1>With email:</h1>
        <h1>And phone:</h1>
        <h1>From Company:</h1>
      </div>
    </div>
  );
}
