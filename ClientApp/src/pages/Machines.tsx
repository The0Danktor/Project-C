import React, { useEffect, useState } from "react";
import { Outlet, useParams } from "react-router-dom";
import { NavSide } from "../components/Shared/NavSide";
import { Header } from "../components/Shared/Header";
import { Link } from "react-router-dom";

export function Machines() {
      //create 10 machines with id, name, location, status and date
  const machines = [
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
  //create a funtion to add a machine to the array
    const addMachine = (machine: any) => {
        const id = Math.floor(Math.random() * 10000) + 1
        const newMachine = { id, ...machine }
        setMachines([...machines, newMachine])
    }
    //create a function to delete a machine from the array
    const deleteMachine = (id: number) => {
        setMachines(machines.filter((machine) => machine.id !== id))
    }
    //create a function to edit a machine from the array
    const editMachine = (id: number, updatedMachine: any) => {
        setMachines(machines.map((machine) => machine.id === id ? updatedMachine : machine))
    }
    //create a state to hold the machines
    const [machines1, setMachines] = useState(machines)

    //check status of machines and display in different colors
function Colory (props: any) {
    if (props.status === "Active") {
        return <div className="text-sm text-green-800">{props.status}</div>
    } 
    else if (props.status === "Inactive") {
        return <div className="text-sm text-red-800">{props.status}</div>
    }
    else
    {
        return <div className="text-sm text-gray-900">{props.status}</div>
    }
}
  return (
    <div className="flex bg-white dark:bg-gray-900 transition duration-300">
      <NavSide />
      <div>
        <Header />
        <div className="flex flex-col w-full">
            <div className="flex flex-col">
                <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                        <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            ID
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Name
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Location
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Status
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Date
                                        </th>
                                        <th scope="col" className="relative px-6 py-3">
                                            <span className="sr-only">Edit</span>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {machines.map((machine) => (
                                        <tr key={machine.id}>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="text-sm text-gray-900">{machine.id}</div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">

                                                <div className="text-sm text-gray-900">{machine.name}</div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="text-sm text-gray-900">{machine.location}</div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full">
                                                    {Colory(machine.status)}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                {machine.date}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
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
    </div>
    );
}


