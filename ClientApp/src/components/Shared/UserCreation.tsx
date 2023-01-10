import React, { Fragment, useState } from "react";
import { Combobox, Switch, Tab, Transition, Dialog } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import axios from "axios";

// combobox toevoegen voor company
// dialog toevoegen met gemaakte account en wachtwoord
interface User {
  name: string;
  email: string;
  phone: string;
  company?: string;
}

interface Person {
  id: number;
  name: string;
}

const initialUser: User = {
  name: "",
  email: "",
  phone: "",
};

export function UserCreation(props: { Role?: string }) {
  const [user, setUser] = useState(initialUser);
  const [enabled, setEnabled] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(user);
    console.log(`Is admin ${setEnabled}`);
    console.log(`Selected index ${selectedIndex}`);
    console.log(`Role ${props.Role}`);
    if (props.Role === "Client_admin") {
      try {
        axios.post(
          "http://localhost:7162/api/Auth/registerClient",
          {
            name: user.name,
            email: user.email,
            phone: user.phone,
          },
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
      } catch (error) {
        console.log(error);
      }
    }
    if (props.Role === "Viscon_employee") {
      try {
        axios.post(
          "http://localhost:7162/api/Auth/registerClientAdmin",
          {
            name: user.name,
            email: user.email,
            phone: user.phone,
            company: user.company,
          },
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
      } catch (error) {
        console.log(error);
      }
    }
    if (props.Role === "Viscon_admin") {
      if (selectedIndex === 1) {
        if (enabled) {
          try {
            axios.post(
              "http://localhost:7162/api/Auth/registerVisconAdmin",
              {
                name: user.name,
                email: user.email,
                phone: user.phone,
              },
              {
                headers: {
                  Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
              }
            );
          } catch (error) {
            console.log(error);
          }
        } else {
          try {
            axios.post(
              "http://localhost:7162/api/Auth/registerVisconEmployee",
              {
                name: user.name,
                email: user.email,
                phone: user.phone,
              },
              {
                headers: {
                  Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
              }
            );
          } catch (error) {
            console.log(error);
          }
        }
      } else {
        try {
          axios.post(
            "http://localhost:7162/api/Auth/registerClientAdmin",
            {
              name: user.name,
              email: user.email,
              phone: user.phone,
              company: user.company,
            },
            {
              headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
              },
            }
          );
        } catch (error) {
          console.log(error);
        }
      }
    }
  };

  return (
    <div>
      {props.Role === "Client_admin" && (
        <div>
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={user.name}
              onChange={handleChange}
            />
            <br />
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={user.email}
              onChange={handleChange}
            />
            <br />
            <label htmlFor="phone">Phone number:</label>
            <input
              type="phone"
              id="phone"
              name="phone"
              value={user.phone}
              onChange={handleChange}
            />
            <br />
            <label htmlFor="company">Company:</label>
            <input
              type="text"
              id="company"
              name="company"
              value={user.company}
              onChange={handleChange}
            />
            <br />
            <button type="submit">Create user</button>
          </form>
        </div>
      )}
      {props.Role === "Viscon_employee" && (
        <div>
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={user.name}
              onChange={handleChange}
            />
            <br />
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={user.email}
              onChange={handleChange}
            />
            <br />
            <label htmlFor="phone">Phone number:</label>
            <input
              type="phone"
              id="phone"
              name="phone"
              value={user.phone}
              onChange={handleChange}
            />
            <br />
            <label htmlFor="company">Company:</label>
            <input
              type="text"
              id="company"
              name="company"
              value={user.company}
              onChange={handleChange}
            />
            <br />
            <button type="submit">Create user</button>
          </form>
        </div>
      )}
      {props.Role === "Viscon_admin" && (
        <div className="flex flex-col gap-10 w-full h-screen p-20">
          <Tab.Group
            manual
            selectedIndex={selectedIndex}
            onChange={setSelectedIndex}
          >
            <Tab.List className="">
              <Tab>Customer</Tab>
              <Tab>Viscon</Tab>
            </Tab.List>
            <Tab.Panels className="">
              <Tab.Panel>
                <div>
      
                  <form onSubmit={handleSubmit}>
                    <label htmlFor="name">Name:</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={user.name}
                      onChange={handleChange}
                    />
                    <br />
                    <label htmlFor="email">Email:</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={user.email}
                      onChange={handleChange}
                    />
                    <br />
                    <label htmlFor="phone">Phone Number:</label>
                    <input
                      type="phone"
                      id="phone"
                      name="phone"
                      value={user.phone}
                      onChange={handleChange}
                    />
                    <br />
                    <label htmlFor="company">Company:</label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={user.company}
                      onChange={handleChange}
                    />
                    <br />
                    <button type="submit">Create user</button>
                  </form>
                </div>
              </Tab.Panel>
              <Tab.Panel>
                <div>
      
                  <form onSubmit={handleSubmit}>
                    <label htmlFor="name">Name:</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={user.name}
                      onChange={handleChange}
                    />
                    <br />
                    <label htmlFor="email">Email:</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={user.email}
                      onChange={handleChange}
                    />
                    <br />
                    <label htmlFor="phone">Phone Number:</label>
                    <input
                      type="phone"
                      id="phone"
                      name="phone"
                      value={user.phone}
                      onChange={handleChange}
                    />
                    <br />
                    <Switch type="reset"
                      checked={enabled}
                      onChange={setEnabled}
                      className={`${
                        enabled ? "bg-blue-600" : "bg-gray-200"
                      } relative inline-flex h-6 w-11 items-center rounded-full transition-all`}
                    >
                      <span
                        className={`${
                          enabled ? "translate-x-6" : "translate-x-1"
                        } inline-block h-4 w-4 transform rounded-full bg-white transition`}
                      />
                    </Switch>
                    <br />
                    <button type="submit">Create user</button>
                  </form>
                </div>
              </Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        </div>
      )}
    </div>
  );
}
