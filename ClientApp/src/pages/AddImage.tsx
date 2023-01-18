import React, { useState, useEffect, useRef, ChangeEvent } from "react";
import { isConstructorDeclaration, isJSDocAugmentsTag } from "typescript";
import { ImageGallery } from "../components/Shared/ImageGallery";
import { NavSide } from "../components/Shared/NavSide";
import placeholder from "../assets/video_preview.png";
import { SlowBuffer } from "buffer";
import { PlusIcon } from "@heroicons/react/24/outline";

const errors = {
  wrongFile: "You can only add images",
  overLimit: "You can only add up to 10 files",
  overLimitVideo: "You can only add 1 video",
  overLimitMB: "You can only add files below 500MB",
} as const;

export function AddImage({ setImages }: { setImages: React.Dispatch<React.SetStateAction<string[]>> }) {

  const [displayError, setError] = useState(""),
    [files, setFiles] = useState<File[]>([]),
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
      // else if (file.type.includes("video/") && lVideos.length < 1) {
      //   lVideos.push(URL.createObjectURL(file));
      //   lImages.push(placeholder);
      // }
      else {
        setError(errors.wrongFile); // if file is neither image or video
        if (file.type.includes("video/") && lVideos.length == 1)
          setError(errors.overLimitVideo); // if more than 1 video is added
        else if (file.size > 524288000) setError(errors.overLimitMB); // if file exceeds maximum size
      }
      setImageURLs(lImages);
      setVideoURLs(lVideos);

      setImages(lImages);
    });
  }, [files, setImages]);
  function displayImg(e: ChangeEvent<HTMLInputElement>) {
    setFiles([...e.target.files ?? []]);
    e.target.value = ""; // empties input file field so we can add the same file multiple times
  }
  function delet(e: any) {
    setError("");
    if (e.includes("video_preview")) {
      const filteredVideoList = videoURLS.filter(
        (element) => element !== e
      );
      setVideoURLs(filteredVideoList);
    }
    const filteredList = imageURLS.filter((element) => element !== e);
    setImageURLs(filteredList);
    setImages(filteredList);
  }
  return (
    <>
      {/* displays the images */}
      <div className="flex flex-row flex-wrap justify-center md:justify-start">
        <ImageGallery
          src={imageURLS}
          del={delet}
          visible={false}
          video={videoURLS}
        />
        <label className="dark:border-gray-600 border-2 bg-no-repeat m-2 h-32 w-32 rounded-3xl flex justify-center items-center cursor-pointer">
          <PlusIcon className="w-16" />
          <input
            type="file"
            accept="image/*"
            onChange={displayImg}
            multiple
            ref={inputRef}
            hidden
          />
        </label>
      </div>
      {displayError != "" ? (
        <p className="text-red-500 text-sm">{displayError}</p>
      ) : null}
    </>
  );
}