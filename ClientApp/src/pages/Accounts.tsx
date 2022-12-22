import React from "react";
import { Outlet } from "react-router-dom";
import { NavSide } from "../components/Shared/NavSide";
import { Header } from "../components/Shared/Header";
import { Link } from "react-router-dom";
import { useState } from "react";

export const Accounts = () => {
    //create 10 user accounts with id, name, group, email and phonenumbers
    const users = [
        {
            id: 1,
            name: "John Doe",
            group: "Admin",
            email: "x",
            phone: "1234567890",
            problems: "37",
            solved: "25",
            workGroup: "Viscon x"
        },
        {
            id: 2,
            name: "Jane Doe",
            group: "Admin",
            email: "x",
            phone: "1234567890",
            problems: "37",
            solved: "25",
            workGroup: "Viscon x"
        },
        {
            id: 3,
            name: "John Smith",
            group: "User",
            email: "x",
            phone: "1234567890",
            problems: "37",
            solved: "25",
            workGroup: "Viscon x"
        },
        {
            id: 4,
            name: "Jane Smith",
            group: "User",
            email: "x",
            phone: "1234567890",
            problems: "37",
            solved: "25",
            workGroup: "Viscon x"
        },
        {
            id: 5,
            name: "John Jones",
            group: "User",
            email: "x",
            phone: "1234567890",
            problems: "37",
            solved: "25",
            workGroup: "Viscon x"
        },
        {
            id: 6,
            name: "Jane Jones",
            group: "User",
            email: "x",
            phone: "1234567890",
            problems: "37",
            solved: "25",
            workGroup: "Viscon x"
        },
        {
            id: 7,
            name: "John Doe",
            group: "Admin",
            email: "x",
            phone: "1234567890",
            problems: "37",
            solved: "25",
            workGroup: "Viscon x"
        },
        {
            id: 8,
            name: "Jane Doe",
            group: "Admin",
            email: "x",
            phone: "1234567890",
            problems: "37",
            solved: "25",
            workGroup: "Viscon x"
        },
        {
            id: 9,
            name: "John Smith",
            group: "User",
            email: "x",
            phone: "1234567890",
            problems: "37",
            solved: "25",
            workGroup: "Viscon x"
        },
        {
            id: 10,
            name: "Jane Smith",
            group: "User",
            email: "x",
            phone: "1234567890",
            problems: "37",
            solved: "25",
            workGroup: "Viscon x"
        },
    ];
    return (
        <div className="flex bg-white dark:bg-gray-900 w-full transition duration-300">
      <NavSide />
      <div className="w-full">
        <Header />
        <div className="flex flex-col w-full p-4">
          <div className="">
            <div className="py-2 align-middle inline-block w-2/3 px-2">
              <div className="shadow overflow-hidden border-b border-gray-200 dark:border-gray-700 sm:rounded-lg">
                <table className="w-full divide-y dark:bg-gray-900 divide-gray-200">
                  <thead className="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800  dark:text-gray-500">
                    <tr>
                      <th
                        scope="col"
                        className="px-2 py-3 text-left text-xs font-medium dark:text-gray-400 uppercase tracking-wider"
                      >
                        Name
                      </th>
                      <th
                        scope="col"
                        className="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Group
                      </th>
                      <th
                        scope="col"
                        className="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Workgroup
                      </th>
                      <th
                        scope="col"
                        className="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Email
                      </th>
                      <th
                        scope="col"
                        className="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Phone
                      </th>
                      <th
                        scope="col"
                        className="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Problems
                      </th>
                      <th
                        scope="col"
                        className="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Solved
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800 dark:text-gray-400">
                    {users.map((user) => (
                      <tr key={user.id}>
                        <td className="px-2 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="ml-4">
                                <div className="text-sm font-medium ">
                                    {user.name}
                                </div>
                            </div>
                            </div>
                        </td>
                        <td className="px-2 py-4 whitespace-nowrap">
                            <div className="text-sm ">
                                {user.group}
                            </div>
                        </td>
                        <td className="">
                            <div className="text-sm ">
                                {user.workGroup}
                            </div>
                        </td>
                        <td className="px-2 py-4 whitespace-nowrap">
                            <div className="text-sm ">
                                {user.email}
                            </div>
                        </td>
                        <td className="px-2 py-4 whitespace-nowrap">
                            <div className="text-sm ">
                                {user.phone}
                            </div>
                        </td>
                        <td className="">

                            <div className="text-sm ">
                                {user.problems}
                            </div>
                        </td>
                        <td className="">
                            <div className="text-sm ">
                                {user.solved}
                            </div>
                        </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
            </div>
            </div>
        </div>
    </div>
</div>
    );
}

