import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import React, { useState } from "react";
import { ProblemAddButton } from "./ProblemAddButton";
import { ProblemList } from "./ProblemList";

export function ProblemMenu() {

  const [machineId, setMachineId] = useState("");
  const [description, setDescription] = useState("");

  const postProblem = async () => {
    const problemInfo = {machineId, description};

    await fetch("https://localhost:7162/api/Problem", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(problemInfo)
    })
    .then(response => {
      console.log(response)
    })
    .catch(error => {
      console.log(error);
    })
  }

  return (
    <div className="w-full p-10 overflow-y-scroll">
      <h1 className="text-black dark:text-gray-400 text-xl">
        Select the option that suits your problem the most
      </h1>
      {/*//TODO vergrootglas icon toevoegen */}
      <input type="text"  placeholder="Search" className="w-96 my-6 border-2 rounded-md focus:outline-none dark:bg-gray-900 dark:border-gray-800 px-3 py-2 dark:text-gray-400 dark:placeholder:text-gray-500 transition duration-300" />
      <div className="border-x-2 border-t-2 dark:border-gray-800  w-full rounded-md transition duration-300">
        <form>
          <div>
            <input type="text" name="id" value={machineId} onChange={x => setMachineId(x.target.value)}/>
          </div>
          <div>
            <input type="text" name="description" value={description} onChange={x => setDescription(x.target.value)}/>
          </div>
        </form>
        <ProblemAddButton onclick={() => postProblem()}/>
      </div>
    </div>
  );
}