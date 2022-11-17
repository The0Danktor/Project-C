import React from "react";
import { useState } from "react";
interface information {
  prio: string;
}
export function Priority(props: information) {
  var color = "";
  if (props.prio == "High") {
    color = "red";
  } else if (props.prio == "Middle") {
    color = "orange";
  } else {
    color = "green";
  }
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke={color}
      className="w-6 h-6 ml-1 inline-block"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
      />
    </svg>
  );
}