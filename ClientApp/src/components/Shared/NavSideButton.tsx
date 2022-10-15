import React from "react";
import { Link, LinkProps } from "react-router-dom";

interface NavSideButtonProps {
  title?: string;
  svg?: JSX.Element;
  page: LinkProps["to"];
}

export default function NavSideButton(props: NavSideButtonProps) {
  return (
    <Link
      to={props.page}
      className=" h-10 w-72 flex text-black dark:text-gray-400 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md mx-4 px-4 transition duration-300"
    >
      {props.svg}
      <p className="m-2">{props.title}</p>
    </Link>
  );
}
