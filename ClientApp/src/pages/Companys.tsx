import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { NavSide } from "../components/Shared/NavSide";
import { Header } from "../components/Shared/Header";
import { Link } from "react-router-dom";
import { useState } from "react";
import { UserCreation } from "../components/Shared/UserCreation";
import { User } from "../Types/types";

export const Companys = () => {
  const [loadingData, setLoadingData] = useState<boolean>();
  const [user, setUser] = useState<User>();
  const [error, setError] = useState<string>();

  const fetchData = async () => {
    setLoadingData(true);
    try {
      const response = await (
        await fetch(`http://localhost:7162/api/Auth`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
      ).json();
      setUser(response);
    } catch (e) {
      console.log(e);
      setError("Unable to retrieve problems and solutions.");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const [isShown, setIsShown] = useState(false);

  const users = [
    {
      id: 1,
      name: "John Doe",
      group: "Admin",
      email: "x",
      phone: "1234567890",
      problems: "37",
      solved: "25",
      workGroup: "Viscon x",
    },
    {
      id: 2,
      name: "Jane Doe",
      group: "Admin",
      email: "x",
      phone: "1234567890",
      problems: "37",
      solved: "25",
      workGroup: "Viscon x",
    },
    {
      id: 3,
      name: "John Smith",
      group: "User",
      email: "x",
      phone: "1234567890",
      problems: "37",
      solved: "25",
      workGroup: "Viscon x",
    },
    {
      id: 4,
      name: "Jane Smith",
      group: "User",
      email: "x",
      phone: "1234567890",
      problems: "37",
      solved: "25",
      workGroup: "Viscon x",
    },
    {
      id: 5,
      name: "John Jones",
      group: "User",
      email: "x",
      phone: "1234567890",
      problems: "37",
      solved: "25",
      workGroup: "Viscon x",
    },
    {
      id: 6,
      name: "Jane Jones",
      group: "User",
      email: "x",
      phone: "1234567890",
      problems: "37",
      solved: "25",
      workGroup: "Viscon x",
    },
    {
      id: 7,
      name: "John Doe",
      group: "Admin",
      email: "x",
      phone: "1234567890",
      problems: "37",
      solved: "25",
      workGroup: "Viscon x",
    },
    {
      id: 8,
      name: "Jane Doe",
      group: "Admin",
      email: "x",
      phone: "1234567890",
      problems: "37",
      solved: "25",
      workGroup: "Viscon x",
    },
    {
      id: 9,
      name: "John Smith",
      group: "User",
      email: "x",
      phone: "1234567890",
      problems: "37",
      solved: "25",
      workGroup: "Viscon x",
    },
    {
      id: 10,
      name: "Jane Smith",
      group: "User",
      email: "x",
      phone: "1234567890",
      problems: "37",
      solved: "25",
      workGroup: "Viscon x",
    },
  ];

  const handleClick = () => {
    // 👇️ toggle shown state
    setIsShown((current) => !current);
  };

  return (
    <div className="flex dark:bg-gray-900 w-full transition duration-300">
      <NavSide />
      <div className="grow">
        <div className="container flex flex-col w-full">
          <div className="py-2 align-middle inline-block w-full px-2">
            <div className=" w-full m-2 pb-3 md:m-3 flex justify-between">
              <strong className="text-2xl">Accounts</strong>
              <button
                className="border w-full md:w-40 border-gray-300 dark:border-gray-700 dark:hover:bg-gray-700 
          hover:bg-gray-200 dark:text-gray-400 rounded-lg md:ml-3 py-2"
                onClick={handleClick}
              >
                Add Companys
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
                      Group
                    </th>
                    <th scope="col" className="px-2 py-3">
                      Workgroup
                    </th>
                    <th scope="col" className="px-2 py-3">
                      Email
                    </th>
                    <th scope="col" className="px-2 py-3">
                      Phone
                    </th>
                    <th scope="col" className="px-2 py-3">
                      Problems
                    </th>
                    <th scope="col" className="px-2 py-3">
                      Solved
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800 dark:text-gray-400">
                  {users.map((user) => (
                    <tr key={user.id}>
                      <td
                        className="px-2 py-4 whitespace-nowrap lg:table-cell lg:before:content-none block bg-gray-200 dark:bg-gray-700 lg:!bg-transparent"
                        data-header="Name"
                      >
                        <div className="flex items-center justify-center lg:justify-start">
                          <div className="ml-4">
                            <div className="text-sm font-medium ">
                              {user.name}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td
                        className="px-2 py-4 whitespace-nowrap lg:table-cell lg:before:content-none block before:content-[attr(data-header)] before:ml-2 before:text-sm before:w-3/5 before:float-left"
                        data-header="Group"
                      >
                        <div className="text-sm ">{user.group}</div>
                      </td>
                      <td
                        className="px-2 py-4 whitespace-nowrap lg:table-cell lg:before:content-none block before:content-[attr(data-header)] before:ml-2 before:text-sm before:w-3/5 before:float-left"
                        data-header="Workgroup"
                      >
                        <div className="text-sm ">{user.workGroup}</div>
                      </td>
                      <td
                        className="px-2 py-4 whitespace-nowrap lg:table-cell lg:before:content-none block before:content-[attr(data-header)] before:ml-2 before:text-sm before:w-3/5 before:float-left"
                        data-header="Email"
                      >
                        <div className="text-sm ">{user.email}</div>
                      </td>
                      <td
                        className="px-2 py-4 whitespace-nowrap lg:table-cell lg:before:content-none block before:content-[attr(data-header)] before:ml-2 before:text-sm before:w-3/5 before:float-left"
                        data-header="Phone"
                      >
                        <div className="text-sm ">{user.phone}</div>
                      </td>
                      <td
                        className="px-2 py-4 whitespace-nowrap lg:table-cell lg:before:content-none block before:content-[attr(data-header)] before:ml-2 before:text-sm before:w-3/5 before:float-left"
                        data-header="Problems"
                      >
                        <div className="text-sm ">{user.problems}</div>
                      </td>
                      <td
                        className="px-2 py-4 whitespace-nowrap lg:table-cell lg:before:content-none block before:content-[attr(data-header)] before:ml-2 before:text-sm before:w-3/5 before:float-left"
                        data-header="Solved"
                      >
                        <div className="text-sm ">{user.solved}</div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        {isShown && (<></>)}
      </div>
    </div>
  );
};
