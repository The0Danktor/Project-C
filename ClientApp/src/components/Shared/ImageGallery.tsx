import React from "react";

interface information {
  src: any;
}

export function ImageGallery(props: information) {
  // loops through entire list
  // places the element as the src
  const allImages = props.src.map((element : any) => (
    <img src={element} alt="" className="h-32 w-auto" />
  ));
  return (
    <div className="flex flex-row flex-wrap justify-center md:justify-start">
      {allImages}
    </div>
  );
}
