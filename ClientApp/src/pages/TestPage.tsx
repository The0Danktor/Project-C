import { NavSide } from "../components/Shared/NavSide";
import React, { useEffect, useState } from "react";
import { ProblemMenu } from "../components/Customer/ProblemMenu";
import { Disclosure, Transition } from "@headlessui/react";
import { User } from "../Types/types";

export function TestPage() {
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
            Authorization: `Bearer eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTUxMiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9zaWQiOiIxYTU0ZDE5MS00MGU5LTRjNWYtODE0MS0yNjkzZDJlNzI0N2YiLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3JvbGUiOiJDbGllbnQiLCJleHAiOjE2NzE3OTc4Nzd9.qC4XT_CDBWijPnqf_g2Yf11DwoxEIZT_4khHyqIavRgWhRVwy0aJ_2vOfSf4XaQxDvnPomDqFhBnlqtYy6XYfw`,
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
  useEffect(() => {
  console.log(user);
  }, [user]);
  
  return (
    <div className="bg-white dark:bg-gray-900 transition flex duration-300">
      <NavSide />
      <div /*center this div */ className="mx-auto flex flex-col justify-center">
        <h1>Your are: {user?.name}</h1>
        <h1>With Id: {user?.id}</h1>
        <h1>With email: {user?.email}</h1>
        <h1>And phone: {user?.phone}</h1>
        <h1>From Company: {user?.companyId}</h1>
        <h1>With The Role: {user?.role}</h1>
        <h1>That needs to change his password: {user?.resetpassword ? "nee": "ja"}</h1>
      </div>
    </div>
  );
}
