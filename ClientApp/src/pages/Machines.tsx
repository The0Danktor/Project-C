import React, { useEffect, useState } from "react";
import { Outlet, useParams } from "react-router-dom";
import { NavSide } from "../components/Shared/NavSide";
import { Header } from "../components/Shared/Header";
import { Link } from "react-router-dom";


export const machines = [
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
function statusColor(status : any) {
    if (status === "Active") {
        return "text-green-500";
    } else if (status === "Inactive") {
        return "text-red-500";
    } else {
        return "text-gray-500";
    }
}
    
//form to add machine and update the page
export const Machines = () => {
    const [name, setName] = useState("");
    const [location, setLocation] = useState("");
    const [status, setStatus] = useState("");
    const [date, setDate] = useState("");
    const [machine, setMachine] = useState(machines);
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
    setIsShown(current => !current);
    };



    //function to delete machine
    const deleteMachine = (id : any) => {
        setMachine(machine.filter((machine) => machine.id !== id));
    };
    
    return (
        <div className="flex flex-row">
            <NavSide />
            <div className="flex flex-col w-full dark:bg-gray-900 transition duration-300 dark:text-gray-500">
                <Header />
                <div className="flex flex-col w-full p-5">
                    <div className="flex flex-col w-2/3 text-3xl dark:bg-gray-900 transition duration-300 dark:text-gray-500 my-2 items-center">
                        <h1>Machines</h1>
                    </div>
                    <div className="flex flex-row justify-start">
                        <button
                            className="flex flex-row justify-center px-5 py-2 text-white bg-green-500 rounded-md"
                            //onclick show form
                            onClick={handleClick}
                        >
                            <svg
                                className="w-5 h-5 mr-2"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M12 4v16m8-8H4"
                                ></path>
                            </svg>
                            <span>Add Machine</span>
                        </button>
                    </div>
                    <div className="flex flex-col  w-2/3 mt-5">
                        <div className="flex flex-row justify-between px-5 py-2 dark:bg-gray-800 dark:text-gray-400 bg-gray-100 rounded-md">
                            <span className="font-bold">Name</span>
                            <span className="font-bold">Location</span>
                            <span className="font-bold">Status</span>
                            <span className="font-bold">Date</span>
                            <span className="font-bold">Actions</span>
                        </div>
                        {machine.map((machine) => (
                            <div
                                className="flex flex-row justify-between px-5 py-2 mt-2 dark:bg-gray-800 dark:text-gray-400 bg-white rounded-md"
                                key={machine.id}
                            >
                                <span>{machine.name}</span>
                                <span>{machine.location}</span>
                                <span className={statusColor(machine.status)}>
                                    {machine.status}
                                </span>
                                <span>{machine.date}</span>
                                <span className="flex flex-row items-center">
                                    <button
                                        className="flex flex-row items-center justify-center px-2 py-1 mr-2 text-white bg-red-500 rounded-md"
                                        onClick={() =>
                                            deleteMachine(machine.id)
                                        }
                                    >
                                        <svg
                                            className="w-5 h-5"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                                        </svg>
                                    </button>
                                    <button

                                        className="flex flex-row items-center justify-center px-2 py-1 text-white bg-blue-500 rounded-md"
                                    >
                                        <svg

                                            className="w-5 h-5"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                                        </svg>
                                    </button>
                                </span>
                            </div>
                        ))}
                    </div>
                    
                </div>
                {isShown && (
                <div className="flex flex-col w-2/3 p-5">
                    <div className="flex flex-row justify-between">
                        <h1 className="text-3xl font-bold">Add Machine</h1>
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
                        <div className="flex flex-row justify-end w-full mt-5">
                            <button
                                className="flex flex-row items-center justify-center px-5 py-2 text-white bg-blue-500 rounded-md"
                                onClick={addMachine}
                            >
                                <svg
                                    className="w-5 h-5 mr-2"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M12 4v16m8-8H4"
                                    ></path>
                                </svg>
                                <span>Add Machine</span>
                            </button>
                        </div>
                    </div>
                </div>)}
            </div>
        </div>
    );
}
