import React, { useEffect, useState } from "react";
import { NavSide } from "../components/Shared/NavSide";
import { Link } from "react-router-dom";
import { ButtonAdmin } from "../components/Shared/Button";
import { useNavigate } from "react-router-dom";
import { TicketPage } from "./Ticket";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

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

  return (
    <div className="flex dark:bg-gray-900">
      <NavSide />
      <div className="container flex flex-col xl:flex-row gap-8">
        {/* new ticket section */}
        <div className="w-full xl:w-1/2 pr-4 lg:pr-0">
          <div className="flex flex-col lg:flex-row justify-between lg:items-center m-2 md:m-3">
            <strong className="text-2xl">New Tickets</strong>
            <Link to="../Ticket" className="text-sky-500">View all tickets {">"}</Link>
          </div>

          <TicketPage onHomePage={true} />
        </div>

        <div
          className={
            (props.Role == "Client_admin" ? "lg:w-full" : "xl:w-1/2") +
            " w-full px-2 sm:px-0"
          }
        >
          <div className="flex flex-col mb-3 lg:my-3 flex-start">
            {/* make new ticket */}
            <strong className="text-2xl mb-3">Problem search</strong>
            <form
              onSubmit={goToKnowledge}
              className="flex gap-2 relative"
            >
              <input
                type="text"
                placeholder="Search for problem"
                className="bg-gray-200 dark:bg-gray-800 dark:text-white text-black caret-black dark:caret-white 
                rounded-xl grow w-full !pl-6"
                id="value"
              />
              <button type="submit" className="text-white !bg-transparent absolute right-0 !px-2">
                <MagnifyingGlassIcon className="w-6"/>
              </button>
            </form>
          </div>
          <div>
            <strong className="text-2xl font-bold">Admin panel</strong>
            <div className="flex grow flex-row flex-wrap gap-2 lg:my-3 font-semibold text-black dark:text-gray-400">
              {/* button links */}
              <ButtonAdmin
                linkTo="admin/accounts"
                title="Our Accounts"
                bar="0"
              />
              <ButtonAdmin
                linkTo="admin/machines"
                title="Our Machines"
                bar="0"
              />
              <ButtonAdmin linkTo="admin/Departments" title="Departments" bar="0" />
              <ButtonAdmin linkTo="admin/Companys" title="Companys" bar="0" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
