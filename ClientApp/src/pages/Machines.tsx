import React from "react"
import { Machine } from "../components/Machine"
import { NavSide } from "../components/Shared/NavSide"
import { useNavigate } from "react-router-dom"

export function Machines() {

  const navigate = useNavigate();

  function buttonClick(machineName: string) {
    navigate(machineName);
  };

  return (
    <div className="flex dark:bg-gray-900 transition duration-300">
      <div>
        <NavSide/>
      </div>
      <div className="flex flex-col items-center w-full">
        <div className="flex flex-col gap-14 h-screen p-20">
          <input type="string" placeholder="Search" className="bg-gray-200 hover:bg-gray-300 dark:bg-gray-200 dark:hover:bg-white text-black caret-black py-5 px-96 rounded-full text-center"/>
          <ul className="flex flex-col gap-8 overflow-y-auto items-center border-2 border-gray-100 dark:border-gray-800 p-10 rounded-xl">
            <Machine machineName="Machine 1 " tekenNumber="1" onclick={() => buttonClick("/machineproblems")}/>
            <Machine machineName="Machine 2 " tekenNumber="1" onclick={() => buttonClick("/machineproblems")}/>
            <Machine machineName="Machine 3 " tekenNumber="1" onclick={() => buttonClick("/machineproblems")}/>
            <Machine machineName="Machine 4 " tekenNumber="1" onclick={() => buttonClick("/machineproblems")}/>
            <Machine machineName="Machine 5 " tekenNumber="1" onclick={() => buttonClick("/machineproblems")}/>
            <Machine machineName="Machine 6 " tekenNumber="1" onclick={() => buttonClick("/machineproblems")}/>
            <Machine machineName="Machine 7 " tekenNumber="1" onclick={() => buttonClick("/machineproblems")}/>
            <Machine machineName="Machine 8 " tekenNumber="1" onclick={() => buttonClick("/machineproblems")}/>
            <Machine machineName="Machine 9 " tekenNumber="1" onclick={() => buttonClick("/machineproblems")}/>
            <Machine machineName="Machine 10 " tekenNumber="1" onclick={() => buttonClick("/machineproblems")}/>
          </ul>
        </div>
      </div>
    </div>
  )
}