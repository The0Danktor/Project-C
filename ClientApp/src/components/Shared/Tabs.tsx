import { Switch, Tab } from "@headlessui/react";
import { useState } from "react";

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

export function Tabs(props: { Role?: string }) {
  const [user, setUser] = useState(initialUser);
  const [enabled, setEnabled] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // submit the user to the server
    console.log(user);
  };

  return (
    <div className="flex flex-col gap-10 w-full h-screen p-20">
      <Tab.Group manual>
        <Tab.List className="">
          <Tab>Customer</Tab>
          <Tab>Viscon</Tab>
        </Tab.List>
        <Tab.Panels className="">
          <Tab.Panel>
            <div>
              <p>{props.Role}</p>
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
              <p>{props.Role}</p>
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
                <Switch
                  checked={enabled}
                  onChange={setEnabled}
                  className={`${
                    enabled ? "bg-blue-600" : "bg-gray-200"
                  } relative inline-flex h-6 w-11 items-center rounded-full`}
                >
                  <span className="sr-only">Enable notifications</span>
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
  );
}
