import React from "react";
import { Outlet } from "react-router-dom";
import { NavSide } from "../components/Shared/NavSide";
import { Header } from "../components/Shared/Header";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

//display the history in a table with colorcodud status and priority
export const AdminHistory = () => {
  const history = [
    {
      id: 1,
      associatedWorker: "John Doe",
      date: "2021-01-01",
      time: "10:00",
      description: "lorem ipsum dolor sit amet",
      status: "Pending",
      priority: "High",
    },
    {
      id: 2,
      associatedWorker: "John Doe",
      date: "2021-01-01",
      time: "10:00",
      description: "lorem ipsum dolor sit amet",
      status: "Resolved",
      priority: "Medium",
    },
    {
      id: 3,
      associatedWorker: "John Doe",
      date: "2021-01-01",
      time: "10:00",
      description: "lorem ipsum dolor sit amet",
      status: "In Progress",
      priority: "Low",
    },
    {
      id: 4,
      associatedWorker: "John Doe",
      date: "2021-01-01",
      time: "10:00",
      description: "lorem ipsum dolor sit amet",
      status: "Pending",
      priority: "High",
    },
    {
      id: 5,
      associatedWorker: "John Doe",
      date: "2021-01-01",
      time: "10:00",
      description: "lorem ipsum dolor sit amet",
      status: "Resolved",
      priority: "Medium",
    },
  ];

  //function to color code the status and priority
  function colorCodeStatus(status: any) {
    if (status === "Pending") {
      return "bg-cyan-500 text-cyan-900";
    } else if (status === "Resolved") {
      return "bg-green-500 text-green-800";
    } else if (status === "In Progress") {
      return "bg-yellow-300 text-yellow-800";
    }
  }
  function colorCodePriority(priority: any) {
    if (priority === "High") {
      return "bg-red-400 text-red-900";
    } else if (priority === "Medium") {
      return "bg-yellow-300 text-yellow-800";
    } else if (priority === "Low") {
      return "bg-green-500 text-green-800";
    }
  }
  return (
    <div className="flex dark:bg-gray-900 w-full">
      <NavSide />
      <div className="grow">
        {/* <Header /> */}
        <div className="container flex flex-col w-full p-2">
          <div className="py-2 align-middle inline-block w-full px-2">
            <div className=" w-full m-2 pb-3 lg:m-3">
              <strong className="text-2xl">Current And Past Problems</strong>
            </div>

            <div className="shadow overflow-hidden border-b border-gray-200 dark:border-gray-700 lg:rounded-lg">
              <table className="w-full dark:bg-gray-900">
                <thead className="hidden lg:table-header-group bg-white dark:bg-gray-800  dark:text-gray-500">
                  <tr className="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800">
                    <th scope="col" className="pl-6 px-2 py-3">
                      ID
                    </th>
                    <th scope="col" className="px-2 py-3">
                      Associated Worker
                    </th>
                    <th scope="col" className="px-2 py-3">
                      Date
                    </th>
                    <th scope="col" className="px-2 py-3">
                      Time
                    </th>
                    <th scope="col" className="px-2 py-3">
                      Description
                    </th>
                    <th scope="col" className="px-2 py-3">
                      Status
                    </th>
                    <th scope="col" className="px-2 py-3">
                      Priority
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800 dark:text-gray-400">
                  {history.map((history) => (
                    <tr key={history.id}>
                      <td
                        className="px-2 py-4 whitespace-nowrap lg:table-cell lg:before:content-none block bg-gray-200 dark:bg-gray-700 lg:!bg-transparent"
                        data-header="ID"
                      >
                        <div className="flex items-center justify-center lg:justify-start">
                          <div className="ml-4">
                            <div className="text-sm font-medium ">
                              {history.id}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td
                        className="px-2 py-4 whitespace-nowrap lg:table-cell lg:before:content-none block before:content-[attr(data-header)] before:ml-2 before:text-sm before:w-3/5 before:float-left"
                        data-header="Associated Worker"
                      >
                        <div className="text-sm ">
                          {history.associatedWorker}
                        </div>
                      </td>
                      <td
                        className="px-2 py-4 whitespace-nowrap lg:table-cell lg:before:content-none block before:content-[attr(data-header)] before:ml-2 before:text-sm before:w-3/5 before:float-left"
                        data-header="Data"
                      >
                        <div className="text-sm ">{history.date}</div>
                      </td>
                      <td
                        className="px-2 py-4 whitespace-nowrap lg:table-cell lg:before:content-none block before:content-[attr(data-header)] before:ml-2 before:text-sm before:w-3/5 before:float-left"
                        data-header="Time"
                      >
                        <div className="text-sm ">{history.time}</div>
                      </td>
                      <td
                        className="px-2 py-4 lg:max-w-[20px] lg:table-cell lg:before:content-none block before:content-[attr(data-header)] before:ml-2 before:text-sm before:w-3/5 before:float-left"
                        data-header="Description"
                      >
                        <div className="text-sm ml-[62%] lg:ml-0 break-all">{history.description}</div>
                      </td>
                      <td
                        className="px-2 py-4 text-sm whitespace-nowrap lg:table-cell lg:before:content-none block before:content-[attr(data-header)] before:ml-2 before:text-sm before:w-3/5 before:float-left"
                        data-header="Status"
                      >
                        <button
                          className={
                            colorCodeStatus(history.status) +
                            " rounded px-2 py-1 w-24 font-semibold"
                          }
                          disabled
                        >
                          {history.status}
                        </button>
                      </td>
                      <td
                        className="px-2 py-4 text-sm whitespace-nowrap lg:table-cell lg:before:content-none block before:content-[attr(data-header)] before:ml-2 before:text-sm before:w-3/5 before:float-left"
                        data-header="Priority"
                      >
                        <button
                          className={
                            colorCodePriority(history.priority) +
                            " rounded px-2 py-1 w-24 font-semibold"
                          }
                          disabled
                        >
                          {history.priority}
                        </button>
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
  );
};
