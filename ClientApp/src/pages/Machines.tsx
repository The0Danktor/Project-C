import React from "react"
import { Machine } from "../components/Shared/Machine"
import { NavSide } from "../components/Shared/NavSide"
import { useNavigate } from "react-router-dom"

export function Machines() {

  const navigate = useNavigate();

  function buttonClick(machineName: string) 
  {
    navigate(machineName);
  };

  return (
    <div className="flex dark:bg-gray-900 transition duration-300">
      <div>
        <NavSide/>
      </div>
      <div className="flex flex-col items-center w-full">
        <div className="flex flex-col gap-10 w-full h-screen p-20">
          <div className="flex">
            <input type="string" placeholder="Search" className="bg-gray-200 dark:bg-gray-800 dark:text-white text-black caret-black dark:caret-white py-2 rounded-xl p-8"/>
          </div>
          <ul className="flex flex-col w-full gap-8 overflow-y-auto items-center border-2 border-gray-100 dark:border-gray-800 p-10 rounded-xl">
            <Machine machineName="Machine 1" tekenNumber="1" type="1" onclick={() => buttonClick("/machineproblems/1")}/>
            <Machine machineName="Machine 2" tekenNumber="2" type="2" onclick={() => buttonClick("/machineproblems/1")}/>
            <Machine machineName="Machine 3" tekenNumber="3" type="3" onclick={() => buttonClick("/machineproblems/1")}/>
            <Machine machineName="Machine 4" tekenNumber="4" type="4" onclick={() => buttonClick("/machineproblems/1")}/>
            <Machine machineName="Machine 5" tekenNumber="5" type="5" onclick={() => buttonClick("/machineproblems/1")}/>
            <Machine machineName="Machine 6" tekenNumber="6" type="6" onclick={() => buttonClick("/machineproblems/1")}/>
            <Machine machineName="Machine 7" tekenNumber="7" type="7" onclick={() => buttonClick("/machineproblems/1")}/>
            <Machine machineName="Machine 8" tekenNumber="8" type="8" onclick={() => buttonClick("/machineproblems/1")}/>
            <Machine machineName="Machine 9" tekenNumber="9" type="9" onclick={() => buttonClick("/machineproblems/1")}/>
            <Machine machineName="Machine 10" tekenNumber="10" type="10" onclick={() => buttonClick("/machineproblems/1")}/>
          </ul>
        </div>
      </div>
    </div>
  )
}
