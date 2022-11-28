import React, { useState, useEffect } from "react";
import { ImageGallery } from "../components/Shared/ImageGallery";
import { NavSide } from "../components/Shared/NavSide";

export function AddImage() {
  // show images
  const [images, setImages] = useState([] as any);
  const [imageURLS, setImageURLs] = useState([]);
  useEffect(() => {
    if (images.length < 1 || images.length > 11) return;
    const listImages: any = [];
    images.map((image: any) => listImages.push(URL.createObjectURL(image)));
    setImageURLs(listImages);
  }, [images]);

  // show videos
  const [videos, setVideos] = useState([] as any);
  const [videoURLS, setVideoURLs] = useState([]);

  useEffect(() => {
    if (videos.length < 1 || videos.length > 11) return;
    const listVideos: any = [];
    images.map((video: any) => listVideos.push(URL.createObjectURL(video)));
    setVideoURLs(listVideos);
  }, [videos]);

  function displayImg(e: any) {
    setImages([...e.target.files]);
    setVideos([...e.target.files]);

    // // const listImages: any[] = [];
    // function displayImg(e: any) {
    //   // Reading New File (open file Picker Box)
    //   const reader = new FileReader();
    //   // Gettting Selected File (user can select multiple but we are choosing only one)
    //   var key = e.currentTarget.files;
    //   const selectedImage = Object.keys(key).map((element: any) => {
    //     // const selectedImage = e.currentTarget.files[0];
    //     if (key[element]) {
    //       reader.readAsDataURL(key[element]);
    //     }
    //     // As the File loaded then set the stage as per the file type
    //     reader.onload = (readerEvent: any) => {
    //       if (key[element].type.includes("image")) {
    //         setImagePreview(readerEvent.target.result);
    //       } else if (key[element].type.includes("video")) {
    //         setVideoPreview(readerEvent.target.result);
    //       }
    //     };

    //   });
    // listImages.push(<img src={imagePreview} className="w-64" />);
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

          {imageURLS.map((imagePreview) => (
            <img src={imagePreview} className="min-h-[40px] max-h-64 my-2" />
          ))}

          {videoURLS.map((videoPreview) => (
            <video controls src={videoPreview} className="min-h-[40px] max-h-64"></video>
          ))}
          {/* <img src={imagePreview} className="min-h-[40px] max-h-64"/>
          {videoPreview != null && <video controls src={videoPreview} className="min-h-[40px] max-h-64"></video>} */}
        </div>
      </div>
    </div>
  );
}

// import React, { useState, useEffect } from "react";

// const AddImage = () => {
//   const [images, setImages] = useState([] as any);
//   const [imageURLS, setImageURLs] = useState([]);
//   useEffect(() => {
//     if (images.length < 1) return;
//     const newImageUrls: any = [];
//     images.forEach((image:any) => newImageUrls.push(URL.createObjectURL(image)));
//     setImageURLs(newImageUrls);
//   }, [images]);

//   function onImageChange(e: any) {
//     setImages([...e.target.files]);
//   }

//   return (
//     <>
//       <input type="file" multiple accept="image/*" onChange={onImageChange} />
//       {imageURLS.map((imageSrc) => (
//         <img src={imageSrc} alt="not fount" width={"250px"} />
//       ))}
//     </>
//   );
// };

// export default AddImage;
