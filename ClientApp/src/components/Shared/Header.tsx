import React from "react";

export function Header() {
  return (
    <div className="flex flex-col w-full">
      <div className="flex justify-between w-full py-3 px-3 border-b-2 border-gray-100 dark:border-gray-800 transition duration-300">
        <p>Welcome User</p>
      </div>
    </div>
  );
}
