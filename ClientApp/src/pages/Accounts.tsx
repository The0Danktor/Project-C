import React from "react";
import { Outlet } from "react-router-dom";
import { NavSide } from "../components/Shared/NavSide";
import { Header } from "../components/Shared/Header";
import { Link } from "react-router-dom";

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
        <div className="flex font-semibold text-black dark:text-gray-400 transition duration-300">
            <table className="table-auto">
                <thead>
                    <tr>
                        <th className="px-4 py-2">ID</th>
                        <th className="px-4 py-2">Name</th>
                        <th className="px-4 py-2">Group</th>
                        <th className="px-4 py-2">Email</th>
                        <th className="px-4 py-2">Phone</th>
                        <th className="px-4 py-2">Problems</th>
                        <th className="px-4 py-2">Solved</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((account) => (
                        <tr key={account.id}>
                            <td className="border px-4 py-2">{account.id}</td>
                            <td className="border px-4 py-2">{account.name}</td>
                            <td className="border px-4 py-2">{account.group}</td>
                            <td className="border px-4 py-2">{account.email}</td>
                            <td className="border px-4 py-2">{account.phone}</td>
                            <td className="border px-4 py-2">{account.problems}</td>
                            <td className="border px-4 py-2">{account.solved}</td>

                        </tr>
                    ))}
                </tbody>
            </table>
            </div>
        </div>
    </div>
    );
};

        