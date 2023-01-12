import React, { useEffect, useState } from "react";
import { NavSide } from "../components/Shared/NavSide";
import { TicketLayout } from "../components/Shared/Ticket";
import { Link } from "react-router-dom";
import { Ticket } from "../Types/types";

export function TicketPage() {
  return (
    <div className="flex dark:bg-gray-900 transition duration-300">
      <NavSide />
      <div className="container flex flex-col flex-wrap">

        <div className="w-full m-2 md:m-3">
          <strong className="text-2xl">All Tickets</strong>
          <Link to="../AddImage">
            <button
              className="border w-full md:w-40 border-gray-300 dark:border-gray-700 dark:hover:bg-gray-700 
          hover:bg-gray-200 dark:text-gray-400 rounded-lg md:ml-3 py-2"
            >
              Add Report
            </button>
          </Link>
        </div>
        {TicketFetch().reports}
      </div>
    </div>
  );
}

export function TicketFetch() {
  const reports = [];
  const [_, setLoadingData] = useState<boolean>();
  const [Tickets, setTicket] = useState<Ticket[]>();
  const [__, setError] = useState<string>();

  // loads data from database
  const fetchData = async () => {
    setLoadingData(true);
    try {
      const response = await (
        await fetch(
          `https://localhost:7162/api/CompanyMachine/GetByCompanyId/a7072517-250e-4582-ade2-c771d248a580`
        )
      ).json();
      setTicket(response);
    } catch (e) {
      console.log(e);
      setError("Unable to retrieve problems and solutions.");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  {
    Tickets !== undefined ? (
      <>
        {Tickets.map((ticket: Ticket) =>
          reports.push(<TicketLayout ticket={ticket} />)
        )}
      </>
    ) : (
      reports.push(<p className="px-3">No tickets available</p>)
    );
  }
  return (
    {reports}
  )
}