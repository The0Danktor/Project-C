import React from "react";
interface information {
  display: boolean;
  status: string;
  date: Date;
  close: any;
}
export function PopUp(props: information) {
  return (
    <div className="bg-opacity-75 bg-gray-800 absolute top-0 left-0 w-full h-screen m-0 overflow-hidden">
      <div
        className="bg-gray-100 text-black dark:bg-gray-700 dark:text-white h-1/2 w-1/2 absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2
      phone:w-full phone:h-full "
      >
        <button onClick={props.close} className="float-right m-3">
          {/* displays close icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <div className="m-3">
          <span className="text-gray-400 text-md float-left w-full sm:w-[unset] sm:float-right">
            {/* dislays date: dd/mm/yyyy */}
            Reported: {props.date.getDate().toString().padStart(2, "0")}/
            {props.date.getMonth().toString().padStart(2, "0")}/
            {props.date.getFullYear().toString()}
          </span>
          <strong className="text-2xl block">Machine #3</strong>
          <span>Helped by:</span>
          <select name="member" className="">
            <option value="New" selected>
              Admin
            </option>
          </select>
          <br />
          <span>Status: </span>
          <select name="status" className="">
            <option value="New">New</option>
            <option value="In progress">In progress</option>
            <option value="Finished">Finished</option>
          </select>
          <br />
          <strong>User: admin</strong>
          <br />
          <strong className="">Description</strong>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
          </p>
          <img src="" alt="" />
          <button className="bg-gray-600 m-auto block w-40">Save</button>
        </div>
      </div>
    </div>
  );
}
