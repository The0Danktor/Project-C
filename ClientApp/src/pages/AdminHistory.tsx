import React from "react";
import { Outlet } from "react-router-dom";
import { NavSide } from "../components/Shared/NavSide";
import { Header } from "../components/Shared/Header";
import { Link } from "react-router-dom";
import { useState} from "react";
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
        }
    ];
    
    //function to color code the status and priority
    function colorCodeStatus(status : any ) {
        if (status === "Pending") {
            return "bg-yellow-200 text-yellow-800";
        } else if (status === "Resolved") {
            return "bg-green-200 text-green-800";
        } else if (status === "In Progress") {
            return "bg-blue-200 text-blue-800";
        }
    }
    function colorCodePriority(priority : any) {
        if (priority === "High") {
            return "bg-red-200 text-red-800";
        } else if (priority === "Medium") {
            return "bg-yellow-200 text-yellow-800";
        } else if (priority === "Low") {
            return "bg-green-200 text-green-800";
        }
    }
    return (
        <div className="flex h-screen bg-gray-200 dark:bg-gray-900 dark:text-gray-500">
            <NavSide />
            <div className="flex flex-col flex-1 w-full">
                <Header />
                <main className="h-full overflow-y-auto">
                    <div className="container mx-4 grid">
                        <h2
                            className="my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200"
                        >
                            Current And Past Problems
                        </h2>
                        <div className="w-full overflow-hidden rounded-lg shadow-xs">
                            <div className="w-full overflow-x-auto">
                                <table className="w-full whitespace-no-wrap">
                                    <thead>
                                        <tr
                                            className="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800"
                                        >
                                            <th className="px-4 py-3">ID</th>
                                            <th className="px-4 py-3">Associated Worker</th>
                                            <th className="px-4 py-3">Date</th>
                                            <th className="px-4 py-3">Time</th>
                                            <th className="px-4 py-3">Description</th>
                                            <th className="px-4 py-3">Status</th>
                                            <th className="px-4 py-3">Priority</th>
                                        </tr>
                                    </thead>
                                    <tbody
                                        className="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800"
                                    >
                                        {history.map((history) => (
                                            <tr
                                                key={history.id}
                                                className="text-gray-700 dark:text-gray-400"
                                            >
                                                <td className="px-4 py-3">
                                                    <div className="flex items-center text-sm">
                                                        <div>
                                                            <p className="font-semibold">{history.id}</p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="px-4 py-3 text-sm">
                                                    {history.associatedWorker}
                                                </td>
                                                <td className="px-4 py-3 text-xs">
                                                    {history.date}
                                                </td>
                                                <td className="px-4 py-3 text-sm">
                                                    {history.time}
                                                </td>
                                                <td className="px-4 py-3 text
                                                -sm">
                                                    {history.description}
                                                </td>
                                                <td className="px-4 py-3 text-sm">

                                                    <span
                                                        className={
                                                            "px-2 py-1 font-semibold leading-tight " +
                                                            colorCodeStatus(history.status)
                                                        }
                                                    >
                                                        {history.status}
                                                    </span>
                                                </td>
                                                <td className="px-4 py-3 text-sm">
                                                    <span
                                                        className={
                                                            "px-2 py-1 font-semibold leading-tight " +
                                                            colorCodePriority(history.priority)
                                                        }
                                                    >
                                                        {history.priority}
                                                    </span>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}
   