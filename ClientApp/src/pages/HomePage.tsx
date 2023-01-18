import React, { useEffect, useState } from "react";
import { NavSide } from "../components/Shared/NavSide";
import { Link } from "react-router-dom";
import { ButtonAdmin } from "../components/Shared/Button";
import { useNavigate } from "react-router-dom";
import { TicketFetch } from "./Ticket";
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

interface company {
  id: string;
  name: string;
}

export function HomePage(props: { Role?: string }) {
  // go to knowledge base with parameters
  const navigate = useNavigate();
  const goToKnowledge = (event: any) => {
    event.preventDefault();
    navigate("/Knowledge", {
      state: { value: event.target[0].value },
      replace: false,
    });
  };

  const [_, setLoadingData] = useState<boolean>();
  const [companys, setCompany] = useState<company>();
  const [user, setUser] = useState(initialUser);
  const [__, setError] = useState<string>();

  // loads data from database
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
      setCompany(response);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="flex dark:bg-gray-900">
      <NavSide />
      <div className="container flex flex-col lg:flex-row gap-2">
        {/* new ticket section */}
        <div className="w-full lg:w-1/2 pr-4 lg:pr-0">
          <div className="flex flex-col lg:flex-row justify-between lg:items-center m-2 md:m-3">
            <strong className="text-2xl">New Tickets</strong>
            <Link to="../Ticket">View all tickets {">"}</Link>
          </div>

          {TicketFetch().reports}
        </div>

        <div
          className={
            (props.Role == "Client_admin" ? "lg:w-full" : "lg:w-1/2") +
            " w-full px-2 sm:px-0"
          }
        >
          <div className="flex flex-col mb-3 lg:my-3 flex-start">
            {/* make new ticket */}
            <strong className="text-2xl mb-3">Make New Ticket</strong>
            <form
              onSubmit={goToKnowledge}
              className="flex flex-col gap-2 items-end"
            >
              <input
                type="text"
                placeholder="Search for problem"
                className="bg-gray-200 dark:bg-gray-800 dark:text-white text-black caret-black dark:caret-white 
                rounded-xl grow w-full !pl-6"
                id="value"
              />
              <input
                type="submit"
                value="Search"
                className="border w-full md:w-40 border-gray-300 dark:border-gray-700 dark:hover:bg-gray-700 
          hover:bg-gray-200 dark:text-gray-400 rounded-lg md:ml-3 py-2 cursor-pointer"
              />
            </form>
          </div>
          <div>
            <strong className="text-2xl font-bold">Admin Panel</strong>
            <div className="flex grow flex-row flex-wrap gap-2 lg:my-3 font-semibold text-black dark:text-gray-400">
              {/* button links */}
              <ButtonAdmin
                linkTo="admin/accounts"
                title="Our Accounts"
                bar="bar"
              />
              <ButtonAdmin
                linkTo="admin/machines"
                title="Our Machines"
                bar="bar"
              />
              <ButtonAdmin linkTo="admin/Departments" title="Departments" bar="bar" />
              <ButtonAdmin linkTo="admin/Companys" title="Companys" bar="bar" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
