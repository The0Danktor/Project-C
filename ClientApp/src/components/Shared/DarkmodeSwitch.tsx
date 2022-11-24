import React from "react";
import { useState } from "react";

// https://www.youtube.com/watch?v=MhEPd1HoVH8&ab_channel=ConorBailey
export function DarkmodeSwitch() {
  const sun = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
      />
    </svg>
  );

  const moon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
      />
    </svg>
  );

  let [logo, setLogo] = useState(
    localStorage.theme === "dark"
      ? { svg: moon, name: "moon" }
      : { svg: sun, name: "sun" }
  );

  const root = document.getElementsByTagName("html")[0];
  const toggleDarkMode = () => {
    root.setAttribute("class", "dark");
    root.classList.add("dark");
    root.classList.add("dark-scrollbar");
    localStorage.theme = "dark";
    setLogo({ svg: moon, name: "moon" });
  };
  const toggleLightMode = () => {
    root.removeAttribute("class");
    localStorage.theme = "light";
    setLogo({ svg: sun, name: "sun" });
  };
  const onChange = () => {
    console.log(localStorage.theme);
    if (localStorage.theme === "dark") {
      toggleLightMode();
    } else if (localStorage.theme === "light") {
      toggleDarkMode();
    }
  };

  return (
    <div>
      <button
        className="w-10 h5 md:w-12 md:h-6 rounded-2xl bg-gray-200 dark:bg-gray-800  flex items-center  transition duration-300 focus:outline-none shadow"
        onClick={onChange}
      >
        <div
          id="switch-toggle"
          className="w-6 h-6 md:w-7 md:h-7 relative rounded-full transition duration-500 transform bg-yellow-500 -translate-x-2 dark:translate-x-full dark:bg-gray-700 p-1 text-white flex items-center justify-center"
        >
          {logo.svg}
        </div>
      </button>
    </div>
  );
}
