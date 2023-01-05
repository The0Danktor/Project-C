import React from "react";
import { Link } from "react-router-dom";

interface information {
  value: string;
  fun?: any;
}
interface AdminInformation {
  linkTo: string;
  title: string;
  bar: string;
}

export function Button(props: information) {
  return (
    <button
      className=" dark:bg-gray-800 bg-gray-200 md:w-40 block m-auto rounded dark:hover:bg-gray-900 hover:bg-gray-200
  w-full mb-2 md:mb-[unset] py-2"
      onClick={props.fun}
    >
      {props.value}
    </button>
  );
}

export function ButtonAdmin(props: AdminInformation) {
  return (
    <Link
      to={props.linkTo}
      className="text-center border border-gray-300 font-semibold
    dark:border-gray-700 dark:hover:bg-gray-700 hover:bg-gray-200 
    dark:text-gray-400 rounded-lg text-2xl py-2 mt-5 lg:mt-0 grow min-w-[15rem]"
    >
      <p className="mt-2">{props.title}</p>
      <h1 className="m-12 mb-4 xl:mb-4 font-semibold text-3xl text-black dark:text-gray-400">
        {props.bar}
      </h1>
    </Link>
  );
}
