import React from "react";
import { useState } from "react";
import { ExclamationCircleIcon } from "@heroicons/react/24/outline";
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
    <ExclamationCircleIcon stroke={color} className="w-6 h-6 ml-1 inline-block"/>
  );
}
