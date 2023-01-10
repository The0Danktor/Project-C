import React, { useEffect, useRef } from "react";
import { useState } from "react";
import placeholder from "../../assets/add_picture.png";
import ja from "../../assets/logo.png";
import { Dropdown } from "./Dropdown";
import { ImageGallery } from "./ImageGallery";
import { Button } from "./Button";
import { status, priority } from "./Ticket";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { Ticket, User } from "../../Types/types";

interface information {
  close: any;
  ticket: Ticket;
}
interface informationImage {
  image: string;
  close: any;
  video?: string[];
  height?: boolean;
}

// ticket pop up
export function PopUp(props: information) {
  const [active, setActive] = useState(false);
  // deletes ticket
  function deleteP() {
    setActive(!active);
  }

  return (
    <div className="bg-opacity-75 z-[9999] bg-gray-800 absolute top-0 left-0 w-full h-full m-0">
      <div
        className="bg-gray-100 text-black dark:bg-gray-700 dark:text-white overflow-y-auto max-h-full md:max-h-[90vh] 
        md:min-h-[50%] md:absolute md:left-1/2 md:-translate-x-1/2 md:top-1/2 md:-translate-y-1/2"
      >
        {/* close button */}
        <button
          onClick={props.close}
          className="float-right m-3 sticky top-4 bg-gray-100 dark:bg-gray-700 z-10"
        >
          <XMarkIcon className="w-6 h-6" />
        </button>

        {/* dipslays information */}
        <div className="p-3">
          <span className="text-gray-400 text-sm float-left w-full md:w-[unset] md:float-right">
            {/* dislays date: dd/mm/yyyy */}
            Reported: {props.ticket.date.getDate().toString().padStart(2, "0")}/
            {props.ticket.date.getMonth() == 0
              ? "01"
              : props.ticket.date.getMonth().toString().padStart(2, "0")}
            /{props.ticket.date.getFullYear().toString()}
          </span>
          <strong className="text-2xl block">
            {props.ticket.companymachine.name}
          </strong>
          <span>Associated Worker:</span>
          {/* dropdowns */}
          <Dropdown
            selected={props.ticket.user.name}
            info={props.ticket.availableusers.map((user: User) => user.name)}
          />
          <span>Status: </span>
          <Dropdown selected={props.ticket.status} info={status} />
          <span>Priority: </span>
          <Dropdown selected={props.ticket.priority} info={priority} />

          {/* displays user information */}
          <div className="xl:absolute xl:top-11 xl:right-28 my-3">
            <strong className="text-xl block">User Information</strong>
            <strong>User: </strong>
            <span>{props.ticket.customer.name}</span>
            <br />
            <strong>Email: </strong> {props.ticket.customer.email}
            <br />
            <strong>Phone Number: </strong> {props.ticket.customer.phone}
            <br />
            <strong>Group: </strong> {props.ticket.customer.companyid}
          </div>

          {/* dipslays the problem */}
          <strong className="text-xl block">Problem</strong>
          <strong>Problem Type: </strong>
          <span>{props.ticket.problem.id}</span>
          <br />
          <strong className="">Problem Description</strong>
          <ul className="p-[revert] list-disc">
            <li>{props.ticket.problem.description}</li>
          </ul>

          {/* image gallery */}
          <ImageGallery
            src={[
              placeholder,
              placeholder,
              placeholder,
              placeholder,
              ja,
              placeholder,
              placeholder,
              ja,
              placeholder,
              placeholder,
            ]}
            visible={true}
          />
          {/* save buttons */}
          {active ? ( // if delete button is clicked
            <div className="flex flex-row justify-between flex-wrap pt-4">
              <p className="text-red-500 text-sm p-3">
                Are you sure you want to delete this ticket?
              </p>

              <Button value="Yes" fun={props.close} />
              <Button value="No" fun={deleteP} />
            </div> // if delete button is not clicked
          ) : (
            <div className="flex flex-row justify-between flex-wrap pt-4">
              <Button value="Delete" fun={deleteP} />
              <Button value="Save" fun={props.close} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// pops up an image
export function PopUpImage(props: informationImage) {
  return (
    <div
      className={
        (props.height ? " md:h-[94vh] " : "") +
        "h-screen z-[9999]  bg-opacity-75 bg-gray-800 absolute top-0 left-0 block w-full m-0"
      }
      onClick={props.close}
    >
      <div
        className="absolute top-1/2 -translate-y-1/2 md:left-1/2 md:-translate-x-1/2 
      "
      >
        {/* displays video */}
        {props.image.includes("video_preview") &&
          props.video != undefined &&
          props.video.map((videoPreview: string) => (
            <video
              controls
              autoPlay
              src={videoPreview}
              className="w-screen md:w-auto md:max-h-[80vh]"
            />
          ))}

        {/* displays image */}
        {!props.image.includes("video_preview") && (
          <img src={props.image} className="w-screen md:w-auto max-h-[80vh]" />
        )}
      </div>
    </div>
  );
}
