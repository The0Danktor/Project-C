import React from "react";

interface information {
  value: string,
  fun : any
}

export function Button(props: information) {
  return (
    <button
      className=" dark:bg-gray-800 bg-gray-200 hover:bg-gray-300 md:w-40 block m-auto rounded dark:hover:bg-gray-900 
  w-full mb-2 md:mb-[unset] py-2"
  onClick={props.fun}
    >
      {props.value}
    </button>
  );
}
