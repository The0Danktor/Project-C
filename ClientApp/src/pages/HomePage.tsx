import React from "react";

export function HomePage() {
  const root = document.getElementsByTagName("html")[0];
  const toggleDarkMode = () => {
    root.setAttribute("class", "dark");
    localStorage.theme = "dark";
  };
  const toggleLightMode = () => {
    root.removeAttribute("class");
    localStorage.theme = "light";
  };
  return (
    <div className="bg-white dark:bg-gray-900 flex items-center justify-center w-screen h-screen flex-col">
      <div className="bg-white border rounded-md border-gray-300 flex text-gray-700 text-sm font-medium py-0.5 px-2 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 m-2">
        homePage
      </div> 
      <button className="bg-white border rounded-md border-gray-300 flex text-gray-700 text-sm font-medium py-0.5 px-2 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 m-2" onClick={toggleLightMode}>light</button>
      <button className="bg-white border rounded-md border-gray-300 flex text-gray-700 text-sm font-medium py-0.5 px-2 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 m-2" onClick={toggleDarkMode}>dark</button>
    </div>
  );
}
