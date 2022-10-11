import React from 'react'

export function Machine() {
  return (
    <div className="flex-cols border-blue-500 border-t-8 border-b-8 border-l-8 border-r-8">
      <div className="flex flex-col border-blue-500 border-l-8 border-t-8 border-b-8 border-r-8 space-y-4 ml-4 mb-4 mt-4">
        <div>
          <button className="bg-blue-500 hover:bg-blue-800 text-white font-bold py-2 px-6 rounded-3xl">
          <h1>Machine1</h1>
          </button>
        </div>

        <div>
          <button className="bg-blue-500 hover:bg-blue-800 text-white font-bold py-2 px-6 rounded-3xl">
          <h1>Machine2</h1>
          </button>
        </div>

        <div>
          <button className="bg-blue-500 hover:bg-blue-800 text-white font-bold py-2 px-6 rounded-3xl">
          <h1>Machine3</h1>
          </button>
        </div>
      </div>
    </div>
  )
}