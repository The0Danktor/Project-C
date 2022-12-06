import React, { useState, useEffect } from "react";
import { PopUpImage } from "./PopUp";

interface information {
  src: any;
  del?: any;
}
export function ImageGallery(props: information) {
  const [image, setImage] = useState("");
  // loops through entire list
  // places the element as the src
  const allImages = props.src.map((element: any) => (
    <div
      className="border-2 m-2 h-32 w-32 rounded-3xl overflow-hidden bg-cover bg-center cursor-pointer"
      style={{ backgroundImage: "url(" + element + ")" }}
      key={element}
    >
      <img
        className="opacity-0 absolute h-32 w-32 rounded-3xl"
        onClick={() => Popup(element)}
      />
      {props.del != undefined && (
        <button
          onClick={() => props.del(element)}
          className="float-right p-2 rounded-bl-2xl bg-gray-100 dark:bg-gray-700 relative "
        >
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
      )}
    </div>
  ));
  const [active, setActive] = useState(false);

  function Popup(e: any) {
    setActive(!active); // displays popup if button is clicked
    setImage(e);
    // if (active) {
    // }
  }
  return (
    <div className="flex flex-row flex-wrap justify-center md:justify-start">
      {allImages}
      {active && <PopUpImage image={image} close={Popup}/>}
    </div>
  );
}
