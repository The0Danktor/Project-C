import { useEffect, useState } from "react";
import { NavSide } from "../components/Shared/NavSide";
import { Ticket } from "../Types/types";
import { Link } from "react-router-dom";
import { TicketLayout } from "../components/Shared/Ticket";
import { getUserId } from "./AddTicket";

export function TicketPage({ onHomePage }: { onHomePage?: boolean }) {
  const [tickets, setTickets] = useState<Ticket[]>();

  useEffect(() => {

    const id = getUserId();

    if (!id)
      return;

    fetch("http://localhost:7162/api/Ticket/GetAllByCompany/" + id, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${localStorage.getItem("token")}`
      }
    })
      .then(res => res.json())
      .then(res => {
        setTickets(res);
      })
      .catch(error => {
        console.log(error);
      })
  }, []);

  return (
    <div className="flex dark:bg-gray-900">
      {!onHomePage &&
        <div className="hidden md:flex">
          <NavSide />
        </div>
      }
      <div className={`container ${onHomePage ? "!p-0" : ""}`}>
        {!onHomePage && <div className="grow w-full">
          <strong className="text-2xl">All tickets</strong>
          <Link to="../newticket">
            <button
              className="border w-full md:w-40 border-gray-300 dark:border-gray-700 dark:hover:bg-gray-700 
          hover:bg-gray-200 dark:text-gray-400 rounded-lg md:ml-3 py-2"
            >
              New Ticket
            </button>
          </Link>
        </div>}
        <>
          {tickets !== undefined ?
            (
              <div>
                {tickets.map((ticket: Ticket) => (
                  <TicketLayout
                    key={ticket.id}
                    ticket={ticket}
                    onHomePage={onHomePage}
                  />
                ))}
              </div>
            )
            :
            (
              <div>
                No Tickets
              </div>
            )}
        </>
      </div>
    </div>
  );
}