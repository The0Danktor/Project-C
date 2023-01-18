import React, { useState, useEffect, useRef } from "react";
import { isConstructorDeclaration, isJSDocAugmentsTag } from "typescript";
import { ImageGallery } from "../components/Shared/ImageGallery";
import { NavSide } from "../components/Shared/NavSide";
import placeholder from "../assets/video_preview.png";
import { SlowBuffer } from "buffer";
export function AddImage() {
  var errors = {
    wrongFile: "You can only add images and videos",
    overLimit: "You can only add up to 10 files",
    overLimitVideo: "You can only add 1 video",
    overLimitMB: "You can only add files below 500MB",
  };
  const [displayError, setError] = useState(""),
    [files, setFiles] = useState([] as any),
    [imageURLS, setImageURLs] = useState<Array<string>>([]), // list of images
    [videoURLS, setVideoURLs] = useState<Array<string>>([]), // list of videos
    inputRef = useRef(null);

  useEffect(() => {
    var lImages = [...imageURLS];
    var lVideos = [...videoURLS];

    // checks how many files are added
    if (lImages.length + lVideos.length + files.length > 10) {
      setError(errors.overLimit);
      return;
    }

    files.forEach((file: any) => {
      // checks if file is video or image
      if (file.type.includes("image/")) lImages.push(URL.createObjectURL(file));
      else if (file.type.includes("video/") && lVideos.length < 1) {
        lVideos.push(URL.createObjectURL(file));
        lImages.push(placeholder);
      } else {
        setError(errors.wrongFile); // if file is neither image or video
        if (file.type.includes("video/") && lVideos.length == 1)
          setError(errors.overLimitVideo); // if more than 1 video is added
        else if (file.size > 524288000) setError(errors.overLimitMB); // if file exceeds maximum size
      }
      setImageURLs(lImages);
      setVideoURLs(lVideos);
    });
  }, [files]);
  function displayImg(e: any) {
    setFiles([...e.target.files]);
    e.target.value = null; // empties input file field so we can add the same file multiple times
  }
  function delet(e: any) {
    setError("");
    if (e.includes("video_preview")) {
      const filteredVideoList = videoURLS.filter(
        (element) => element != element
      );
      setVideoURLs(filteredVideoList);
    }
    const filteredList = imageURLS.filter((element) => element != e);
    setImageURLs(filteredList);
  }

  function sendEmail() {
    fetch("https://localhost:7162/api/Email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      // body: JSON.stringify({
      //   Customer: ,
      //   User: ,
      //   Ticket,
      // }),
    });
  }
  return (
    <div className="flex dark:bg-gray-900">
      <NavSide />
      <div className="container">
        <div className="grow w-full m-2 md:m-3">
          <strong className="text-2xl">Select images</strong>
        </div>
        <form>
          <div className="w-full md:w-fit overflow-hidden">
            <label htmlFor="file" className="cursor-pointer">
              <p
                className="border md:w-40 border-gray-300 dark:border-gray-700 dark:hover:bg-gray-700 
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
              ref={inputRef}
              hidden
            />
          </div>
        </form>

        {/* displays the images */}
        <div className="flex flex-wrap ">
          <ImageGallery
            src={imageURLS}
            del={delet}
            visible={false}
            video={videoURLS}
          />
        </div>
        {displayError != "" ? (
          <p className="text-red-500 text-sm">{displayError}</p>
        ) : null}
        {/* </div> */}
      </div>
    </div>
  );
}
