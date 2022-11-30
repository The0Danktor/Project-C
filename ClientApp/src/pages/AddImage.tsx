import React, { useState, useEffect } from "react";
import { isJSDocAugmentsTag } from "typescript";
import { ImageGallery } from "../components/Shared/ImageGallery";
import { NavSide } from "../components/Shared/NavSide";

export function AddImage() {
  var errors = {
    wrongFile: "You can only add images and videos",
    overLimit: "You can only add up to 10 files",
    overLimitVideo: "You can only add 1 video",
    overLimitMB: "You can only add files below 500MB",
  };
  const [displayError, setError] = useState("");
  // show images
  const [images, setFiles] = useState([] as any);
  const [imageURLS, setImageURLs] = useState([]);
  // show videos
  const [videos, _] = useState([] as any);
  const [videoURLS, setVideoURLs] = useState([]);
  useEffect(() => {
    // checks how many files are added
    if (
      images.length + videos.length < 1 ||
      images.length + videos.length > 10
    ) {
      if (images.length + videos.length == 0) return;
      setError(errors.overLimit);
      return;
    }
    setError("");
    const listImages: any = [],
      listVideos: any = [];
    images.map((file: any) => {
      // filters if file is video or image
      if (file.type.includes("image/"))
        listImages.push(URL.createObjectURL(file));
      else if (file.type.includes("video/") && listVideos.length < 1)
        listVideos.push(URL.createObjectURL(file));
      else {
        setError(errors.wrongFile); // if file is neither image or video
        if (file.type.includes("video/") && listVideos.length == 1)
          setError(errors.overLimitVideo); // if more than 1 video is added
        else if (file.size > 524288000) setError(errors.overLimitMB); // if file exceeds maximum size
      }
      console.log(listImages.length + listVideos.length);
      setImageURLs(listImages);
      setVideoURLs(listVideos);
    });
  }, [images]);

  function displayImg(e: any) {
    setFiles([...e.target.files]);
  }
  return (
    <div className="flex dark:bg-gray-900 transition duration-300">
      <div className="hidden md:flex">
        <NavSide />
      </div>
      <div className="container">
        <div className="grow w-full p-3">
          <strong className="text-2xl">Select images</strong>
          <form>
            <div className="relative overflow-hidden ">
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
                // ref={filePicker}
                hidden
              />
            </div>
          </form>

          {imageURLS.map((imagePreview) => (
            <img src={imagePreview} className="min-h-[40px] max-h-64 my-2" />
          ))}

          {videoURLS.map((videoPreview) => (
            <video
              controls
              src={videoPreview}
              className="min-h-[40px] max-h-64 my-2"
            ></video>
          ))}

          <p className="text-red-500 text-sm">{displayError}</p>
        </div>
      </div>
    </div>
  );
}
