import React from "react";
import { useState } from "react";
import placeholder from "../../assets/add_picture.png";
import ja from "../../assets/logo.png";
import { Dropdown } from "./Dropdown";
import {ImageGallery} from "./ImageGallery"
import {Button} from "./Button"
import {status, priority} from "./Ticket"

interface information {
  display: boolean,
  status: string,
  date: Date,
  close: any,
  prio: string
}

export function PopUp(props: information) {
  return (
    <div className="bg-opacity-75 bg-gray-800 absolute top-0 left-0 w-full h-screen m-0">
      <div
        className="bg-gray-100 text-black dark:bg-gray-700 dark:text-white max-h-[93vh] md:max-h-[90vh] overflow-y-auto
      md:min-h-[50%] md:w-1/2 md:absolute md:left-1/2 md:-translate-x-1/2 md:top-1/2 md:-translate-y-1/2
      ">
        {/* close button */}
        <button onClick={props.close} className="float-right m-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* dipslays information */}
        <div className="p-3">
          <span className="text-gray-400 text-sm float-left w-full md:w-[unset] md:float-right">
            {/* dislays date: dd/mm/yyyy */}
            Reported: {props.date.getDate().toString().padStart(2, "0")}/
            {props.date.getMonth().toString().padStart(2, "0")}/
            {props.date.getFullYear().toString()}
          </span>
          <strong className="text-2xl block">Machine #3</strong>
          <span>Associated Worker:</span>
          {/* dropdowns */}
          <Dropdown
            selected="Admin"
            info={["Admin", "Worker #1", "Worker #2"]}
          />
          <span>Status: </span>
          <Dropdown
            selected={props.status}
            info={status}
          />
          <span>Priority: </span>
          <Dropdown selected={props.prio} info={priority} />

          {/* displays user information */}
          <div className="md:absolute md:top-11 md:right-28 my-3">
            <strong className="text-xl block">User information</strong>
            <strong>User: </strong>
            <span>user name</span>
            <br />
            <strong>Email: </strong> email@gmail.com
            <br />
            <strong>Phone Number: </strong> 06123456778
            <br />
            <strong>Group: </strong> Admin
          </div>

          {/* dipslays the problem */}
          <strong className="text-xl block">Problem</strong>
          <strong>Problem type: </strong>
          <span>Lorem ipsum</span>
          <br />
          <strong className="">Problem description</strong>
          <ul className="p-[revert] list-disc">
            <li>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            </li>
            <li>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            </li>
            <li>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            </li>
            <li>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            </li>
          </ul>
          
          {/* image gallery */}
          <ImageGallery src={[placeholder, placeholder, placeholder, placeholder, ja, placeholder, placeholder, ja, placeholder, placeholder]} />

          {/* save buttons */}
          <div className="flex flex-row justify-center flex-wrap pt-4">
            <Button value="Save" fun={props.close}/>
            <Button value="Delete" fun={props.close}/>
            <Button value="Add comment" fun={props.close}/>
          </div>
        </div>
      </div>
    </div>
  );
}
