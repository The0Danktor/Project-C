import { useEffect, useState, MouseEvent } from "react";
import { Dropdown } from "./Dropdown";
import { ImageGallery } from "./ImageGallery";
import { Button } from "./Button";
import { status, priority } from "./Ticket";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { CompanyMachine, Problem, Ticket, User } from "../../Types/types";
import Editor from "./Editor";
import { Descendant } from "slate";

interface IInformation {
  close: () => void;
  ticket: Ticket;
}

interface IInformationImage {
  image: string;
  close: any;
  video?: string[];
  height?: boolean;
}

// ticket pop up
export function PopUp({ close, ticket }: IInformation) {
  const [active, setActive] = useState(false);
  const [user, setUser] = useState<User | undefined>(undefined);
  const [companyMachine, setCompanyMachine] = useState<CompanyMachine | undefined>(undefined);
  const [problem, setProblem] = useState<Problem | undefined>(undefined);

  useEffect(() => {
    fetch("http://localhost:7162/api/User/" + ticket.userId, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${localStorage.getItem("token")}`
      }
    })
      .then(res => res.json())
      .then(res => {
        setUser(res);
      });

    fetch("http://localhost:7162/api/CompanyMachine/" + ticket.companyMachineId, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${localStorage.getItem("token")}`
      }
    })
      .then(res => res.json())
      .then(res => {
        setCompanyMachine(res);
      });

    if (ticket.problemDescription !== null)
      return;

    fetch("http://localhost:7162/api/Problem/" + ticket.problemId, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${localStorage.getItem("token")}`
      }
    })
      .then(res => res.json())
      .then(res => {
        setProblem(res);
      });
  }, [ticket]);

  // deletes ticket
  function deleteP() {
    setActive(!active);
  }

  const date = new Date(Date.parse(ticket.date));

  const notes: { see: Descendant[], expect: Descendant[], tried: Descendant[] } = JSON.parse(ticket.note);

  return (
    <div className="bg-opacity-75 z-[9999] bg-gray-800 absolute top-0 left-0 w-full h-full m-0" onClick={(e: MouseEvent) => e.target === e.currentTarget && close()}>
      <div
        className="bg-gray-100 text-black dark:bg-gray-700 dark:text-white overflow-y-auto max-h-full md:max-h-[90vh] 
        md:min-h-[50%] md:min-w-[50%] md:absolute md:left-1/2 md:-translate-x-1/2 md:top-1/2 md:-translate-y-1/2 p-6"
      >
        <div className="flex justify-end items-center">
          <span className="text-gray-400 text-sm">
            {/* dislays date: dd/mm/yyyy */}
            Reported: {date.getDate().toString().padStart(2, "0")}/
            {date.getMonth() === 0
              ? "01"
              : date.getMonth().toString().padStart(2, "0")}
            /{date.getFullYear().toString()}
          </span>
          {/* close button */}
          <button
            onClick={close}
            className="m-3 bg-gray-100 dark:bg-gray-700 z-10"
          >
            <XMarkIcon className="w-6 h-6" />
          </button>
        </div>

        {/* dipslays information */}
        <div className="flex flex-col xl:flex-row">
          <div className="flex-1">
            <strong className="text-2xl block">
              {companyMachine ? `${companyMachine.name ?? "Software"}` : "Loading..."}
            </strong>
            <strong>Associated Worker: </strong>
            <span>Nobody</span>
            <br />
            {/* dropdowns */}
            {/* <Dropdown
            selected={ticket.user.name}
            info={ticket.availableusers.map((user: User) => user.name)}
          /> */}
            <span>Status: </span>
            <Dropdown selected={ticket.status} info={status} />
            <span>Priority: </span>
            <Dropdown selected={ticket.priority} info={priority} />

            {/* image gallery */}
            <ImageGallery
              src={ticket.images}
              visible={true}
            />
          </div>
          {/* displays user information */}
          <div className="flex-1 p-3">
            <strong className="text-xl block">User Information</strong>
            {user ? <>
              <strong>User: </strong>
              <span>{user.name}</span>
              <br />
              <strong>Email: </strong> {user.email}
              <br />
              <strong>Phone Number: </strong> {user.phone}
            </>
              :
              <p>Loading...</p>
            }
            {/* dipslays the problem */}
            <strong className="text-xl block mt-8">Problem</strong>
            <strong>Problem Type</strong>
            <p>{ticket.problemDescription ? "new problem" : "existing problem"}</p>
            <strong className="">Problem Description</strong>
            {ticket.problemDescription ? <Editor readOnly={true} initialValue={JSON.parse(ticket.problemDescription)} /> : <p>{problem ? problem.description : "Loading..."}</p>}

          </div>
        </div>
        <div className="flex flex-col xl:flex-row w-full">
            <div className="flex-1">
              <strong className="inline-block w-full text-center">Seen</strong>
              <Editor readOnly={true} initialValue={notes.see} />
              </div>
            <div className="flex-1">
              <strong className="inline-block w-full text-center">Expected</strong>
              <Editor readOnly={true} initialValue={notes.expect} />
            </div>
            <div className="flex-1">
              <strong className="inline-block w-full text-center">Tried</strong>
              <Editor readOnly={true} initialValue={notes.tried} />
            </div>
        </div>
        {/* save buttons */}
        {active ? ( // if delete button is clicked
          <div className="flex flex-row justify-between flex-wrap gap-4 pt-4">
            <p className="text-red-500 text-sm p-3">
              Are you sure you want to delete this ticket?
            </p>

            <Button value="No" fun={deleteP} />
            <Button value="Yes" fun={close} />
          </div> // if delete button is not clicked
        ) : (
          <div className="flex flex-row justify-end flex-wrap gap-4 pt-4">
            <Button value="Delete" fun={deleteP} />
            <Button value="Save" fun={close} />
          </div>
        )}
      </div>
    </div>
  );
}

// pops up an image
export function PopUpImage({ close, image, height, video }: IInformationImage) {
  return (
    <div
      className={
        (height ? " md:h-[94vh] " : "") +
        "h-screen z-[9999]  bg-opacity-75 bg-gray-800 fixed top-0 left-0 block w-full m-0"
      }
      onClick={close}
    >
      <div
        className="fixed top-1/2 -translate-y-1/2 md:left-1/2 md:-translate-x-1/2 
      "
      >
        {/* displays video */}
        {image.includes("video_preview") &&
          video !== undefined &&
          video.map((videoPreview: string) => (
            <video
              controls
              autoPlay
              src={videoPreview}
              className="w-screen md:w-auto md:max-h-[80vh]"
            />
          ))}

        {/* displays image */}
        {!image.includes("video_preview") && (
          <img src={image} className="w-screen md:w-auto max-h-[80vh]" />
        )}
      </div>
    </div>
  );
}
