import { useEffect, useState } from "react";
import { Dropdown } from "./Dropdown";
import { ImageGallery } from "./ImageGallery";
import { Button } from "./Button";
import { status, priority } from "./Ticket";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { CompanyMachine, Problem, Ticket, User } from "../../Types/types";

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

  return (
    <div className="bg-opacity-75 z-[9999] bg-gray-800 absolute top-0 left-0 w-full h-full m-0">
      <div
        className="bg-gray-100 text-black dark:bg-gray-700 dark:text-white overflow-y-auto max-h-full md:max-h-[90vh] 
        md:min-h-[50%] md:min-w-[50%] md:absolute md:left-1/2 md:-translate-x-1/2 md:top-1/2 md:-translate-y-1/2"
      >
        {/* close button */}
        <button
          onClick={close}
          className="float-right m-3 sticky top-4 bg-gray-100 dark:bg-gray-700 z-10"
        >
          <XMarkIcon className="w-6 h-6" />
        </button>

        {/* dipslays information */}
        <div className="p-3">
          <span className="text-gray-400 text-sm float-left w-full md:w-[unset] md:float-right">
            {/* dislays date: dd/mm/yyyy */}
            Reported: {date.getDate().toString().padStart(2, "0")}/
            {date.getMonth() === 0
              ? "01"
              : date.getMonth().toString().padStart(2, "0")}
            /{date.getFullYear().toString()}
          </span>
          <strong className="text-2xl block">
            {companyMachine ? `${companyMachine.name}` : "Loading..."}
          </strong>
          <span>Associated Worker:</span>
          <p>Nobody</p>
          {/* dropdowns */}
          {/* <Dropdown
            selected={ticket.user.name}
            info={ticket.availableusers.map((user: User) => user.name)}
          /> */}
          <span>Status: </span>
          <Dropdown selected={ticket.status} info={status} />
          <span>Priority: </span>
          <Dropdown selected={ticket.priority} info={priority} />

          {/* displays user information */}
          <div className="xl:absolute xl:top-11 xl:right-28 my-3">
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
          </div>

          {/* dipslays the problem */}
          <strong className="text-xl block">Problem</strong>
          <strong>Problem Type: </strong>
          <span>{ticket.problemDescription ? "new problem" : "existing problem"}</span>
          <br />
          <strong className="">Problem Description</strong>
          <ul className="p-[revert] list-disc">
            <li>{ticket.problemDescription ? ticket.problemDescription : (problem ? problem.description : "Loading...")}</li>
          </ul>

          {/* image gallery */}
          <ImageGallery
            src={ticket.images}
            visible={true}
          />
          {/* save buttons */}
          {active ? ( // if delete button is clicked
            <div className="flex flex-row justify-between flex-wrap pt-4">
              <p className="text-red-500 text-sm p-3">
                Are you sure you want to delete this ticket?
              </p>

              <Button value="Yes" fun={close} />
              <Button value="No" fun={deleteP} />
            </div> // if delete button is not clicked
          ) : (
            <div className="flex flex-row justify-between flex-wrap pt-4">
              <Button value="Delete" fun={deleteP} />
              <Button value="Save" fun={close} />
            </div>
          )}
        </div>
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
        "h-screen z-[9999]  bg-opacity-75 bg-gray-800 absolute top-0 left-0 block w-full m-0"
      }
      onClick={close}
    >
      <div
        className="absolute top-1/2 -translate-y-1/2 md:left-1/2 md:-translate-x-1/2 
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
        {/* {!image.includes("video_preview") && (
          <img src={image} className="w-screen md:w-auto max-h-[80vh]" />
        )} */}
      </div>
    </div>
  );
}
