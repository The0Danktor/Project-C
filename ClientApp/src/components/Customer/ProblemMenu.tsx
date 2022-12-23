import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import React, { useEffect, useState } from "react";
import { ProblemOption } from "./ProblemOption";
import { Problem ,Machine } from "../../Types/types";

//https://plainenglish.io/blog/how-to-implement-a-search-bar-in-react-js
interface Prop {
  Id?: string;
}
//`http://localhost:7162/api/${Id}/Solution`
export function ProblemMenu({ Id }: Prop) {
  const [loadingData, setLoadingData] = useState<boolean>();
  const [problems, setProblems] = useState<Problem[]>();
  const [error, setError] = useState<string>();

  const [machine, setMachine] = useState<Machine>();

  const fetchMachine = async () => {
    try {
      const response = await (
        await fetch(`http://localhost:7162/api/Machine/${Id}`)
      ).json();
      setMachine(response);
    } catch (e) {
      console.log(e);
      setError("Unable to retrieve machine.");
    }
  };

  const fetchData = async () => {
    setLoadingData(true);
    try {
      const response = await (
        await fetch(`http://localhost:7162/api/Problem/${Id}/Solution`)
      ).json();
      setProblems(response);
    } catch (e) {
      console.log(e);
      setError("Unable to retrieve problems and solutions.");
    }
  };

  useEffect(() => {
    fetchData();
    fetchMachine();
  }, []);

  return (
    <div className="w-full p-10 overflow-y-scroll">
      <h1 className="text-black dark:text-gray-400 text-xl">
        Select the option that suits your problem the most
      </h1>
      {/*//TODO vergrootglas icon toevoegen */}
      <input
        type="text"
        placeholder="Search"
        className="w-96 my-6 border-2 rounded-md focus:outline-none dark:bg-gray-900 dark:border-gray-800 px-3 py-2 dark:text-gray-400 dark:placeholder:text-gray-500 transition duration-300"
      />
      <div className="border-x-2 border-t-2 dark:border-gray-800  w-full rounded-md transition duration-300">
        <>
          {problems !== undefined && machine !== undefined ? (
            <div>
            {problems.map((problem: Problem) => (
              <ProblemOption 
                key={problem.id}
                problem={problem}
                machineName={machine.name}
              />
            ))}
            </div>
          ) : (
            <div>Als er errors zijn hier iets neerzetten {" :)"}</div>
          )}
        </>
      </div>
    </div>
  );
}
