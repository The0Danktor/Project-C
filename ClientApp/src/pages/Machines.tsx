import React from 'react'
import { Machine } from '../components/Machine'

export function Machines() {
  return (
    <div className="flex">

      {/* Sidebar */}
      <div className='w-96 bg-blue-500 h-screen'>

      </div>

      {/* Page container */}
      <div className="flex flex-col items-center w-full p-8">
        <div className="flex flex-col gap-8 h-96">
          <input type="string" placeholder="Enter a machine name" className="bg-gray-300 hover:bg-gray-400 text-white caret-black font-bold py-3 px-40 rounded-full"/>
          <ul className="flex flex-col gap-4 overflow-y-scroll">
            <Machine machineName='Machine 1' />
            <Machine machineName='Machine 2' />
            <Machine machineName='Machine 3' />
            <Machine machineName='Machine 4' />
            <Machine machineName='Machine 5' />
            <Machine machineName='Machine 6' />
            <Machine machineName='Machine 7' />
            <Machine machineName='Machine 8' />
            <Machine machineName='Machine 9' />
            <Machine machineName='Machine 10' />
            <Machine machineName='Machine 11' />
            <Machine machineName='Machine 12' />
            <Machine machineName='Machine 13' />
            <Machine machineName='Machine 14' />
            <Machine machineName='Machine 15' />
          </ul>
        </div>

      </div>
    </div>
  )
}