import React from 'react'

export function Machine() {
  return (
    <div className="flex">
      <div className="flex-col border-blue-500 border-l-8 border-t-8 border-b-8 border-r-8 ml-96 mt-40">

          <div className="flex mt-16 ml-20">
            <input type="string" className="bg-slate-300 hover:bg-slate-400 text-white caret-black font-bold py-3 px-24 rounded-3xl"/>
          </div>

        <div className="flex space-y-4 mt-16 mb-16 ml-20 mr-20 overflow-y-scroll list-none">
        <ul>
          <li> 
          <div>
            <button className="bg-blue-500 hover:bg-blue-800 text-white font-bold py-3 px-40 rounded-3xl mb-4">
            Machine1
            </button>
          </div>
          </li>

          <li>
          <div>
            <button className="bg-blue-500 hover:bg-blue-800 text-white font-bold py-3 px-40 rounded-3xl mb-4">
            Machine2
            </button>
          </div>
          </li>

          <li>
          <div>
            <button className="bg-blue-500 hover:bg-blue-800 text-white font-bold py-3 px-40 rounded-3xl mb-4">
            Machine3
            </button>
          </div>
          </li>

          <li>
          <div>
            <button className="bg-blue-500 hover:bg-blue-800 text-white font-bold py-3 px-40 rounded-3xl mb-4">
            Machine4
            </button>
          </div>
          </li>

          <li>
          <div>
            <button className="bg-blue-500 hover:bg-blue-800 text-white font-bold py-3 px-40 rounded-3xl mb-4">
            Machine5
            </button>
          </div>
          </li>

          <li>
          <div>
            <button className="bg-blue-500 hover:bg-blue-800 text-white font-bold py-3 px-40 rounded-3xl mb-4">
            Machine6
            </button>
          </div>
          </li>

          <li>
          <div>
            <button className="bg-blue-500 hover:bg-blue-800 text-white font-bold py-3 px-40 rounded-3xl mb-4">
            Machine7
            </button>
          </div>
          </li>

          <li>
          <div>
            <button className="bg-blue-500 hover:bg-blue-800 text-white font-bold py-3 px-40 rounded-3xl mb-4">
            Machine8
            </button>
          </div>
          </li>

          <li>
          <div>
            <button className="bg-blue-500 hover:bg-blue-800 text-white font-bold py-3 px-40 rounded-3xl mb-4">
            Machine9
            </button>
          </div>
          </li>

          <li>
          <div>
            <button className="bg-blue-500 hover:bg-blue-800 text-white font-bold py-3 px-40 rounded-3xl">
            Machine10
            </button>
          </div>
          </li>
        </ul>
        </div>

      </div>
    </div>
  )
}