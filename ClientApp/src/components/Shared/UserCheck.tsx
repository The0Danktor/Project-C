import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { User } from "../../Types/types";

export function UserCheck() {
  const navigate = useNavigate();
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
      navigate("/login");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return <></>;
}
