import React, { useEffect, useState } from "react";
import { NavSide } from "../components/Shared/NavSide";
import axios from "axios";

interface department {
  id: string;
  name: string;
}

export function Departments() {
  const [loadingData, setLoadingData] = useState<boolean>();
  const [error, setError] = useState<string>();
  const [departments, setDepartments] = useState<department[]>([]);
  const [name, setName] = useState<string>("");
  const [response, setResponse] = useState<any>();

  const fetchData = async () => {
    setLoadingData(true);

    try {
      const response = await (
        await fetch(`http://localhost:7162/api/Department/GetAll`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
      ).json();
      setDepartments(response);
    } catch (e) {
      console.log(e);
      setError("Unable to retrieve problems and solutions.");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const [isShown, setIsShown] = useState(false);

  const handleClick = () => {
    setIsShown((current) => !current);
  };

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    try {
      await setResponse(
        await axios.post(
          "http://localhost:7162/api/Department",
          {
            name: name,
          },
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        )
      );
      console.log(response.data);
      setDepartments([response.data]);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="flex dark:bg-gray-900 w-full transition duration-300">
      <NavSide />
      <div className="grow">
        <div className="container flex flex-col w-full">
          <div className="py-2 align-middle inline-block w-full px-2">
            <div className=" w-full m-2 pb-3 md:m-3 flex justify-between">
              <strong className="text-2xl">Departments</strong>
              <button
                className="border w-full md:w-40 border-gray-300 dark:border-gray-700 dark:hover:bg-gray-700 
          hover:bg-gray-200 dark:text-gray-400 rounded-lg md:ml-3 py-2"
                onClick={handleClick}
              >
                Add Department
              </button>
            </div>
            <div className="shadow overflow-hidden border-b border-gray-200 dark:border-gray-700 lg:rounded-lg">
              <table className="w-full dark:bg-gray-900">
                <thead className="hidden lg:table-header-group bg-white dark:bg-gray-800  dark:text-gray-500">
                  <tr className="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800">
                    <th scope="col" className="pl-6 px-2 py-3">
                      Name
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800 dark:text-gray-400">
                  {departments.map((department) => (
                    <tr key={department.id}>
                      <td
                        className="px-2 py-4 whitespace-nowrap lg:table-cell lg:before:content-none block bg-gray-200 dark:bg-gray-700 lg:!bg-transparent"
                        data-header="Name"
                      >
                        <div className="flex items-center justify-center lg:justify-start">
                          <div className="ml-4">
                            <div className="text-sm font-medium ">
                              {department.name}
                            </div>
                          </div>
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
          <div>
            <form onSubmit={handleSubmit} className="user-creation-form">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <br />
              <button type="submit">Create user</button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
