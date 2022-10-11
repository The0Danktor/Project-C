import React from 'react'
import logo from '../assets/logo.png'

export function Ticket() {
  return (
    <div className="flex flex-row">
      {/* flex flex-col border-r w-fit h-screen pr-4 px-4 */}
      <div className="flex flex-col border-r w-fit h-screen pr-4 px-4">
        <a href="#"><img className="h-36 w-auto" src={logo}/></a>
        <a href="#">My profile</a>
        <a href="#">Knowledge page</a>
        <a href="#">All reports</a>
        <a href="#">Add accounts</a>
        <a href="#">Settings</a>
        <a href="#">Log out</a>
      </div>
      <div className="">
        <div className="border h-1/4 w-full">
          <p>Title</p>
          <p>Owner</p>
          <p>Description</p>

          <span>17 December, 2022</span>
          <button>New</button>
        </div>
      </div>
    </div>
  )
}
