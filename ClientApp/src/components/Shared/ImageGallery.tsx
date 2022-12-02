import React, { useState } from "react";
import { PopUpImage } from "./PopUp";

interface information {
  src: any,
  del?: any
}

export function ImageGallery(props: information) {
  const [image, setImage] = useState("");
  // loops through entire list
  // places the element as the src
  // const [deleteimg, setDelete] = useState(false);
  const allImages = props.src.map((element: any) => (
    <div
      className="border-2 m-2 h-32 w-32 rounded-3xl overflow-hidden bg-cover bg-center cursor-pointer"
      style={{ backgroundImage: "url(" + element + ")" }}
      key={element}
      // onClick={() => Popup(element)}
    >
      <button
        onClick={() => props.del(element)}
        className="float-right m-3 bg-gray-100 dark:bg-gray-700 z-10"
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
      {/* <img
        src={element}
        alt=""
        className="opacity-0 absolute h-32 w-32 rounded-3xl"
        onClick={() => Popup(element)} 
      /> */}
    </div>
  ));

  const [active, setActive] = useState(false);
  function Popup(e: any) {
    setActive(!active); // displays popup if button is clicked
    setImage(e);
    if (active) {
      // will make everything unscrollable except the popup itself
      document.body.style.position = "inherit";
    } else {
      document.body.style.position = "fixed";
    }
  }
  return (
    <div className="flex flex-row flex-wrap justify-center md:justify-start">
      {allImages}
      {active && <PopUpImage image={image} close={Popup}></PopUpImage>}
    </div>
  );
}
