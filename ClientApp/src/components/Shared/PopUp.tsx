import React from "react";
import { useState } from "react";

interface information {
  display: boolean;
  status: string;
  date: Date;
}
export function PopUp(props: information) {
//   const [_, setActive] = useState(false);
  const close = () => {
//     setActive(!props.display);
  };
  return (
    <div
      className="bg-opacity-75 bg-gray-800 absolute top-0 left-0 w-screen h-screen m-0"
      style={{ display: props.display ? "block" : "none" }}
    >
      <div
        className="bg-gray-100 text-black dark:bg-gray-700 dark:text-white h-1/2 w-1/2 absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2
      phone:w-full phone:h-full"
      >
        <button onClick={close} className="float-right m-3">
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
        <div className="m-3">
          <strong className="text-2xl">Machine #3</strong>
          <p>Status: {props.status}</p>
          <p>Date: {props.date.getDate().toString().padStart(2, "0")}/
        {props.date.getMonth().toString().padStart(2, "0")}/
        {props.date.getFullYear().toString()}</p>
        </div>
      </div>
    </div>
  );
}
