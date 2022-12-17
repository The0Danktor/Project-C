import React, { useState, useEffect } from "react";
import { PopUpImage } from "./PopUp";
import { XMarkIcon } from "@heroicons/react/24/outline";


interface information {
  src: any;
  del?: any;
  visible?: boolean;
  video?: string[];
}
export function ImageGallery(props: information) {
  const [image, setImage] = useState("");
  const [active, setActive] = useState(false);

  // loops through entire list
  // places the element as the src
  const allImages = props.src.map((element: any, i: number) => (
    <div
      key={"image-" + i}
      className={
        // displays image gallery
        (props.visible ? (active ? "hidden" : "block") : null) +
        (element.includes("video_preview")
          ? " bg-[length:75px]"
          : " bg-cover") +
        " dark:border-gray-600 border-2 bg-no-repeat m-2 h-32 w-32 rounded-3xl overflow-hidden bg-center cursor-pointer"
      }
      style={{ backgroundImage: "url(" + element + ")" }} // displays image in the box
      onClick={() => Popup(element)}
    >
      <img
        className="opacity-0 absolute h-32 w-32 rounded-3xl"
      />
      {/* displays delete button */}
      {props.del != undefined && (
        <button
          onClick={e => {
            e.stopPropagation();
            props.del(element);
          }}
          className="float-right p-2 rounded-bl-2xl bg-gray-200 dark:bg-gray-600"
        >
          <XMarkIcon className="w-6 h-6" />
        </button>
      )}
    </div>
  ));

  function Popup(e: any) {
    console.log("Popup");
    setActive(!active); // displays popup if button is clicked
    setImage(e);
  }
  return (
    <div className="flex flex-row flex-wrap justify-center md:justify-start">
      {allImages}
      {active && (
        <PopUpImage
          image={image}
          video={props.video}
          close={Popup}
        />
      )}
    </div>
  );
}
