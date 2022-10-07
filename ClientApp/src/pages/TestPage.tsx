import { NavSide } from "../components/Customer/NavSide";
import React from 'react'
import { DarkmodeSwitch } from "../components/Shared/DarkmodeSwitch";

export function TestPage() {
  return (
    <div className="bg-white dark:bg-gray-900 w-screen h-screen">
      {/* <NavSide /> */}
      <DarkmodeSwitch />
    </div>
  )
}
