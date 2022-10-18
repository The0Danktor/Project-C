import React from "react"
import { Machine } from "../components/Machine"
import { NavSide } from "../components/Shared/NavSide"

export function Machines() {
  return (
    <div className="flex dark:bg-gray-900 transition duration-300">
      <div>
        <NavSide/>
      </div>
      <div className="flex flex-col items-center w-full">
        <div className="flex flex-col gap-14 h-screen p-32">
          <input type="string" placeholder="Search" className="bg-gray-200 hover:bg-gray-300 dark:bg-gray-200 dark:hover:bg-white text-black caret-black py-4 px-60 rounded-full text-center"/>
          <ul className="flex flex-col gap-6 overflow-y-auto items-center">
            <Machine machineName="Machine 1" />
            <Machine machineName="Machine 2" />
            <Machine machineName="Machine 3" />
            <Machine machineName="Machine 4" />
            <Machine machineName="Machine 5" />
            <Machine machineName="Machine 6" />
            <Machine machineName="Machine 7" />
            <Machine machineName="Machine 8" />
            <Machine machineName="Machine 9" />
            <Machine machineName="Machine 10" />
            <Machine machineName="Machine 11" />
            <Machine machineName="Machine 12" />
            <Machine machineName="Machine 13" />
            <Machine machineName="Machine 14" />
            <Machine machineName="Machine 15" />
            <Machine machineName="Machine 16" />
            <Machine machineName="Machine 17" />
            <Machine machineName="Machine 18" />
            <Machine machineName="Machine 19" />
            <Machine machineName="Machine 20" />
          </ul>
        </div>
      </div>
    </div>
  )
}