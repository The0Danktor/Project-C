import React from "react";
import { NavSide } from "../components/Shared/NavSide";

export function AddImage() {
  function displayImg() {

  }
  // var state = {
  //   img: logo
  // }
  
  // const handleChangeImage = e => {
  //   this.setState({[e.target.name]: URL.createObjectURL(e.target.files[0])})
  // }
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
                <p className="border w-screen md:w-40 border-gray-300 dark:border-gray-700 dark:hover:bg-gray-700 
            hover:bg-gray-200 dark:text-gray-400 rounded-lg ml-3 mb-2 md:mb-[unset] py-2 text-center">Browse files</p>
              </label>

              <input
                type="file"
                id="file"
                accept="image/*, video/*"
                onChange={displayImg}
                multiple
                className="absolute top-0 right-0 w-[0.1px] h-[0.1px]"
              />
            </div>
          </form>
          {/* <img src={this.state.imgSrc} /> */}
        </div>
      </div>
    </div>
  );
}
