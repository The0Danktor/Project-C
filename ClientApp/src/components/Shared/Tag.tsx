import React from "react";

export function Tag(props: { text: string }) {
  return (
    <p className="px-2 rounded-xl  border-2  text-black dark:text-gray-400 text-sm bg-white border-gray-100 dark:bg-gray-800 dark:border-gray-800 transition duration-300">
      {props.text}
    </p>
  );
}
