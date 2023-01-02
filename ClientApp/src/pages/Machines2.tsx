import React, { useEffect, useState } from "react";
import { Outlet, useParams } from "react-router-dom";
import { NavSide } from "../components/Shared/NavSide";
import { Header } from "../components/Shared/Header";
import { Link } from "react-router-dom";
import { XMarkIcon, PencilSquareIcon } from "@heroicons/react/24/outline";

export const machines2 = [
  {
    id: 1,
    name: "Machine 1",
    location: "Location 1",
    status: "Active",
    date: "01/01/2021",
  },
  {
    id: 2,
    name: "Machine 2",
    location: "Location 2",
    status: "Active",
    date: "01/01/2021",
  },
  {
    id: 3,
    name: "Machine 3",
    location: "Location 3",
    status: "Active",
    date: "01/01/2021",
  },
  {
    id: 4,
    name: "Machine 4",
    location: "Location 4",
    status: "Active",
    date: "01/01/2021",
  },
  {
    id: 5,
    name: "Machine 5",
    location: "Location 5",
    status: "Active",
    date: "01/01/2021",
  },
  {
    id: 6,
    name: "Machine 6",
    location: "Location 6",
    status: "Active",
    date: "01/01/2021",
  },
  {
    id: 7,
    name: "Machine 7",
    location: "Location 7",
    status: "None",
    date: "01/01/2021",
  },
  {
    id: 8,
    name: "Machine 8",
    location: "Location 8",
    status: "Inactive",
    date: "01/01/2021",
  },
  {
    id: 9,
    name: "Machine 9",
    location: "Location 9",
    status: "Active",
    date: "01/01/2021",
  },
  {
    id: 10,
    name: "Machine 10",
    location: "Location 10",
    status: "Active",
    date: "01/01/2021",
  },
];

//function to change text color depending on status
function statusColor(status: any) {
  if (status === "Active") {
    return "text-green-500";
  } else if (status === "Inactive") {
    return "text-red-500";
  } else {
    return "text-gray-500";
  }
}

//form to add machine and update the page
export const Machines2 = () => {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [status, setStatus] = useState("");
  const [date, setDate] = useState("");
  const [machine, setMachine] = useState(machines2);
  const [id, setId] = useState(11);
  const [error, setError] = useState("");
  const [showError, setShowError] = useState(false);

  //function to add machine
  const addMachine = () => {
    if (name === "" || location === "" || status === "" || date === "") {
      setError("Please fill out all fields");
      setShowError(true);
    } else {
      setMachine([
        ...machine,
        {
          id: id,
          name: name,
          location: location,
          status: status,
          date: date,
        },
      ]);
      setId(id + 1);
      setName("");
      setLocation("");
      setStatus("");
      setDate("");
      setShowError(false);
    }
  };

  //function to hide or show add machine form
  const [isShown, setIsShown] = useState(false);

  const handleClick = () => {
    // 👇️ toggle shown state
    setIsShown((current) => !current);
  };

  //function to delete machine
  const deleteMachine = (id: any) => {
    setMachine(machine.filter((machine) => machine.id !== id));
  };

  return (
    <div className="flex dark:bg-gray-900 w-full transition duration-300">
      <NavSide />
      <div className="grow">
        {/* <Header /> */}
        <div className="container flex flex-col w-full p-4">
          <div className="py-2 align-middle inline-block w-full px-2">
            <div className="w-full m-2 md:m-3">
              <strong className="text-2xl">Machines</strong>
              <button
                className="border w-full md:w-40 border-gray-300 dark:border-gray-700 dark:hover:bg-gray-700 
          hover:bg-gray-200 dark:text-gray-400 rounded-lg md:ml-3 py-2"
                onClick={handleClick}
              >
                Add Machine
              </button>
            </div>

            <div className="shadow overflow-hidden border-b border-gray-200 dark:border-gray-700 lg:rounded-lg">
              <table className="w-full dark:bg-gray-900">
                <thead className="hidden lg:table-header-group bg-white dark:bg-gray-800  dark:text-gray-500">
                  <tr className="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800">
                    <th scope="col" className="pl-6 px-2 py-3">
                      Name
                    </th>
                    <th scope="col" className="px-2 py-3">
                      Location
                    </th>
                    <th scope="col" className="px-2 py-3">
                      Status
                    </th>
                    <th scope="col" className="px-2 py-3">
                      Date
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800 dark:text-gray-400">
                  {machine.map((machine) => (
                    <tr key={machine.id}>
                      <td
                        className="px-2 py-4 whitespace-nowrap lg:table-cell lg:before:content-none block bg-gray-200 lg:bg-transparent"
                        data-header="Name"
                      >
                        <div className="flex items-center justify-center lg:justify-start">
                          <div className="ml-4">
                            <div className="text-sm font-medium ">
                              {machine.name}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td
                        className="px-2 py-4 whitespace-nowrap lg:table-cell lg:before:content-none block before:content-[attr(data-header)] before:ml-2 before:text-sm before:w-3/5 before:float-left"
                        data-header="Location"
                      >
                        <div className="text-sm ">{machine.location}</div>
                      </td>
                      <td
                        className="px-2 py-4 whitespace-nowrap lg:table-cell lg:before:content-none block before:content-[attr(data-header)] before:ml-2 before:text-sm before:w-3/5 before:float-left"
                        data-header="Status"
                      >
                        <div className={statusColor(machine.status) + " text-sm"}>{machine.status}</div>
                      </td>
                      <td
                        className="px-2 py-4 whitespace-nowrap lg:table-cell lg:before:content-none block before:content-[attr(data-header)] before:ml-2 before:text-sm before:w-3/5 before:float-left"
                        data-header="Date"
                      >
                        <div className="text-sm ">{machine.date}</div>
                      </td>
                      <td
                        className="px-2 py-4 whitespace-nowrap lg:table-cell lg:before:content-none block"
                      >
                        <div className="text-sm ">
                          <span className="flex flex-row items-center justify-center lg:justify-start">
                            <button
                              className="flex flex-row w-1/2 lg:w-auto items-center justify-center px-2 py-1 mr-2 font-semibold text-red-900 bg-red-400 rounded-md"
                              onClick={() => deleteMachine(machine.id)}
                            >
                              <XMarkIcon
                                className="w-5 h-5"
                                stroke="currentColor"
                              />
                            </button>
                            <button className="flex flex-row w-1/2 lg:w-auto items-center justify-center px-2 py-1 font-semibold text-cyan-900 bg-cyan-500 rounded-md">
                              <PencilSquareIcon
                                className="w-5 h-5"
                                stroke="currentColor"
                              />
                            </button>
                          </span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        {isShown && (
          <div className="flex flex-col w-2/3 p-5">
            <div className="w-full m-2 md:m-3">
              <strong className="text-2xl">Machines</strong>
            </div>
            <div className="flex flex-col  w-full mt-5">
              <div className="flex flex-col w-full">
                <label className="mb-2 font-bold">Name</label>
                <input
                  className="px-4 py-2 border dark:bg-gray-800 dark:text-gray-400 rounded-md"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="flex flex-col w-full mt-5">
                <label className="mb-2 font-bold">Location</label>
                <input
                  className="px-4 py-2 border dark:bg-gray-800 dark:text-gray-400 rounded-md"
                  type="text"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                />
              </div>
              <div className="flex flex-col w-full mt-5">
                <label className="mb-2 font-bold">Status</label>
                <select
                  className="px-4 py-2 border dark:bg-gray-800 dark:text-gray-400 rounded-md"
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                >
                  <option value="Active">Active</option>
                  <option value="Inactive">Inactive</option>
                </select>
              </div>
              <div className="flex flex-col w-full mt-5">
                <label className="mb-2 font-bold">Date</label>
                <input
                  className="px-4 py-2 border dark:bg-gray-800 dark:text-gray-400 rounded-md"
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                />
              </div>
              <div className="w-full mt-5">
                <button
                className="border w-full md:w-40 border-gray-300 dark:border-gray-700 dark:hover:bg-gray-700 
          hover:bg-gray-200 dark:text-gray-400 rounded-lg md:ml-3 py-2 float-right"
                onClick={addMachine}
              >
                Add Machine
              </button>
              </div>
              
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
