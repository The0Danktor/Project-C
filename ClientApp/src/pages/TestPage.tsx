import { NavSide } from "../components/Shared/NavSide";
import React, { useEffect, useState } from "react";
import { User } from "../Types/types";
import { UserCreation } from "../components/Shared/UserCreation";
import { Tabs } from "../components/Shared/Tabs";

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
  
  return (
    <div className="bg-white dark:bg-gray-900 transition flex duration-300">
      <NavSide />
      {/* <UserCreation Role={user?.role} /> */}
      <Tabs />
    </div>
  );
}
