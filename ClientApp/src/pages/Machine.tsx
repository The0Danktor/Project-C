import React from 'react'

export function Machine() {
  return (
    <div className="mt-96">
      <div className="font-bold ml-36">
        <h1 className="font-bold">Photo Machine1</h1>
        <h1 className="font-bold ml-48">Photo Machine2</h1>
        <h1 className="font-bold ml-96">Photo Machine3</h1>
      </div>

      <button className="bg-blue-500 hover:bg-blue-800 text-white font-bold py-2 px-6 rounded-3xl mt-20 ml-24">
      <h1>Machine1</h1>
      </button>
      
      <button className="bg-blue-500 hover:bg-blue-800 text-white font-bold py-2 px-6 rounded-3xl ml-24">
      <h1>Machine2</h1>
      </button>

      <button className="bg-blue-500 hover:bg-blue-800 text-white font-bold py-2 px-6 rounded-3xl ml-24">
      <h1>Machine3</h1>
      </button>
    </div>
  )
}