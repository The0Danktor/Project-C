import React from "react";
import { ProblemOption } from "./ProblemOption";

//https://plainenglish.io/blog/how-to-implement-a-search-bar-in-react-js
export function ProblemMenu() {
  return (
    <div className="border-2 dark:border-gray-800 m-10 w-full rounded-md transition duration-300">
      <div className="border-b-2 dark:border-gray-800 transition duration-300 p-5">
        <p className="text-black dark:text-gray-400 transition duration-300" >Select the option that suits your problem the most</p>
      </div>
      <div>
        <ProblemOption/>
        <ProblemOption/>
        <ProblemOption/>
      </div>
    </div>
  );
}
