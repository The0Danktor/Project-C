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
            solved: "25"
        },
        {
            id: 2,
            name: "Jane Doe",
            group: "Admin",
            email: "x",
            phone: "1234567890",
            problems: "37",
            solved: "25"
        },
        {
            id: 3,
            name: "John Smith",
            group: "User",
            email: "x",
            phone: "1234567890",
            problems: "37",
            solved: "25"
        },
        {
            id: 4,
            name: "Jane Smith",
            group: "User",
            email: "x",
            phone: "1234567890",
            problems: "37",
            solved: "25"
        },
        {
            id: 5,
            name: "John Jones",
            group: "User",
            email: "x",
            phone: "1234567890",
            problems: "37",
            solved: "25"
        },
        {
            id: 6,
            name: "Jane Jones",
            group: "User",
            email: "x",
            phone: "1234567890",
            problems: "37",
            solved: "25"
        },
        {
            id: 7,
            name: "John Doe",
            group: "Admin",
            email: "x",
            phone: "1234567890",
            problems: "37",
            solved: "25"
        },
        {
            id: 8,
            name: "Jane Doe",
            group: "Admin",
            email: "x",
            phone: "1234567890",
            problems: "37",
            solved: "25"
        },
        {
            id: 9,
            name: "John Smith",
            group: "User",
            email: "x",
            phone: "1234567890",
            problems: "37",
            solved: "25"
        },
        {
            id: 10,
            name: "Jane Smith",
            group: "User",
            email: "x",
            phone: "1234567890",
            problems: "37",
            solved: "25"
        },
    ];
    return (
        <div className="flex bg-white dark:bg-gray-900 transition duration-300">
      <NavSide />
      <div>
        <Header />
        <div className="flex flex-col p-2 w-screen">
          <div className="-my-2 overflow-x-auto mx-2">
            <div className="py-2 align-middle inline-block min-w-full px-2">
              <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50 dark:bg-gray-900 dark:text-gray-500">
                    <tr>
                      <th
                        scope="col"
                        className="px-2 py-3 text-left text-xs font-medium dark:text-gray-500 uppercase tracking-wider"
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
                  <tbody className="bg-white divide-y divide-gray-200">
                    {users.map((user) => (
                      <tr key={user.id}>
                        <td className="px-2 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="flex-shrink-0 h-10 w-10">
                              <img
                                className="h-10 w-10 rounded-full"
                                src="https://images.unsplash.com/photo-1579544882976-5a6f5d6f5b6a?ixlib=rb-1.2.1&ixid
                                =eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                                alt=""
                                />
                            </div>
                            <div className="ml-4">
                                <div className="text-sm font-medium text-gray-900">
                                    {user.name}
                                </div>
                            </div>
                            </div>
                        </td>
                        <td className="px-2 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-900">
                                {user.group}
                            </div>
                        </td>
                        <td className="px-2 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-900">
                                {user.email}
                            </div>
                        </td>
                        <td className="px-2 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-900">
                                {user.phone}
                            </div>
                        </td>
                        <td className="px-2 py-4 whitespace-nowrap">

                            <div className="text-sm text-gray-900">
                                {user.problems}
                            </div>
                        </td>
                        <td className="px-2 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-900">
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

