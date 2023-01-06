import React, { useState } from "react";

interface User {
  name: string;
  email: string;
  phone: string;
  company?: string;
}

const initialUser: User = {
  name: "",
  email: "",
  phone: "",
};

export function UserCreation(props: { Role?: string }) {
  const [user, setUser] = useState(initialUser);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // submit the user to the server
  };

  return (
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
        <label htmlFor="phone">Password:</label>
        <input
          type="phone"
          id="phone"
          name="phone"
          value={user.phone}
          onChange={handleChange}
        />
        <br />
        <button type="submit">Create user</button>
      </form>
    </div>
  );
}
