import { Combobox } from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/24/outline";
import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";

interface deparment {
  id: string;
  name: string;
}

export function CompanyCreation(props: { Role?: string }) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [query, setQuery] = useState("");
  const [response, setResponse] = useState(null);
  const [name, setName] = useState("");
  const [error, setError] = useState<string>();
  const [deparments, setDeparments] = useState<deparment[]>([
    { id: "1", name: "" },
  ]);
  const [selectedDeparment, setSelectedDeparment] = useState(deparments[0]);

  const filteredDepartments =
    query === ""
      ? deparments
      : deparments.filter((deparment) => {
          return deparment.name.toLowerCase().includes(query.toLowerCase());
        });

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (props.Role === "Viscon_admin") {
      try {
        await setResponse(
          await axios.post(
            "http://localhost:7162/api/Company",
            {
              name: name,
              departmentId: selectedDeparment.id,
            },
            {
              headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
              },
            }
          )
        );
      } catch (error) {
        console.log(error);
      }
    } else if (props.Role === "Viscon_employee") {
      try {
        await setResponse(
          await axios.post(
            "http://localhost:7162/api/Company/Admin",
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
      } catch (error) {
        console.log(error);
      }
    }
  }

  const fetchData = async () => {
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
      setDeparments(response);
    } catch (e) {
      console.log(e);
      setError("Unable to retrieve problems and solutions.");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
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
        {props.Role === "Viscon_admin" && (
          <>
            <label htmlFor="department">Department:</label>
            <Combobox value={selectedDeparment} onChange={setSelectedDeparment}>
              <Combobox.Input
                onChange={(event) => setQuery(event.target.value)}
                displayValue={(item) =>
                  selectedDeparment ? selectedDeparment.name : ""
                }
              />
              <Combobox.Options>
                {filteredDepartments.map((department) => (
                  <Combobox.Option
                    key={department.id}
                    value={department}
                    as={Fragment}
                  >
                    {({ active, selected }) => (
                      <li
                        className={`${
                          active
                            ? "bg-blue-500 text-white"
                            : "bg-white text-black"
                        }`}
                      >
                        {selected && <CheckIcon />}
                        {department.name}
                      </li>
                    )}
                  </Combobox.Option>
                ))}
              </Combobox.Options>
            </Combobox>
          </>
        )}
        <br />
        <button type="submit">Create user</button>
      </form>
    </div>
  );
}
