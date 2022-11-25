import React, { useState } from "react";
import { ImageGallery } from "../components/Shared/ImageGallery";
import { NavSide } from "../components/Shared/NavSide";

export function AddImage() {
  const [imagePreview, setImagePreview] = useState();
  const [videoPreview, setVideoPreview] = useState();
  function displayImg(e : any) {
    // Reading New File (open file Picker Box)
    const reader = new FileReader();
    // Gettting Selected File (user can select multiple but we are choosing only one)
    const selectedFile = e.currentTarget.files[0];
    if (selectedFile) {
      reader.readAsDataURL(selectedFile);
    }
    // As the File loaded then set the stage as per the file type
    reader.onload = (readerEvent : any) => {
      if (selectedFile.type.includes("image")) {
        setImagePreview(readerEvent.target.result);
        // allImages.push(readerEvent.target.result);
      } else if (selectedFile.type.includes("video")) {
        setVideoPreview(readerEvent.target.result);
      }
    };
  }
  return (
    <div className="flex dark:bg-gray-900 transition duration-300">
      <div className="hidden md:flex">
        <NavSide />
      </div>
      <div className="grow flex flex-row flex-wrap justify-start content-start transition duration-300 dark:bg-gray-800 bg-gray-100 md:h-[89vh] md:m-10 md:rounded-xl md:overflow-auto">
        <div className="grow w-full p-3">
          <strong className="text-2xl">Select images</strong>
          <form>
            <div className="relative overflow-hidden ">
              <label htmlFor="file" className="cursor-pointer">
                <p
                  className="border w-screen md:w-40 border-gray-300 dark:border-gray-700 dark:hover:bg-gray-700 
                hover:bg-gray-200 dark:text-gray-400 rounded-lg ml-3 mb-2 md:mb-[unset] py-2 text-center"
                >
                  Browse files
                </p>
              </label>

              <input
                type="file"
                id="file"
                accept="image/*, video/*"
                onChange={displayImg}
                multiple
                // ref={filePicker}
                hidden
              />
            </div>
          </form>
          {/* <ImageGallery src={[allImages]} /> */}

          <img src={imagePreview} className="h-64"/>
          <video controls src={videoPreview} className="h-64 hidden"></video>
        </div>
      </div>
    </div>
  );
}
