import { Link, LinkProps } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { Tag } from "./Tag";

type MachineProps = {
  machineName: string;
  type: string;
  page: LinkProps["to"];
};

export function Machine({
  machineName,
  type,
  page,
}: MachineProps) {
  return (
    <li key={machineName} className="w-full">
      <Link
        to={page}
        className="flex gap-1 px-8 py-5 items-center justify-between w-full bg-gray-200 dark:bg-gray-800 text-black dark:text-gray-300 dark:hover:text-white hover:bg-gray-300 dark:hover:bg-gray-700 rounded-xl border-2 border-gray-300 dark:border-gray-700"
      >
        <div className="px-5 py-2 rounded-xl border-2 border-gray-300 dark:border-gray-700">
          {machineName}
        </div>
        <div className="flex gap-2">
          <Tag text={`Type: ${type}`} />
        </div>
      </Link>
    </li>
  );
}
