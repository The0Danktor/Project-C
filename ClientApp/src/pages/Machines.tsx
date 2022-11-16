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

//function to change color depending on status
export function statusColor(status : any) {
    switch (status) {
        case 'Active':
            return "green";
        case 'Inactive':
            return "red";
        case 'None':
            return "yellow";
    }
}
    
//form to add machine and update the page
export const AddMachine = () => {
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
    
    //function to delete machine
    const deleteMachine = (id : any) => {
        setMachine(machine.filter((machine) => machine.id !== id));
    };
    
    return (
        <div className="flex flex-row">
            <NavSide />
            <div className="flex flex-col w-full dark:bg-gray-900 transition duration-300 dark:text-gray-500">
                <Header />
                <div className="flex flex-row justify-between w-full p-5 ">
                    <div className="flex flex-col">
                        <h1 className="text-3xl font-bold">Machines</h1>
                        <h2 className="text-xl font-light">View and manage machines</h2>
                    </div>
                </div>
                <div className="flex flex-col w-full p-5">
                    <div className="flex flex-row justify-between w-full">
                        <div className="flex flex-col">
                            <h1 className="text-2xl font-bold">Add Machine</h1>
                            <h2 className="text-xl font-light">Add a new machine</h2>
                        </div>
                    </div>
                    <div className="flex flex-row justify-between w-full
                    p-5">
                        <div className="flex flex-col">
                            <label className="text-xl font-bold">Name</label>
                            <input
                                className="border-2 border-gray-300 p-2 rounded-md"
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                        <div className="flex flex-col">
                            <label className="text-xl font-bold">Location</label>
                            <input

                                className="border-2 border-gray-300 p-2 rounded-md"
                                type="text"
                                value={location}
                                onChange={(e) => setLocation(e.target.value)}
                            />
                        </div>
                        <div className="flex flex-col">
                            <label className="text-xl font-bold">Status</label>
                            <select
                                className="border-2 border-gray-300 p-2 rounded-md"
                                value={status}
                                onChange={(e) => setStatus(e.target.value)}
                            >
                                <option value="">Select Status</option>
                                <option value="Active">Active</option>
                                <option value="Inactive">Inactive</option>
                                <option value="None">None</option>
                            </select>
                        </div>
                        <div className="flex flex-col">
                            <label className="text-xl font-bold">Date</label>
                            <input
                                className="border-2 border-gray-300 p-2 rounded-md"
                                type="date"
                                value={date}
                                onChange={(e) => setDate(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="flex flex-row justify-between w-full p-5">
                        <div className="flex flex-col">
                            <button
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                                onClick={addMachine}
                            >
                                Add Machine
                            </button>
                        </div>
                    </div>
                    <div className="flex flex-row justify-between w-full p-5">
                        <div className="flex flex-col">
                            {showError ? (
                                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
                                    <strong className="font-bold">Error!</strong>
                                    <span className="block sm:inline">{error}</span>
                                </div>
                            ) : null}
                        </div>
                    </div>
                    <div className="flex flex-row justify-between w-full p-5">
                    </div>
                    <div className="flex flex-row justify-between w-full p-5">
                        <div className="flex flex-col">
                            <table className="table-auto">
                                <thead>
                                    <tr>
                                        <th className="px-8 py-4">Name</th>
                                        <th className="px-8 py-4">Location</th>
                                        <th className="px-8 py-4">Status</th>
                                        <th className="px-8 py-4">Date</th>
                                        <th className="px-8 py-4">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {machine.map((machine) => (
                                        <tr key={machine.id}>
                                            <td className="border px-4 py-2">{machine.name}</td>
                                            <td className="border px-4 py-2">{machine.location}</td>
                                            <td className="border px-4 py-2">{machine.status}</td>
                                            <td className="border px-4 py-2">{machine.date}</td>
                                            <td className="border px-4 py-2">
                                                <button
                                                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                                                    onClick={() => deleteMachine(machine.id)}
                                                >
                                                    Delete
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



    
  
  

