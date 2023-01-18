import React, { useEffect, useState } from "react";
import { Machine } from "../components/Shared/Machine";
import { NavSide } from "../components/Shared/NavSide";
import { useLocation } from "react-router-dom";
import { CompanyMachine } from "../Types/types";

interface CustomizedState {
  value: string
}

export function Machines() {
  const [loadingData, setLoadingData] = useState<boolean>();
  const [Machines, setMachine] = useState<CompanyMachine[]>();
  const [error, setError] = useState<string>();

  const fetchData = async () => {
    setLoadingData(true);
    try {
      const response = await (
        await fetch(
          `http://localhost:7162/api/CompanyMachine/GetByCompanyId/`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        )
      ).json();
      setMachine(response);
    } catch (e) {
      console.log(e);
      setError("Unable to retrieve problems and solutions.");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // <Machine machineName="Machine 1" tekenNumber="1" type="1" page="/machineproblems/333baae5-703b-490f-a6af-e9eea762e611"/>
  
  const problem = useLocation();
  const statedProblem = problem.state as CustomizedState;

  return (
    <div className="flex dark:bg-gray-900 transition duration-300">
      <NavSide />
      <div className="flex flex-col items-center w-full">
        <div className="flex flex-col gap-10 w-full h-screen p-10 lg:p-20">
          <div className="flex">
            <input
              type="string"
              placeholder="Search"
              defaultValue={statedProblem != null ? statedProblem.value : ""}
              className="bg-gray-200 dark:bg-gray-800 dark:text-white text-black caret-black dark:caret-white py-2 rounded-xl grow lg:grow-0 pl-8"
            />
          </div>
          <ul className="flex flex-col w-full gap-8 overflow-y-auto items-center border-2 border-gray-100 dark:border-gray-800 p-10 rounded-xl">
            {Machines !== undefined ? (
              <>
                {Machines.map((machine: CompanyMachine) => (
                  <Machine
                    key={machine.id}
                    machineName={machine.name}
                    tekenNumber={"asdf"}
                    type={machine.type}
                    page={`/machineproblems/${machine.machineId}`}
                  />
                ))}
              </>
            ) : (
              <div>Als er errors zijn hier iets neerzetten {" :)"}</div>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}
