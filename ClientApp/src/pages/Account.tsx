import { UserIcon } from "@heroicons/react/24/outline";
import React from "react";
import { NavSide } from "../components/Shared/NavSide";
import { User } from "../Types/types";
import { parseToken } from "./AddTicket";
import { useNavigate } from "react-router-dom";

export function Account() {
  const [user, setUser] = React.useState<User | undefined>(undefined);

  const navigate = useNavigate();

  React.useEffect(() => {
    const id = parseToken()?.sid;

    if (id === null) return;

    fetch("http://localhost:7162/api/User/" + id, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((res) => {
        setUser(res);
      });
  }, []);

  return (
    <div className="bg-white dark:bg-gray-900 flex">
      <NavSide />
      <div className="container">
        <h1 className="text-2xl">Account</h1>
        <div className="flex items-center gap-4 my-8">
          <div className="flex justify-center items-center w-36 aspect-square bg-slate-300 dark:bg-slate-800 rounded-full">
            <UserIcon className="w-24 text-slate-700 dark:text-slate-600" />
          </div>
          <div>
            {user && <>
              <strong>Name: </strong> {user.name}
              <br />
              <strong>Email: </strong> {user.email}
              <br />
              <strong>Phone: </strong> {user.phone}
              <br />
              <strong>Role: </strong> {user.role}
            </>}
          </div>
        </div>
        <button type="button" onClick={() => { localStorage.removeItem("token"); navigate("/login") }}>Logout</button>
      </div>
    </div>
  );
}
