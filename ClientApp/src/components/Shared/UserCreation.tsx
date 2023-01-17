import React, { Fragment, useState, useEffect } from "react";
import { Combobox, Switch, Tab, Transition, Dialog } from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/20/solid";
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

interface Response {
  email: string;
  password: string;
}
interface company {
  id: string;
  name: string;
}

export function UserCreation(props: { Role?: string }) {
  const [query, setQuery] = useState("");
  const [user, setUser] = useState(initialUser);
  const [enabled, setEnabled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [response, setResponse] = useState<any>();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [companys, setCompanys] = useState<company[]>([
    { id: "1", name: "" },
  ]);
  const [selectedCompany, setSelectedCompany] = useState(companys[0]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  const fetchData = async () => {
    try {
      const response = await (
        await fetch(`http://localhost:7162/api/Company/GetAll`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
      ).json();
      setCompanys(response);
    } catch (e) {
      console.log(e);
    }
  };

  const filteredCompany =
    query === ""
      ? companys
      : companys.filter((company) => {
          return company.name.toLowerCase().includes(query.toLowerCase());
        });

  useEffect(() => {
    console.log(companys);
  }, [companys]);

  useEffect(() => {
    fetchData();
  }, []);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    
    event.preventDefault();
    if (props.Role === "Client_admin") {
      try {
        await setResponse(
          await axios.post(
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
          )
        );
        setEmail(response.data.email);
        setPassword(response.data.password);
        setIsOpen(true);
      } catch (error) {
        console.log(error);
      }
    }
    if (props.Role === "Viscon_employee") {
      try {
        await setResponse(
          await axios.post(
            "http://localhost:7162/api/Auth/registerClientAdmin",
            {
              name: user.name,
              email: user.email,
              phone: user.phone,
              companyId: selectedCompany.id,
            },
            {
              headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
              },
            }
          )
        );
        setEmail(response.data.email);
        setPassword(response.data.password);
        setIsOpen(true);
      } catch (error) {
        console.log(error);
      }
    }
    if (props.Role === "Viscon_admin") {
      if (selectedIndex === 1) {
        if (enabled) {
          try {
            await setResponse(
              await axios.post(
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
              )
            );
            setEmail(response.data.email);
            setPassword(response.data.password);
            setIsOpen(true);
          } catch (error) {
            console.log(error);
          }
        } else {
          try {
            await setResponse(
              await axios.post(
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
              )
            );
            setEmail(response.data.email);
          setPassword(response.data.password);
            setIsOpen(true);
          } catch (error) {
            console.log(error);
          }
        }
      } else {
        try {
          await setResponse(
            await axios.post(
              "http://localhost:7162/api/Auth/registerClientAdmin",
              {
                name: user.name,
                email: user.email,
                phone: user.phone,
                companyId: selectedCompany.id,
              },
              {
                headers: {
                  Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
              }
            )
          );
          setEmail(response.data.email);
          setPassword(response.data.password);
          setIsOpen(true);
        } catch (error) {
          console.log(error);
        }
      }
    }
  }

  return (
    <div>
      {props.Role === "Client_admin" && (
        <div>
          <form onSubmit={handleSubmit} className="user-creation-form">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={user.name}
              onChange={handleChange}
            />
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={user.email}
              onChange={handleChange}
            />
            <label htmlFor="phone">Phone number:</label>
            <input
              type="phone"
              id="phone"
              name="phone"
              value={user.phone}
              onChange={handleChange}
            />
            <label htmlFor="company">Company:</label>
            <input
              type="text"
              id="company"
              name="company"
              value={user.company}
              onChange={handleChange}
            />
            <button type="submit">Create user</button>
          </form>
        </div>
      )}
      {props.Role === "Viscon_employee" && (
        <div>
          <form onSubmit={handleSubmit} className="user-creation-form">
            <label htmlFor="name">Naaame:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={user.name}
              onChange={handleChange}
            />
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={user.email}
              onChange={handleChange}
            />
            <label htmlFor="phone">Phone number:</label>
            <input
              type="phone"
              id="phone"
              name="phone"
              value={user.phone}
              onChange={handleChange}
            />
            <label htmlFor="company">Company:</label>
            <Combobox value={selectedCompany} onChange={setSelectedCompany}>
              <Combobox.Input
                onChange={(event) => setQuery(event.target.value)}
              />
              <Combobox.Options>
                {filteredCompany.map((company) => (
                  <Combobox.Option
                    key={company.id}
                    value={company}
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
                        {company.name}
                      </li>
                    )}
                  </Combobox.Option>
                ))}
              </Combobox.Options>
            </Combobox>
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
            <Tab.List className="mx-auto">
              <Tab>Customer</Tab>
              <Tab>Viscon</Tab>
            </Tab.List>
            <Tab.Panels className="">
              <Tab.Panel>
                <div>
      
                  <form onSubmit={handleSubmit} className="user-creation-form">
                    <label htmlFor="name">Name:</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={user.name}
                      onChange={handleChange}
                    />
                    <label htmlFor="email">Email:</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={user.email}
                      onChange={handleChange}
                    />
                    <label htmlFor="phone">Phone Number:</label>
                    <input
                      type="phone"
                      id="phone"
                      name="phone"
                      value={user.phone}
                      onChange={handleChange}
                    />
                    <label htmlFor="company">Company:</label>
                    <Combobox
                      value={selectedCompany}
                      onChange={setSelectedCompany}
                    >
                      <Combobox.Input
                        onChange={(event) => setQuery(event.target.value)}
                        displayValue = {(item) => selectedCompany ? selectedCompany.name : "" }
                      />
                      <Combobox.Options>
                        {filteredCompany.map((company) => (
                          <Combobox.Option
                            key={company.id}
                            value={company}
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
                                {company.name}
                              </li>
                            )}
                          </Combobox.Option>
                        ))}
                      </Combobox.Options>
                    </Combobox>
                    <br />
                    <button type="submit">Create user</button>
                  </form>
                </div>
              </Tab.Panel>
              <Tab.Panel>
                <div>
      
                  <form onSubmit={handleSubmit} className="user-creation-form">
                    <label htmlFor="name">Name:</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={user.name}
                      onChange={handleChange}
                    />
                    <label htmlFor="email">Email:</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={user.email}
                      onChange={handleChange}
                    />
                    <label htmlFor="phone">Phone Number:</label>
                    <input
                      type="phone"
                      id="phone"
                      name="phone"
                      value={user.phone}
                      onChange={handleChange}
                    />
                    <label>Admin:</label>
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
                    <button type="submit">Create user</button>
                  </form>
                </div>
              </Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        </div>
      )}
      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="fixed z-50"
      >
        <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
        <Dialog.Panel className="fixed inset-0 z-[60] overflow-y-auto w-96 h-36 border-2 bg-white dark:bg-gray-900 border-gray-100 dark:border-gray-800 mx-auto my-auto rounded-2xl p-7 transition duration-300">
          <Dialog.Title className="text-lg font-bold mb-1">
            New account has been created
          </Dialog.Title>
          <Dialog.Description className="text-sm">
            <p>Email: {email}</p>
            <p>Password: {password}</p>
          </Dialog.Description>
        </Dialog.Panel>
      </Dialog>
    </div>
  );
}
